import React, { useState } from 'react'
import { ReactMic } from 'react-mic'
import { styled } from '@mui/material'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'
import { CircleIcon, SpeakIcon, WaveIcon } from '../../assets'
import { useProgressBar } from '../UI/progressBar/useProgressBar'
import ProgressBar from '../UI/progressBar/ProgressBar'

function Recording() {
   const [file, setFile] = useState(null)
   const [record, setRecord] = useState(false)
   const [disabled, setDisabled] = useState(false)
   const [isButtonStop, setIsButtonStop] = useState(false)

   const onStop = (blob) => {
      const audioFile = new File([blob], 'recording.webm', {
         type: 'audio/webm',
      })
      setFile(audioFile)
   }

   const PlayHandler = () => {
      setIsButtonStop((prev) => !prev)
      if (isButtonStop) {
         setRecord(false)
         setDisabled(true)
      } else {
         setRecord(true)
      }
   }

   const nextButtonHandler = () => {
      const res = {
         file,
      }
      console.log(res)
   }

   const duration = 20
   function handleTimeUp() {
      // setTimeout(() => {
      //    console.log('nextPage')
      // }, 10000)
   }
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   return (
      <div>
         <BackgroundStyle marginTop="100px">
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
            <MainRecordingContainer>
               <div>
                  <div>
                     <Title>Record yorself saying the statement below:</Title>
                  </div>
                  <SpeakContainer>
                     <div>
                        <SpeakIcon />
                     </div>
                     <div>&quot;My uncle is at work&quot;.</div>
                  </SpeakContainer>
               </div>
               <hr />
               <ActiveContainer>
                  {isButtonStop ? (
                     <>
                        <RecordingContainer>
                           <CircleIcon />
                           <div>RECORDING...</div>
                        </RecordingContainer>
                        <WaveIcon className="wave" />
                     </>
                  ) : null}
                  <ButtonContainer>
                     <Button
                        onClick={PlayHandler}
                        defaultStyle="#3A10E5"
                        hoverStyle="#4E28E8"
                        padding={isButtonStop ? '13px 54px' : '13px 24px'}
                     >
                        {isButtonStop ? 'stop' : 'record now'}
                     </Button>
                     <Button
                        disabled={!disabled}
                        className="nextButton"
                        variant="contained"
                        defaultStyle="#3A10E5"
                        hoverStyle="#4E28E8"
                        padding="13px 50px"
                        onClick={nextButtonHandler}
                     >
                        next
                     </Button>
                  </ButtonContainer>
               </ActiveContainer>
            </MainRecordingContainer>
         </BackgroundStyle>

         <ReactMik
            record={record}
            className="sound-wave"
            onStop={onStop}
            strokeColor="#d340f0"
            backgroundColor="#ffffff"
         />
      </div>
   )
}

export default Recording

const Title = styled('div')({
   color: ' #4C4859',
   fontSize: '24px',
   fontWeight: '400',
   textAlign: 'center',
})

const SpeakContainer = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   columnGap: '17px',
   marginTop: '50px',
   marginBottom: '120px',
   '& :nth-child(2)': {
      marginTop: '28px',
      color: '#4C4859',
      fontSize: '20px',
      fontWeight: '500',
   },
})

const RecordingContainer = styled('div')({
   display: 'flex',
   columnGap: '11px',
   '& :nth-child(2)': {
      color: '#3A10E5',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '124%',
   },
})

const ActiveContainer = styled('div')({
   display: 'flex',
   height: '47px',
   alignItems: 'center',
   justifyContent: 'end',
   marginTop: '30px',
   '.wave': {
      marginLeft: '15.3vw',
      marginRight: '7vw',
   },
})

const ReactMik = styled(ReactMic)({
   display: 'none',
})
const ButtonContainer = styled('div')({
   '& :nth-child(2)': {
      marginLeft: '11px',
   },
})

const MainRecordingContainer = styled('div')({
   width: '56rem',
   marginTop: '3rem',
})

const BackgroundStyle = styled(Background)({
   padding: '40px 45px',
   borderRadius: '10px',
})
