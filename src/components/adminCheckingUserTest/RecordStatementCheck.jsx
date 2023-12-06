import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Button from '../UI/Buttons/Button'
import Header from '../../layout/Header'
import { Background } from '../../layout/Background'

const RecordStatementCheck = () => {
   const [score, setScore] = useState(7)
   const [isPlaying, setIsPlaying] = useState(false)
   const [score, setScore] = useState()
   const [state, setState] = useState({ response: null })
   const [error, setError] = useState(null)
   const getQuestionResult = async () => {
      try {
         const response = await axiosInstance.get(
            '/result/getQuestionsResults?userId=1&questionId=7'
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
            userId: 1,
            questionId: 7,
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
   const playAudio = () => {
      if (audioRef.current) {
         if (isPlaying) {
            audioRef.current.pause()
         } else {
            audioRef.current.play()
         }
         setIsPlaying(!isPlaying)
      }
   }

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
                           <span className="ColorBlue">Statement:</span>
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
               <ContainerQuestion>
                  <BoxPlay>
                     {/* <audio ref={audioRef} src={audioUrl} /> */}
                     <Button
                        variant="contained"
                        className="playButton"
                        hoverStyle="#4E28E8"
                        onClick={playAudio}
                     >
                        {isPlaying && audioFile ? (
                           <div>
                              <PauseCircleOutlineIcon />
                              <span> STOP RECORDED AUDIO</span>
                           </div>
                        ) : (
                           <BoxPlay>
                              <PlayCircleOutlineIcon />
                              <span>PLAY AUDIO</span>
                           </BoxPlay>
                        )}
                     </Button>
                  </BoxPlay>
                  <BoxCorrectAnswer>
                     <p className="p">Correct Answer:</p>
                     <span>{answer}</span>
                  </BoxCorrectAnswer>
               </ContainerQuestion>
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
   )
}
export default RecordStatementCheck

const Container = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '2rem',
   width: '58rem',
   height: '19rem',
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
