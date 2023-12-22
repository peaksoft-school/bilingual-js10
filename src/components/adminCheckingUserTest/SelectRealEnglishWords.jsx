import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { axiosInstance } from '../../config/axiosInstance'
import Button from '../UI/Buttons/Button'
import { Background } from '../../layout/Background'
import { InputRadio } from '../UI/InputRadio'

const SelectRealEnglishWords = () => {
   const [appState, setAppState] = useState({ response: null })
   const [error, setError] = useState(null)
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
         })
         navigate(-1)
      } catch (error) {
         setError(error)
      }
   }
   useEffect(() => {
      getQuestionTest()
   }, [setAppState])

   return (
      <div>
         <Container>
            <Background padding="0">
               <ContainerFlex>
                  <ContainerUser>
                     <div className="FixedDisplay">
                        <span className="ColorBlue">User:</span>
                        {appState.response && (
                           <p className="ColorParagraf">
                              {appState.response.fullName}
                           </p>
                        )}
                     </div>
                     <div className="FixedDisplay">
                        <span className="ColorBlue">Test:</span>
                        {appState.response && (
                           <p className="ColorParagraf">
                              {appState.response.testTitle}
                           </p>
                        )}
                     </div>
                  </ContainerUser>
                  <ContainerCkeckInTheTest>
                     <div>
                        <p className="TextTestQuestion">Test Question </p>
                        <ContainerTestQuestion>
                           {appState.response && (
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Question Title:
                                 </span>
                                 <p className="ColorParagraf">
                                    {appState.response.questionTitle}
                                 </p>
                              </div>
                           )}
                           {appState.response && (
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Duration (in minutes):
                                 </span>
                                 <span className="ColorParagraf">
                                    {appState.response.duration}
                                 </span>
                              </div>
                           )}
                           {appState.response && (
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Question Type:
                                 </span>
                                 <p className="ColorParagraf">
                                    {appState.response.questionType}
                                 </p>
                              </div>
                           )}
                        </ContainerTestQuestion>
                     </div>
                     <ContaineScore>
                        <p>Evaluation</p>
                        <div className="ContainerEvaluation">
                           <p className="ColorBlue">Score:</p>
                           {appState.response && (
                              <span>{appState.response.score}</span>
                           )}
                        </div>
                     </ContaineScore>
                  </ContainerCkeckInTheTest>
                  <ContainerCreateTest>
                     {appState.response &&
                        appState.response.optionList.map((el, index) => (
                           <CreateTest key={el.id}>
                              <div>
                                 <MainContainer>
                                    <p className="Number-Words">{index + 1}</p>
                                    <div className="NumberText">
                                       <span>{el.title}</span>
                                    </div>
                                 </MainContainer>
                              </div>
                              <div className="InputDelete">
                                 <InputRadio
                                    variant="CHECKBOX"
                                    checkedSwitch={el.isTrue}
                                 />
                              </div>
                           </CreateTest>
                        ))}
                  </ContainerCreateTest>
                  <ContainerCreateAnswerTest>
                     <p className="TextUserAnswer">User’s Answer </p>
                     <div className="ContainerAnswerMap">
                        {appState.response &&
                           appState.response.optionFromUser.map((item) => (
                              <CreateAnswerTest key={item.id}>
                                 <MainContainer>
                                    <div className="NumberText">
                                       <p>{item.title}</p>
                                    </div>
                                 </MainContainer>
                              </CreateAnswerTest>
                           ))}
                     </div>

                     {error && (
                        <ErrorBox>
                           An error occurred:
                           {error.message || 'Unknown error'}
                        </ErrorBox>
                     )}
                  </ContainerCreateAnswerTest>
               </ContainerFlex>
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
      </div>
   )
}

export default SelectRealEnglishWords

const Container = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '4.25rem',
   fontFamily: ' DINNextRoundedLTW04-Medium',
   '.TextUserAnswer': {
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
      paddingTop: '2.87rem',
   },
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '2rem',
   },
   '.ContainerEvaluation': {
      display: 'flex',
      gap: '7px',
      color: 'green',
   },
   '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
      paddingLeft: '40px',
      width: '45px',
      height: '10px',
   },
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
const ErrorBox = styled('div')({
   color: 'red',
   marginTop: '7px',
})
const ContaineScore = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginRight: '3.2rem',
   '.rightAnswer': {
      color: 'green',
      fontWeight: 500,
      paddingLeft: '10px',
   },
})
const ContainerFlex = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
   gap: '3.13rem',
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
   '.FixedDisplay': {
      display: 'flex',
      gap: '10px',
      textAlign: 'center',
   },
})
const ContainerCreateTest = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   marginTop: '9px',
   flexWrap: 'wrap',
   paddingTop: '20px',
   color: ' #4C4859',
}))
const CreateTest = styled('div')(() => ({
   border: 'solid 1.53px #D4D0D0',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '14.5rem',
   height: '2.8rem',
   borderRadius: '0.5rem',
   p: { color: 'grey' },
   padding: '0.88rem 1rem 0.81rem 1rem ',
   '.NumberText': {
      display: 'flex',
      justifyContent: 'start',
      p: {
         color: '#4C4859',
      },
   },
}))
const MainContainer = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   '.Number-Words': {
      color: '#4C4859',
   },
}))
const ContainerCreateAnswerTest = styled('div')({
   '.ContainerAnswerMap': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.87rem',
      marginTop: '9px',
      flexWrap: 'wrap',
   },
})
const CreateAnswerTest = styled('div')({
   border: 'solid 1.53px #D4D0D0',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '10.6rem',
   height: '2.8rem',
   borderRadius: '0.5rem',
   p: { color: 'grey' },
   padding: '0.88rem 1rem 0.81rem 1rem ',
   '.NumberText': {
      display: 'flex',
      justifyContent: 'start',
      p: {
         color: '#4C4859',
      },
   },
})
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
   marginRight: '3.2rem',
}))
