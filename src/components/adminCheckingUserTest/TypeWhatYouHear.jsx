import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { PlayAudio, StopRecordingAudio } from '../../assets'
import { getResult, sendingResult } from '../../api/questionsService'

export const TypeWhatYouHear = () => {
   const [isRecording, setRecording] = useState(false)
   const [audio, setAudio] = useState(null)
   const [questionData, setQuestionData] = useState({})
   const [inputValue, setInputValue] = useState('')
   const [error, setError] = useState(null)
   const userId = useSelector((state) => state.answer.userId)
   const questionId = useSelector((state) => state.answer.questionId)
   const navigate = useNavigate()
   const handleInputChange = (e) => {
      const newValue = Math.min(parseInt(e.target.value, 10), 10)
      setInputValue(newValue)
   }

   const handleButtonClick = () => {
      if (isRecording) {
         setRecording(false)
         if (audio) {
            audio.pause()
         }
      } else {
         setRecording(true)
         const newAudio = new Audio(questionData?.audioFile)
         newAudio.onloadeddata = () => {
            newAudio.play()
         }
         setAudio(newAudio)
      }
   }

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await getResult(userId, questionId)
            setQuestionData(response.data)
         } catch (error) {
            setError(`Ошибка при загрузке данных: ${error.message}`)
         }
      }

      fetchData()
   }, [])

   const postScore = async () => {
      try {
         await sendingResult({
            userId,
            questionId,
            score: inputValue,
         })
         navigate(-1)
      } catch (error) {
         setError(`Ошибка при отправке результата: ${error.message}`)
      }
   }

   const {
      questionTitle,
      questionType,
      correctAnswer,
      respond,
      attempts,
      count,
      fullName,
      testTitle,
      duration,
   } = questionData
   return (
      <div>
         <Container>
            <Background>
               <ContainerFlex>
                  <ContainerCkeckInTheTest>
                     <div>
                        <ContainerTestQuestion>
                           <div className="FixedDisplay">
                              <span className="ColorBlue">User: </span>
                              <Text>{fullName}</Text>
                           </div>

                           <div className="FixedDisplay">
                              <span className="ColorBlue">Test: </span>
                              <Text> {testTitle}</Text>
                           </div>
                           <div style={{ marginTop: '3rem' }}>
                              <p className="TextTestQuestion ">Test Question</p>
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Question Title:
                                 </span>
                                 <Text> {questionTitle} </Text>
                              </div>
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Duration (in minutes):
                                 </span>
                                 <Text>{duration} </Text>
                              </div>
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Question Type:
                                 </span>
                                 <Text>{questionType}</Text>
                              </div>
                              <div className="FixedDisplay">
                                 <span className="ColorBlue">
                                    Number of Replays:
                                 </span>
                                 <Text>{attempts}</Text>
                              </div>
                           </div>
                        </ContainerTestQuestion>
                     </div>
                     <ContaineScore>
                        <p>Evaluation</p>
                        <div className="ContainerEvaluation">
                           <p className="ColorBlue">Score:(1-10)</p>
                        </div>
                        <InputNumber
                           type="number"
                           min="0"
                           max="10"
                           value={inputValue}
                           onChange={handleInputChange}
                        />
                     </ContaineScore>
                  </ContainerCkeckInTheTest>
                  <ContainerButton>
                     <Button
                        defaultStyle="#3A10E5"
                        hoverStyle="#4E28E8"
                        onClick={handleButtonClick}
                     >
                        {isRecording ? <StopRecordingAudio /> : <PlayAudio />}
                        {isRecording ? 'STOP RECORDED AUDIO' : 'PLAY AUDIO'}
                     </Button>
                     <Text>{correctAnswer}</Text>
                  </ContainerButton>

                  <ContainerCreateAnswerTest>
                     <p className="TextUserAnswer">User’s Answer</p>
                     <div className="FixedDisplay">
                        <span className="TextUserAnswer">
                           Entered Statement:{' '}
                        </span>
                        <Text>{respond}</Text>
                     </div>

                     <p className="TextUserAnswer"> Number of plays: {count}</p>
                  </ContainerCreateAnswerTest>
               </ContainerFlex>
               {error && <p style={{ color: 'red' }}>{error}</p>}
               <ContainerButtons>
                  <Button
                     variant="outlined"
                     hoverStyle="#3A10E5"
                     v
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
const ContainerButton = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '1.7rem',
   marginTop: '2.6rem',
})
const Text = styled('span')({
   color: '#4C4859',
})
const Container = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '4.25rem',
   fontFamily: ' DINNextRoundedLTW04-Medium',
   '.TextUserAnswer': {
      width: '66rem',
      color: '#4C4859',
      fontSize: '1.125rem',
      fontWeight: 500,
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
   marginTop: '6.5rem',
   '.rightAnswer': {
      color: 'green',
      fontWeight: 500,
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
   gap: '0.5rem',
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
      textAlign: 'center',
      gap: '6px',
      marginTop: '0.5rem',
   },
})

const ContainerCreateAnswerTest = styled('div')({
   marginTop: '2.4rem',
   gap: '0.5rem',
   display: 'flex',
   flexDirection: 'column',
})

const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
   marginRight: '3.2rem',
}))
