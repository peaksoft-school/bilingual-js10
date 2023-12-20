/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from 'react'
import { ReactMic } from 'react-mic'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import Button from '../../UI/Buttons/Button'
import { CircleIcon, SpeakIcon } from '../../../assets'
import { postFileThunk } from '../../../store/questions/questionsThunk'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

function Recording() {
   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )
   const [file, setFile] = useState(null)
   const [record, setRecord] = useState(false)
   const [disabled, setDisabled] = useState(false)
   const [isButtonStop, setIsButtonStop] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onStop = (blobFile) => {
      setFile(blobFile.blob)
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

   const addLink = (res) => {
      const audioUrl = {
         audioUrl: res.data.link,
         questionId: testComponent.id,
      }
      dispatch(addTest(audioUrl))
   }

   const nextButtonHandler = async () => {
      dispatch(postFileThunk({ file }))
         .unwrap()
         .then((res) => {
            addLink(res)
            if (questions.length === currentComponent + 1) {
               navigate('user/test-list/send-the-results')
            } else {
               dispatch(globalTestSlice.actions.addCurrentComponent(1))
            }
         })
   }

   function handleTimeUp() {}
   const { duration } = testComponent
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   useEffect(() => {
      if (+timeObject.minute === 0) {
         if (+timeObject.seconds === 0) {
            dispatch(globalTestSlice.actions.addCurrentComponent(1))
         }
      }
   }, [+timeObject.seconds])

   return (
      <div>
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
                  <div>{testComponent.statement}</div>
               </SpeakContainer>
            </div>
            <hr style={{ border: '1px #D4D0D0 solid' }} />
            <ActiveContainer>
               {isButtonStop ? (
                  <>
                     <RecordingContainer>
                        <CircleIcon />
                        <div>RECORDING...</div>
                     </RecordingContainer>

                     <Container className="wave">
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                        <span className="stroka"></span>
                     </Container>
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
const Container = styled('div')`
   display: flex;
   align-items: center;
   height: 3.1rem;

   .stroka {
      display: block;
      position: relative;
      background: #3a10e5;
      height: 100%;
      width: 6px;
      border-radius: 3.1rem;
      margin: 0 1px;
      animation: animate 1.3s linear infinite;
   }
   @keyframes animate {
      50% {
         height: 30%;
      }
      100% {
         height: 100%;
      }
   }
   .stroka:nth-child(1) {
      animation-delay: 0s;
   }
   .stroka:nth-child(2) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(3) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(4) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(5) {
      animation-delay: 0.8s;
   }
   .stroka:nth-child(6) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(7) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(8) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(9) {
      animation-delay: 0s;
   }
   .stroka:nth-child(10) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(11) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(12) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(13) {
      animation-delay: 0.8s;
   }
   .stroka:nth-child(14) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(15) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(16) {
      animation-delay: 0.2s;
   }
`

const Title = styled('div')({
   color: ' #4C4859',
   fontSize: '24px',
   fontWeight: '400',
   textAlign: 'center',
})

const SpeakContainer = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   columnGap: '1.1rem',
   marginTop: '3.1rem',
   marginBottom: '7.5rem',
   '& :nth-child(2)': {
      marginTop: '1.75rem',
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
      fontSize: '1rem',
      fontWeight: '500',
   },
})

const ActiveContainer = styled('div')({
   display: 'flex',
   height: '47px',
   alignItems: 'center',
   justifyContent: 'end',
   marginTop: '2rem',
   '.wave': {
      marginLeft: '11.3vw',
      marginRight: '7vw',
   },
})

const ReactMik = styled(ReactMic)({
   display: 'none',
})
const ButtonContainer = styled('div')({
   display: 'flex',
   '& :nth-child(2)': {
      marginLeft: '11px',
   },
})

const MainRecordingContainer = styled('div')({
   width: '56rem',
   marginTop: '3rem',
})
