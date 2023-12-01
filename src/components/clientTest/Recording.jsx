/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react'
import { ReactMic } from 'react-mic'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import Button from '../UI/Buttons/Button'
import { CircleIcon, SpeakIcon } from '../../assets'
import { postFileThunk } from '../../store/questions/questionsThunk'
import { addTest } from '../../store/userTest/global-test-slice'

function Recording() {
   const [file, setFile] = useState(null)
   const [record, setRecord] = useState(false)
   const [disabled, setDisabled] = useState(false)
   const [isButtonStop, setIsButtonStop] = useState(false)
   const dispatch = useDispatch()

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

   const AddLink = (link) => {
      const audioUrl = {
         audioUrl: link.payload.data.link,
      }
      dispatch(addTest(audioUrl))
   }

   const nextButtonHandler = async () => {
      const links = await dispatch(postFileThunk({ file }))
      AddLink(links)
   }

   return (
      <div>
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
      lineHeight: '124%',
   },
})

const ActiveContainer = styled('div')({
   display: 'flex',
   height: '47px',
   alignItems: 'center',
   justifyContent: 'end',
   marginTop: '2rem',
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
