import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'

const HighlightedAnswerCheck = () => {
   const [score, setScore] = useState()
   const [state, setState] = useState({ response: null })
   const [error, setError] = useState(null)
   const { userId, questionId } = useSelector((state) => state.answer)
   const navigate = useNavigate()

   const getQuestionResult = async () => {
      try {
         const response = await axiosInstance.get(
            `/result/getQuestionsResults?userId=${userId}&questionId=${questionId}`
         )
         const allresult = response.data
         setState({ response: allresult })
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
   const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10)
      const clampedValue = Math.min(Math.max(value, 0), 10)
      setScore(clampedValue)
   }
   useEffect(() => {
      getQuestionResult()
   }, [])

   return (
      <Background marginTop="3rem" padding="0">
         <Container>
            <ContainerFlex>
               <ContainerUser>
                  {state.response && (
                     <div className="FixedDisplay">
                        <span className="ColorBlue">User:</span>
                        <p className="ColorParagraf">
                           {state.response.fullName}
                        </p>
                     </div>
                  )}
                  {state.response && (
                     <div className="FixedDisplay">
                        <span className="ColorBlue">Test:</span>
                        <p className="ColorParagraf">
                           {state.response.testTitle}
                        </p>
                     </div>
                  )}
               </ContainerUser>
               <ContainerCkeckInTheTest>
                  <div>
                     <p className="TextTestQuestion ">Test Question </p>
                     <ContainerTestQuestion>
                        {state.response && (
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Question Title:</span>
                              <p className="ColorParagraf">
                                 {' '}
                                 {state.response.questionTitle}{' '}
                              </p>
                           </div>
                        )}
                        {state.response && (
                           <div className="FixedDisplay">
                              <span className="ColorBlue">
                                 Duration (in minutes):
                              </span>
                              <span className="ColorParagraf">
                                 {state.response.duration}{' '}
                              </span>
                           </div>
                        )}
                        {state.response && (
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Question Type:</span>
                              <p className="ColorParagraf">
                                 {state.response.questionType}
                              </p>
                           </div>
                        )}
                     </ContainerTestQuestion>
                  </div>
                  <ContaineScore>
                     <p>Evaluation</p>
                     <div className="ContainerEvaluation">
                        <p className="ColorBlue">Score:(1-10)</p>
                        <InputNumber
                           type="number"
                           value={score}
                           onChange={handleInputChange}
                        />
                     </div>
                  </ContaineScore>
               </ContainerCkeckInTheTest>
               <ContainerQuestion>
                  {state.response && (
                     <BoxPassage>
                        <span className="statement">Passage:</span>
                        <p className="ColorParagraf">
                           {state.response.passage}
                        </p>
                     </BoxPassage>
                  )}
                  {state.response && (
                     <BoxStatement>
                        <span className="statement">Question Statement:</span>
                        <p className="ColorParagraf">
                           {state.response.statement}
                        </p>
                     </BoxStatement>
                  )}
                  {state.response && (
                     <BoxCorrectAnswer>
                        <span className="statement">Correct Answer:</span>
                        <p className="correctAnswer">
                           {state.response.correctAnswer}
                        </p>
                     </BoxCorrectAnswer>
                  )}
               </ContainerQuestion>
               <ContainerUserAnswer>
                  <div>
                     <p className="TextUserAnswer">User’s Answer </p>
                  </div>
                  <div className="statement-box">
                     <span className="statement">Respond:</span>
                     {state.response && (
                        <p className="ColorParagraf">
                           {state.response.respond}
                        </p>
                     )}
                  </div>
                  {error && (
                     <ErrorBox>
                        An error occurred:
                        {error.message || 'Unknown error'}
                     </ErrorBox>
                  )}
               </ContainerUserAnswer>
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
                  onClick={postScore}
                  defaultStyle="#2AB930"
                  hoverStyle="#31CF38"
               >
                  Save
               </Button>
            </ContainerButtons>
         </Container>
      </Background>
   )
}
export default HighlightedAnswerCheck

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
const BoxPassage = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'start',
   gap: '7px',
   width: '56rem',
   height: '8.7rem',
})
const BoxStatement = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   gap: '7px',
   width: '56rem',
   height: '2.7rem',
})
const Container = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '58rem',
   height: '44rem',
   marginTop: '1.25rem',
   fontFamily: 'Poppins',
   '.statement': {
      fontFamily: 'Poppins',
      color: '#4C4859',
      fontSize: '1.14rem',
      lineHeight: '1.28rem',
      paddingTop: '1px',
      fontWeight: 500,
   },
   '.correctAnswer': {
      color: '#3A10E5',
   },
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '2rem',
      marginBottom: '0.6rem',
   },
   '.ColorParagraf': {
      color: '#4C4859',
   },
})

const ContainerFlex = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.5rem',
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
const BoxCorrectAnswer = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'start',
   alignItems: 'center',
   gap: '7px',
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
const ContainerUserAnswer = styled('div')({
   width: '55rem',
   height: '9rem',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
   gap: '4px',
   '.statement-box': {
      width: '56rem',
      height: '3.5rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'center',
      gap: '0.5rem',
   },
   '.TextUserAnswer': {
      fontFamily: 'Poppins',
      color: '#4C4859',
      fontSize: '1.125rem',
      lineHeight: '1.28rem',
      fontWeight: 500,
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
const ContainerQuestion = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '56rem',
   height: '14rem',
})
const ContainerCkeckInTheTest = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   alignContent: 'center',
   flexDirection: 'row',
   gap: '1.5rem',
   marginTop: '0.5rem',
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
