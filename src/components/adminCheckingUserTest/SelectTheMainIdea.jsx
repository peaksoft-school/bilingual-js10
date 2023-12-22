import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'
import { InputRadio } from '../UI/InputRadio'

const SelectTheMainIdea = () => {
   const [appState, setAppState] = useState({ response: null })
   const [error, setError] = useState(null)
   const [score, setScore] = useState(null)
   const { userId, questionId } = useSelector((state) => state.answer)
   const navigate = useNavigate()

   const getQuestionTest = async () => {
      try {
         const response = await axiosInstance.get(
            `/result/getQuestionsResults?userId=${userId}&questionId=${questionId}`
         )
         const allRepos = response.data
         setAppState({ response: allRepos })
      } catch (error) {
         setError(error)
      }
   }
   const postScore = async () => {
      try {
         await axiosInstance.post('/result/', {
            userId,
            questionId,
            score,
         })
         navigate(-1)
      } catch (error) {
         setError(error)
      }
   }
   useEffect(() => {
      getQuestionTest()
   }, [setAppState])

   const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10)
      const clampedValue = Math.min(Math.max(value, 0), 10)
      setScore(clampedValue)
   }
   return (
      <div>
         <Background>
            <Container>
               <ContainerMain>
                  <ContainerUser>
                     {appState.response && (
                        <div className="FixedDisplay">
                           <span className="ColorBlue">User:</span>
                           <p className="ColorText">
                              {appState.response.fullName}
                           </p>
                        </div>
                     )}
                     {appState.response && (
                        <div className="FixedDisplay">
                           <span className="ColorBlue">Test:</span>
                           <p className="ColorText">
                              {appState.response.testTitle}
                           </p>
                        </div>
                     )}
                  </ContainerUser>
                  <ContainerCkeckInTheTest>
                     <div>
                        <p className="TextTestQuestion ">Test Question </p>
                        <ContainerTestQuestion>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Question Title:</span>
                              {appState.response && (
                                 <p className="ColorText">
                                    {appState.response.questionTitle}
                                 </p>
                              )}
                           </div>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">
                                 Duration (in minutes):
                              </span>
                              {appState.response && (
                                 <span className="ColorText">
                                    {appState.response.duration}
                                 </span>
                              )}
                           </div>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Question Type:</span>
                              {appState.response && (
                                 <p className="ColorText">
                                    {appState.response.questionType}
                                 </p>
                              )}
                           </div>
                        </ContainerTestQuestion>
                     </div>
                     <ContaineScore>
                        <p>Evaluation</p>
                        <div className="ContainerEvaluation">
                           <p className="ColorBlue">Score:(1-10)</p>
                           <InputNumber
                              type="number"
                              onChange={handleInputChange}
                              max={10}
                              min={0}
                           />
                        </div>
                     </ContaineScore>
                  </ContainerCkeckInTheTest>
                  <ContainerUserTest>
                     <div className="ContainerPassage">
                        <span className="passege">Passage: </span>
                        {appState.response && (
                           <p>{appState.response.passage}</p>
                        )}
                     </div>
                     <div className="ContainerTitleMap">
                        {appState.response &&
                           appState.response.optionList.map((el, index) => (
                              <CreateAnswerTest key={el.id}>
                                 <div className="ContainCreatTest">
                                    <div className="TitleText">
                                       <span className="ColorNumber">
                                          {index + 1}
                                       </span>
                                       <p>{el.title}</p>
                                    </div>
                                    <div className="ContainerRadio">
                                       <InputRadio
                                          variant="RADIO"
                                          checkedSwitch={el.isTrue}
                                       />
                                    </div>
                                 </div>
                              </CreateAnswerTest>
                           ))}
                     </div>
                  </ContainerUserTest>
               </ContainerMain>
               <div className="ContainerTitleMap">
                  <p className="TextUserAnswer">User’s Answer </p>
                  {appState.response &&
                     appState.response.optionFromUser.map((el, index) => (
                        <CreateAnswerTest key={el.id}>
                           <div className="ContainCreatTest">
                              <div className="TitleText">
                                 <span className="ColorNumber">
                                    {index + 1}
                                 </span>
                                 <p>{el.title}</p>
                              </div>
                           </div>
                        </CreateAnswerTest>
                     ))}
               </div>
               {error && (
                  <ErrorBox>
                     An error occurred:
                     {error.message || 'Unknown error'}
                  </ErrorBox>
               )}
               <ContainerButtons>
                  <Button
                     variant="outlined"
                     hoverStyle="#3A10E5"
                     onClick={() => navigate(-1)}
                  >
                     GO BACK
                  </Button>
                  <Button
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     onClick={postScore}
                  >
                     Save
                  </Button>
               </ContainerButtons>
            </Container>
         </Background>
      </div>
   )
}

export default SelectTheMainIdea

const ContainerUserTest = styled('div')({
   display: 'flex',
   alignItems: 'start',
   justifyContent: 'start',
   gap: '2.5rem',
   flexDirection: 'column',
   '.NextButton': {
      width: '9rem',
      height: '2.62rem',
      marginTop: '2rem',
   },
   '.ContainerPassage': {
      display: 'flex',
      gap: '5px',
      justifyContent: 'start',
      alignContent: 'start',
      p: {
         color: '#4C4859',
         fontSize: '1rem',
         fontWeight: 400,
      },
   },
   '.passege': {
      color: ' #4C4859',
      fontSize: '1.10rem',
      fontWeight: 500,
   },
})
const InputNumber = styled('input')({
   marginTop: '6px',
   width: '5.8rem',
   height: '2.8rem',
   borderRadius: '9px',
   border: '2px solid rgba(196, 196, 196, 0.60)',
   outline: 'none',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   textAlign: 'center',
   fontSize: '1.2rem',
   color: '#4C4859',
   '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
   },
   '&[type=number]': {
      '-moz-appearance': 'textfield',
   },
   '&:focus': {
      border: '2px solid rgba(196, 196, 196, 0.60)',
   },
})
const ErrorBox = styled('div')({
   color: 'red',
   marginTop: '7px',
})
const ContainerMain = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '3.12rem',
})
const ContainerUser = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   '.ColorBlue': {
      color: '#3752B4',
      fontSize: '1.12rem',
      fontWeight: 500,
   },
   '.FixedDisplay': {
      display: 'flex',
      gap: '10px',
      justifyContent: 'start',
      alignItems: 'center',
   },
})
const Container = styled('div')({
   marginTop: '1.25rem',
   padding: '2rem 1.25rem',
   '.TextUserAnswer': {
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
      paddingTop: '2.87rem',
      display: 'flex',
      gap: '7px',
   },
   '.ColorNumber': {
      color: '#4C4859',
   },
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '3rem',
   },
   '.ContainerEvaluation': {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      color: 'green',
   },
   '.ColorText': {
      color: '#4C4859',
      fontWeight: 400,
   },
   '.ContainCreatTest': {
      display: 'flex',
      borderRadius: '0.5rem',
      border: '1px solid #D4D0D0',
      background: '#fff',
      padding: '0.88rem',
      width: '56.25rem',
      height: '4.37rem',
      justifyContent: 'space-between',
      '.ContainerRadio': {
         display: 'flex',
         alignItems: 'start',
         paddingTop: '5px',
         gap: '1rem',
      },
   },
   '.ContainerTitleMap': {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      alignItems: 'start',
   },
})
const ContaineScore = styled('div')({
   display: 'flex',
   flexDirection: 'column',
})
const ContainerCkeckInTheTest = styled('div')({
   display: 'flex',
   gap: '0.87rem',
   justifyContent: 'space-between',
   width: '100%',
   alignContent: 'center',
   fontWeight: 500,
   '.ColorBlue': {
      color: '#3752B4',
   },
})
const ContainerTestQuestion = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
   fontWeight: 500,
   gap: '0.5rem',
   '.FixedDisplay': {
      display: 'flex',
      gap: '10px',
      textAlign: 'center',
   },
})
const CreateAnswerTest = styled('div')({
   p: { color: '#4C4859', fontSize: '1rem', fontWeight: 500 },
   '.TitleText': {
      display: 'flex',
      gap: '1.63rem',
   },
})
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
}))
