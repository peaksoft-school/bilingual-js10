import React, { useState } from 'react'
import { styled } from '@mui/material'
import { Background } from '../../layout/Background'
import Header from '../../layout/Header'
import Button from '../UI/Buttons/Button'
import { PlayAudio, StopRecordingAudio } from '../../assets'

export const TypeWhatYouHear = ({ title, duration, questionType }) => {
   const [isRecording, setRecording] = useState(false)
   const handleButtonClick = () => {
      // Toggle
      setRecording(!isRecording)
   }
   return (
      <>
         <Header />
         <Container>
            <Background>
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
                                 Minimum number of words:
                              </span>
                              <p>{}</p>
                           </div>
                        </ContainerTestQuestion>
                     </div>

                     <ContaineScore>
                        <p>Evaluation</p>
                        <div className="ContainerEvaluation">
                           <p className="ColorBlue">Score:(1-10)</p>
                        </div>
                        <InputNumber type="number" min="0" max="10" />
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
                     <span style={{ color: '#4C4859' }}>
                        Correct answer: “Hello, how is it going?”
                     </span>
                  </ContainerButton>

                  <ContainerCreateAnswerTest>
                     <p className="TextUserAnswer">User’s Answer</p>
                     <p className="TextUserAnswer">Entered Statement: {}</p>
                     <p className="TextUserAnswer"> Number of plays: {}</p>
                  </ContainerCreateAnswerTest>
               </ContainerFlex>
               <ContainerButtons>
                  <Button variant="outlined" hoverStyle="#3A10E5">
                     GO BACK
                  </Button>
                  <Button defaultStyle="#2AB930" hoverStyle="#31CF38">
                     Save
                  </Button>
               </ContainerButtons>
            </Background>
         </Container>
      </>
   )
}
const InputNumber = styled('input')({
   marginTop: '6px',
   width: '5.8rem',
   height: '2.8rem',
   borderRadius: '9px',
   border: '2px solid rgba(196, 196, 196, 0.60)',
   outline: 'none',
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
      paddingTop: '0.7rem',
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
   marginRight: '3.2rem',
   '.rightAnswer': {
      color: 'green',
      fontWeight: 500,
      paddingLeft: '10px',
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
   gap: '0.5rem',
   '.FixedDisplay': {
      display: 'flex',
      textAlign: 'center',
   },
})

const ContainerCreateAnswerTest = styled('div')({
   marginTop: '2.4rem',
})

const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   gap: '1rem',
   marginTop: '2rem',
   marginRight: '3.2rem',
}))
