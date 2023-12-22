import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'

const DescribeImage = () => {
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
      <Container>
         <Background marginTop="3rem" padding="0">
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
                                 {state.response.questionTitle}
                              </p>
                           </div>
                        )}
                        {state.response && (
                           <div className="FixedDisplay">
                              <span className="ColorBlue">
                                 Duration (in minutes):
                              </span>
                              <span className="ColorParagraf">
                                 {state.response.duration}
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
               <ContainerImgQuestion>
                  <BoxImg>
                     {state.response && (
                        <img
                           src={state.response.audioFile}
                           alt="img comes with props"
                        />
                     )}
                  </BoxImg>
                  <BoxCorrectAnswer>
                     <p className="CarrentAnswer">Correct Answer:</p>
                     {state.response && (
                        <span>{state.response.correctAnswer}</span>
                     )}
                  </BoxCorrectAnswer>
               </ContainerImgQuestion>
               <ContainerUserAnswer>
                  <p className="TextUserAnswer">User’s Answer </p>
                  <div className="statement-box">
                     <span className="statement">Entered statement:</span>
                     {state.response && (
                        <p className="p">{state.response.respond}</p>
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
         </Background>
      </Container>
   )
}

export default DescribeImage

const ErrorBox = styled('div')({
   color: 'red',
   marginTop: '7px',
})
const Container = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   fontFamily: 'Poppins',
   '.imgReplace': {
      width: '100%',
      height: '100%',
   },
   '.ColorParagraf': {
      color: '#4C4859',
   },
   '.ContainerEvaluation': {
      display: 'flex',
      flexDirection: 'column',
      color: 'green',
   },
   '.TextTestQuestion': {
      color: '#4C4859',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '2rem',
      marginBottom: '0.6rem',
   },
   '.CarrectAnswer': {
      fontSize: '1rem',
      lineHeight: '1rem',
      color: '#4C4859 ',
      fontWeight: 400,
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
const ContainerFlex = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
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
const ContainerImgQuestion = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   width: '38rem',
   height: '13rem',
})
const BoxImg = styled('div')({
   width: '11.25rem',
   height: '11rem',
   alignSelf: 'center',
   borderRadius: '0.5rem',
   img: {
      borderRadius: '0.5rem',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
   },
   '.replaceImg': {
      backgroundColor: 'blue',
      position: 'absolute',
      zIndex: 5,
      color: 'white',
      width: '4rem',
      height: '3rem',
      textAlign: 'center',
      cursor: 'pointer',
      margin: 0,
   },
})
const BoxCorrectAnswer = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'start',
   alignItems: 'center',
   gap: '1rem',
})
const ContainerUserAnswer = styled('div')({
   width: '38.25rem',
   height: '4rem',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'start',
   gap: '1rem',
   '.statement-box': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
   },
   '.TextUserAnswer': {
      fontFamily: 'Poppins',
      color: '#4C4859',
      fontSize: '1.125rem',
      lineHeight: '1.28rem',
      fontWeight: 500,
   },
   '.statement': {
      fontFamily: 'Poppins',
      color: '#4C4859',
      fontSize: '1.14rem',
      lineHeight: '1.28rem',
      fontWeight: 500,
   },
})
const ContainerCkeckInTheTest = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   alignContent: 'center',
   flexDirection: 'row',
   gap: '10rem',
   fontWeight: 500,
   '.ColorBlue': {
      color: '#3752B4',
   },
})
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
   marginRight: '2.2rem',
   button: {
      fontWeight: 600,
   },
}))
