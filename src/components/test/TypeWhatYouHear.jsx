import React, { useState } from 'react'
import { styled } from '@mui/material'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'
import { ReactComponent as PlayAudioIcon } from '../../assets/icons/playAudioIcon.svg'

export const TypeWhatYouHear = ({ onSave, onGoBack }) => {
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
         <div>
            <div className="widthContainer">
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
                     onClick={onGoBack}
                  >
                     Go back
                  </Button>
                  <Button
                     variant="contained"
                     className="saveButton"
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     onClick={onSave}
                  >
                     Save
                  </Button>
               </div>
            </div>
         </div>
      </MainContainer>
   )
}

const MainContainer = styled('div')(() => ({
   '.widthContainer': {
      width: '53.125rem',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '24px',
      marginTop: '24px',
      '.buttons': {
         display: 'flex',
         justifyContent: 'end',
         gap: '16px',
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
}))
