import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import Header from '../../layout/Header'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'

const HighlightedAnswerCheck = ({
   title,
   duration,
   questionType,
   wordsNum,
   answer,
   statement,
}) => {
   const [score, setScore] = useState(7)

   const getQuestionTest = async () => {
      try {
         const response = await axiosInstance.get(
            'result/getQuestionsResults?userId=1&questionId=4'
         )
         console.log(response)
      } catch (error) {
         console.log(error)
      }
   }

   //    useEffect(() => {
   //       getQuestionTest()
   //    }, [])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch()
            const data = await response.json()
            const initialScoreFromBackend = data.score
            setScore(initialScoreFromBackend)
         } catch (error) {
            console.error(error)
         }
      }
      fetchData()
      getQuestionTest()
   }, [])

   return (
      <>
         <Header />
         <Background marginTop="3rem" padding="0">
            <Container>
               <ContainerFlex>
                  <ContainerCkeckInTheTest>
                     <div>
                        <p className="TextTestQuestion ">Test Question </p>
                        <ContainerTestQuestion>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Question Title:</span>
                              <p> {title} </p>
                           </div>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">
                                 Duration (in minutes):
                              </span>
                              <span>{duration} </span>
                           </div>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Question Type:</span>
                              <p>{questionType}</p>
                           </div>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">
                                 Mimimum number of words:
                              </span>
                              <p>{wordsNum}</p>
                           </div>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">
                                 Question Statement:
                              </span>
                              <p>{statement}</p>
                           </div>
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
                  <ContainerUserAnswer>
                     <div>
                        <p className="TextUserAnswer">User’s Answer </p>
                     </div>
                     <div className="statement-box">
                        <span className="statement">Respond:</span>
                        <p className="p-answer">{answer}</p>
                     </div>
                     <span className="statement">Number of words:</span>
                  </ContainerUserAnswer>
               </ContainerFlex>
               <ContainerButtons>
                  <Button variant="outlined" hoverStyle="#3A10E5">
                     GO BACK
                  </Button>
                  <Button defaultStyle="#2AB930" hoverStyle="#31CF38">
                     Save
                  </Button>
               </ContainerButtons>
            </Container>
         </Background>
      </>
   )
}
export default HighlightedAnswerCheck

const Container = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '3rem',
   width: '58rem',
   height: '27rem',
   marginTop: '4.25rem',
   fontFamily: ' DINNextRoundedLTW04-Medium',
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '2rem',
      marginBottom: '0.6rem',
   },
   '.p': {
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      fontSize: '1rem',
      lineHeight: '1rem',
      color: '#4C4859',
      fontWeight: 400,
   },
})

const ContainerFlex = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '2rem',
   justifyContent: 'center',
   alignItems: 'start',
})
const ContaineScore = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginRight: '2.2rem',
   '.rightAnswer': {
      color: 'green',
      fontWeight: 500,
      paddingLeft: '10px',
   },
})
const ContainerUserAnswer = styled('div')({
   width: '55rem',
   height: '9rem',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
   gap: '1rem',
   '.statement-box': {
      width: '56rem',
      height: '3.5rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      gap: '0.5rem',
   },
   '.TextUserAnswer': {
      fontFamily: 'DIN Next Rounded LT W04 Medium',
      color: '#4C4859',
      fontSize: '1.125rem',
      lineHeight: '1.28rem',
      fontWeight: 500,
   },
   '.statement': {
      fontFamily: 'DIN Next Rounded LT W04 Medium',
      color: '#4C4859',
      fontSize: '1.14rem',
      lineHeight: '1.28rem',
      fontWeight: 500,
   },
   '.p-answer': {
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      fontSize: '1rem',
      paddingTop: '4px',
      lineHeight: '1rem',
      color: '#3752B4',
      fontWeight: 400,
      alignContent: 'center',
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
const ContainerCkeckInTheTest = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   alignContent: 'center',
   flexDirection: 'row',
   gap: '1rem',
   fontWeight: 500,
   '.ColorBlue': {
      color: '#3752B4',
   },
})
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginRight: '2.2rem',
   button: {
      fontWeight: 600,
   },
}))
