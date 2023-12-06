import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { useDispatch } from 'react-redux'
import { axiosInstance } from '../../config/axiosInstance'
import Header from '../../layout/Header'
import Button from '../UI/Buttons/Button'
import { Background } from '../../layout/Background'
import { InputRadio } from '../UI/InputRadio'

const SelectRealEnglishWords = () => {
   // const dispatch = useDispatch()
   const [score] = useState(7)
   const [appState, setAppState] = useState({ response: null })
   const usetTestId = 1
   const getQuestionTest = async () => {
      try {
         const response = await axiosInstance.get(
            `/result/getQuestionsResults?userId=1&questionId=${usetTestId}`
         )
         // dispatch(response)
         const allRepos = response.data
         setAppState({ response: allRepos })
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getQuestionTest()
   }, [setAppState])

   // useEffect(() => {
   //    const fetchData = async () => {
   //       try {
   //          const response = await fetch()
   //          const data = await response.json()
   //          const initialScoreFromBackend = data.score
   //          setScore(initialScoreFromBackend)
   //       } catch (error) {
   //          console.error(error)
   //       }
   //    }
   //    fetchData()
   // }, [])

   return (
      <>
         <Header />
         <Container>
            <Background padding="0">
               <ContainerFlex>
                  <ContainerCkeckInTheTest>
                     <div>
                        <p className="TextTestQuestion">Test Question </p>
                        <ContainerTestQuestion>
                           {appState.response && (
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Question Title:
                                 </span>
                                 <p>{appState.response.questionTitle}</p>
                              </div>
                           )}
                           {appState.response && (
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Duration (in minutes):
                                 </span>
                                 <span>{appState.response.duration}</span>
                              </div>
                           )}
                           {appState.response && (
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Question Type:
                                 </span>
                                 <p>{appState.response.questionType}</p>
                              </div>
                           )}
                        </ContainerTestQuestion>
                     </div>
                     <ContaineScore>
                        <p>Evaluation</p>
                        <div className="ContainerEvaluation">
                           <p className="ColorBlue">Score:</p>
                           <span>{score}</span>
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
                                 <InputRadio variant="CHECKBOX" />
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
                  </ContainerCreateAnswerTest>
               </ContainerFlex>
               <ContainerButtons>
                  <Button variant="outlined" hoverStyle="#3A10E5">
                     GO BACK
                  </Button>
                  <Button
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     onClick={getQuestionTest}
                  >
                     Save
                  </Button>
               </ContainerButtons>
            </Background>
         </Container>
      </>
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
