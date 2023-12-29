import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'

const RespondleastUserTest = () => {
   const [appState, setAppState] = useState({ response: null })
   const { userId, questionId } = useSelector((appState) => appState.answer)
   const navigate = useNavigate()
   const [error, setError] = useState(null)
   const [score, setScore] = useState()

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
      <Container>
         <Background>
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
                        <div className="FixedDisplay">
                           <span className="ColorBlue">
                              Mimimum number of words:
                           </span>
                           {appState.response && (
                              <p className="ColorText">
                                 {appState.response.attempts}
                              </p>
                           )}
                        </div>
                        <div className="FixedDisplay">
                           <span className="ColorBlue">
                              Question Statement:
                           </span>
                           {appState.response && (
                              <p className="ColorText">
                                 {appState.response.statement}
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
                        />
                     </div>
                  </ContaineScore>
               </ContainerCkeckInTheTest>
            </ContainerMain>
            <div className="ContainerTitleMap">
               <p className="TextUserAnswer">User’s Answer </p>
               <CreateAnswerTest>
                  <p>Respond: </p>
                  <div className="TitleText">
                     <p>{appState.response?.respond}</p>
                  </div>
               </CreateAnswerTest>
            </div>
            <div className="TextUserAnswer">
               <span>Number of words:</span>
               {appState.response && <p>{appState.response.count}</p>}
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
         </Background>
      </Container>
   )
}

export default RespondleastUserTest
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
   },
   '.FixedDisplay': {
      display: 'flex',
      gap: '10px',
      textAlign: 'center',
      fontWeight: 500,
   },
})
const Container = styled('div')({
   marginTop: '1.25rem',
   '.TextUserAnswer': {
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
      paddingTop: '2.87rem',
      display: 'flex',
      gap: '7px',
   },
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '2rem',
   },
   '.ContainerEvaluation': {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      color: 'green',
   },
   '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
      paddingLeft: '40px',
      width: '45px',
      height: '10px',
   },
   '.ContainerTitleMap': {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
   },
   '.ColorText': {
      color: '#4C4859',
   },
})
const ContaineScore = styled('div')({
   display: 'flex',
   flexDirection: 'column',
})
const ContainerCkeckInTheTest = styled('div')({
   display: 'flex',
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
   display: 'flex',
   gap: '7px',
   p: { color: '#4C4859', fontSize: '1rem', fontWeight: 500 },
   '.TitleText': {
      display: 'flex',
      justifyContent: 'start',
      p: {
         color: ' #3A10E5',
         fontSize: '1rem',
         gotnWeight: 400,
      },
   },
})
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
}))
