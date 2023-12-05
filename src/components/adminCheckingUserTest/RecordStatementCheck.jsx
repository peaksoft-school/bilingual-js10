import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Button from '../UI/Buttons/Button'
import Header from '../../layout/Header'
import { Background } from '../../layout/Background'

const RecordStatementCheck = ({
   title,
   duration,
   questionType,
   answer,
   statement,
}) => {
   const [score, setScore] = useState(7)
   const [isPlaying, setIsPlaying] = useState(false)
   // const [audio, setAudio] = useState(null)
   const audioRef = useRef(null)
   // const playAudio = () => {
   //    setIsPlaying((prev) => !prev)
   // }
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
   }, [])
   // const fetchAudio = async () => {
   //    try {
   //       const response = await axios.get('your-audio-api-endpoint')
   //       setAudioUrl(response.data.audioUrl)
   //    } catch (error) {
   //       console.error('Error fetching audio:', error)
   //    }
   // }

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
      </>
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
