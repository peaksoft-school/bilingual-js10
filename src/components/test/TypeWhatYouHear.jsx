import React, { useState } from 'react'
import { styled } from '@mui/material'
import { TimeField } from '@mui/x-date-pickers'
import { Background } from '../../layout/Background'
import Input from '../UI/Input'
import Select from '../UI/select/Select'
import Button from '../UI/Buttons/Button'
import { ReactComponent as PlayAudioIcon } from '../../assets/icons/playAudioIcon.svg'

export const TypeWhatYouHear = () => {
   const [audioFile, setFile] = useState(null)
   const [quantityInputValue, setQuantityInputValue] = useState(0)
   const [correctAnswer, setCorrectAnswer] = useState('')

   const playAudio = () => {
      if (audioFile) {
         const audio = new Audio(URL.createObjectURL(audioFile))
         audio.play()
      }
   }

   return (
      <MainContainer>
         <Background marginTop="65px">
            <div className="widthContainer">
               <div className="titleAndDurationContainer">
                  <div className="titleAndInputContainer">
                     <p className="labelTitle">Title</p>
                     <Input
                        border="2.2px solid #D4D0D0"
                        fullWidth
                        className="Input"
                        padding="0.710rem 1.4rem"
                     />
                  </div>
                  <div className="durationContainer">
                     <p>Duration</p>
                     <p className="text">(in minutes)</p>
                     <TimeField format="mm:ss" className="tiemField" />
                  </div>
               </div>
               <div>
                  <p className="typeText">Type</p>
                  <Select />
               </div>
               <div className="audioContainer">
                  <div>
                     <p>Number off</p>
                     <p>Replays</p>
                     <input
                        type="number"
                        value={quantityInputValue}
                        border="2.2px solid #D4D0D0"
                        className="Input replaceInput"
                        onChange={(e) => setQuantityInputValue(e.target.value)}
                     />
                  </div>
                  <div className="uploadContainer">
                     <Button
                        variant="contained"
                        className="goBackButton"
                        hoverStyle="#4E28E8"
                     >
                        <label htmlFor="fileInput">uppload</label>
                     </Button>
                     <input
                        id="fileInput"
                        type="file"
                        // value={audioFile}
                        onChange={(e) => setFile(e.target.files[0])}
                     />
                     <Button
                        variant="contained"
                        className="playButton"
                        hoverStyle="#4E28E8"
                        onClick={playAudio}
                     >
                        <PlayAudioIcon />
                     </Button>
                     <p>{audioFile ? audioFile.name : 'Выберите аудиофайл'}</p>
                  </div>
               </div>
               <div>
                  <p>Correct Answer</p>
                  <Input
                     border="2.2px solid #D4D0D0"
                     fullWidth
                     className="Input"
                     padding="0.710rem 1.4rem"
                     onChange={(e) => setCorrectAnswer(e.target.value)}
                     value={correctAnswer}
                  />
               </div>
               <div className="buttons">
                  <Button
                     variant="outlined"
                     className="goBackButton"
                     hoverStyle="#3A10E5"
                  >
                     Go back
                  </Button>
                  <Button
                     variant="contained"
                     className="saveButton"
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                  >
                     Save
                  </Button>
               </div>
            </div>
         </Background>
      </MainContainer>
   )
}

const MainContainer = styled('div')(() => ({
   '.tiemField': {
      width: '100',
   },
   '.widthContainer': {
      width: '850px',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '24px',
      '.buttons': {
         display: 'flex',
         justifyContent: 'end',
         gap: '16px',
      },
      '.typeText': {
         marginBottom: '10px',
      },
      '.audioContainer': {
         display: 'flex',
         alignItems: 'end',
         '.replaceInput': {
            width: '59px',
            marginTop: '10px',
         },
         '.uploadContainer': {
            display: 'flex',
            columnGap: '15px',
            alignItems: 'center',
            input: {
               display: 'none',
            },
         },
         input: {
            height: '42px',
            border: '2.2px solid #D4D0D0',
            borderRadius: '8px',
            outline: 'none',
            width: '100%',
            paddingLeft: '22px',
         },
      },
   },
   '.titleAndDurationContainer': {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: '24px',
      alignItems: 'end',
      '.titleAndInputContainer': {
         width: '100%',
         '.labelTitle': {
            marginBottom: '10px',
         },
      },
      '.durationContainer': {
         width: '115px',
         '.css-1d3z3hw-MuiOutlinedInput-notchedOutline ': {
            border: '2.2px solid #D4D0D0',
            borderRadius: '8px',
            outline: 'none',
            height: '53px',
         },
         input: {
            height: '15px',
         },
         '.text': {
            marginBottom: ' 10px',
         },
      },
   },
}))
