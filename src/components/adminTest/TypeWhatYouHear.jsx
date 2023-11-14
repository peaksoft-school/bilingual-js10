import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import PauseIcon from '@mui/icons-material/Pause'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'
import { ReactComponent as PlayAudioIcon } from '../../assets/icons/playAudioIcon.svg'
import { postFileThunk } from '../../store/questions/questionsThunk'

export const TypeWhatYouHear = ({ onGoBack }) => {
   const [audioFile, setAudioFile] = useState(null)
   const [isAudioTrue, setIsAudioTrue] = useState(false)
   const [audio, setAudio] = useState(null)
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         quantityInputValue: 0,
         correctAnswer: '',
      },
   })

   const saveHandler = (e) => {
      e.preventDefault()
      dispatch(postFileThunk({ file: audioFile }))
   }

   const playAudio = () => {
      setIsAudioTrue((prev) => !prev)
   }

   useEffect(() => {
      if (audioFile) {
         if (isAudioTrue) {
            const audio = new Audio(URL.createObjectURL(audioFile))
            audio.play()
            setAudio(audio)
         } else if (audio) {
            audio.pause()
            setAudio(null)
         }
      }
   }, [isAudioTrue, audioFile])

   return (
      <MainContainer>
         <form onSubmit={formik.handleSubmit}>
            <div className="widthContainer">
               <div className="audioContainer">
                  <div>
                     <label htmlFor="quantity">
                        <p>Number off</p>
                        <p>Replays</p>
                     </label>
                     <input
                        id="quantity"
                        className="Input replaceInput"
                        min="0"
                        type="number"
                        name="quantityInputValue"
                        value={formik.values.quantityInputValue}
                        onChange={formik.handleChange}
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
                        onChange={(e) => setAudioFile(e.target.files[0])}
                     />
                     <Button
                        variant="contained"
                        className="playButton"
                        hoverStyle="#4E28E8"
                        onClick={playAudio}
                     >
                        {isAudioTrue && audioFile ? (
                           <PauseIcon />
                        ) : (
                           <PlayAudioIcon />
                        )}
                     </Button>
                     <label htmlFor="fileInput">
                        {audioFile ? audioFile.name : 'Выберите аудиофайл'}
                     </label>
                  </div>
               </div>
               <div>
                  <p>Correct Answer</p>
                  <Input
                     border="2.2px solid #D4D0D0"
                     fullWidth
                     name="correctAnswer"
                     className="Input"
                     padding="0.710rem 1.4rem"
                     onChange={formik.handleChange}
                     value={formik.values.correctAnswer}
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
                     onClick={(e) => saveHandler(e)}
                  >
                     Save
                  </Button>
               </div>
            </div>
         </form>
      </MainContainer>
   )
}

const MainContainer = styled('div')(() => ({
   '.widthContainer': {
      width: '50rem',
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
