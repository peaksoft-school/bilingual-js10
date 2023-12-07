import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Button from '../UI/Buttons/Button'
import { Background } from '../../layout/Background'
import { axiosInstance } from '../../config/axiosInstance'

const RecordStatementCheck = () => {
   const [isPlaying, setIsPlaying] = useState(false)
   const [score, setScore] = useState()
   const [state, setState] = useState({ response: null })
   const [error, setError] = useState(null)
   const audioRef = React.createRef()
   const getQuestionResult = async () => {
      try {
         const response = await axiosInstance.get(
            '/result/getQuestionsResults?userId=1&questionId=5'
         )
         const allresult = response.data
         setState({ response: allresult })
         console.log(response.data.audioFile)
      } catch (error) {
         setError(error)
      }
   }
   const playAudio = () => {
      if (audioRef.current) {
         if (isPlaying) {
            audioRef.current.pause()
         } else {
            audioRef.current.play()
         }
      }
      setIsPlaying((prev) => !prev)
   }
   const postScore = async () => {
      try {
         await axiosInstance.post('/result/', {
            userId: 1,
            questionId: 5,
            score,
         })
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
                        {state.response && (
                           <div className="FixedDisplay">
                              <span className="ColorBlue">Statement:</span>
                              <p className="ColorParagraf">
                                 {state.response.statement}
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
                  <BoxPlay>
                     <Button
                        variant="contained"
                        className="playButton"
                        hoverStyle="#4E28E8"
                        onClick={playAudio}
                     >
                        {state.response && (
                           <div>
                              {isPlaying && state.response.audioFile ? (
                                 <AudioBoxPlay>
                                    <PauseCircleOutlineIcon />
                                    <span>STOP RECORDED AUDIO</span>
                                 </AudioBoxPlay>
                              ) : (
                                 <AudioBoxPlay>
                                    <PlayCircleOutlineIcon />
                                    <span>PLAY AUDIO</span>
                                 </AudioBoxPlay>
                              )}
                           </div>
                        )}
                        {isPlaying && state.response && (
                           <audio className="audio" ref={audioRef} controls>
                              <source
                                 src={state.response.audioFile}
                                 type="audio/mpeg"
                              />
                              <track
                                 kind="captions"
                                 src="captions.vtt"
                                 label="English"
                                 default
                              />
                           </audio>
                        )}
                     </Button>
                  </BoxPlay>
                  {state.response && (
                     <BoxCorrectAnswer>
                        <span className="statement">Correct Answer:</span>
                        <p className="ColorParagraf">
                           {state.response.correctAnswer}
                        </p>
                     </BoxCorrectAnswer>
                  )}
               </ContainerQuestion>
               {error && (
                  <ErrorBox>
                     An error occurred:
                     {error.message || 'Unknown error'}
                  </ErrorBox>
               )}
            </ContainerFlex>
            <ContainerButtons>
               <Button variant="outlined" hoverStyle="#3A10E5">
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
export default RecordStatementCheck

const ErrorBox = styled('div')({
   color: 'red',
   marginTop: '7px',
})
const Container = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '55rem',
   height: '29rem',
   marginTop: '1.25rem',
   fontFamily: 'Poppins',
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
   '.statement': {
      fontFamily: 'Poppins',
      color: '#4C4859',
      fontSize: '1.14rem',
      lineHeight: '1.28rem',
      paddingTop: '1px',
      fontWeight: 500,
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
   gap: '3rem',
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
const ContainerQuestion = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   gap: '2rem',
   width: '38rem',
   height: '2rem',
   alignItems: 'center',
})
const BoxPlay = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   gap: '0.5rem',
})
const AudioBoxPlay = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   gap: '0.7rem',
})

const BoxCorrectAnswer = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'start',
   alignItems: 'center',
   gap: '1rem',
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
