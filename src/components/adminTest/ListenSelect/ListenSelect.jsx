import { styled } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../../UI/Buttons/Button'
import { Delete, VolumeForEnglishWord } from '../../../assets'
import { InputRadio } from '../../UI/InputRadio'
import { ListenModal } from './ListenModal'

export const ListenSelect = () => {
   const [state, setState] = useState(false)
   const [values, setValues] = useState('')
   const handleClose = () => setState(false)
   const [options, setOptions] = useState([])
   const [audioFile, setAudioFile] = useState([])
   const [audioPlaying, setAudioPlaying] = useState(false)

   const formik = useFormik({
      initialValues: {
         selectedFile: null,
      },
      validationSchema: Yup.object({
         selectedFile: Yup.mixed().required('Please select a file'),
      }),
      onSubmit: () => {
         handleClose()
      },
   })

   const handleSave = () => {
      const newOption = {
         id: Math.random(),
         text: values,
         checked: false,
         checkedMusic: false,
      }
      if (options.length < 6) {
         setOptions([...options, newOption])
      }
      setValues('')
      if (audioFile.length === 0) {
         console.log('error')
      } else {
         handleClose()
         formik.handleReset()
      }
   }
   const fileInputRef = useRef(null)
   const handleClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click()
      }
   }
   const handleFile = (event) => {
      const file = event.target.files[0]
      setAudioFile((prev) => [...prev, file])
   }
   const handlePlayAudio = (index, id) => {
      if (audioFile) {
         if (audioPlaying || (audioPlaying && audioPlaying.id !== id)) {
            audioPlaying.audio.pause()
            setAudioPlaying(false)
            if (audioPlaying && audioPlaying.id === id) {
               return
            }
         }
         const audio = new Audio(URL.createObjectURL(audioFile[index]))
         audio.play()
         audio.addEventListener('ended', () => {
            setAudioPlaying(false)
         })
         setAudioPlaying({ audio, id })
      }
   }
   console.log(!audioFile)

   const removeElement = (id) => {
      const newOption = options.filter((option) => option.id !== id)
      setOptions(newOption)
   }
   return (
      <Container>
         <div className="ContainButton">
            <Button
               hoverStyle="#3A10E5E5"
               defaultStyle="#3A10E5"
               className="addNewTestButton"
               variant="contained"
               onClick={() => setState(true)}
            >
               ADD OPTIONS
            </Button>
         </div>
         <div className="CreatTests">
            {options?.map((el, index) => (
               <div key={el.id} className="CreatTest">
                  <AudioContainer>
                     <p>{index + 1}</p>
                     <VolumeForEnglishWord
                        onClick={() => handlePlayAudio(index, el.id)}
                        style={{
                           fill:
                              audioPlaying?.id === el.id
                                 ? '#3A10E5 '
                                 : '#655F5F ',
                        }}
                     />
                     <p>{el.text}</p>
                  </AudioContainer>
                  <ContainDeleteChek>
                     <InputRadio variant="CHECKBOX" />
                     <Delete
                        onClick={() => removeElement(el.id)}
                        className="DeleteIcon"
                     />
                  </ContainDeleteChek>
               </div>
            ))}
         </div>
         {options.length > 0 ? (
            <div className="ControlButton">
               <Button
                  variant="outlined"
                  hoverStyle="#3A10E5"
                  onClick={handleClose}
                  className="Button"
               >
                  GO BACK
               </Button>
               <Button
                  defaultStyle="#2AB930"
                  hoverStyle="#31CF38"
                  className="saveButton"
                  variant="contained"
               >
                  SAVE
               </Button>
            </div>
         ) : null}
         <ListenModal
            open={state}
            handleClose={handleClose}
            state={state}
            handleClick={handleClick}
            formik={formik}
            handleSave={handleSave}
            fileInputRef={fileInputRef}
            values={values}
            setValues={setValues}
            handleFile={handleFile}
         />
      </Container>
   )
}
const Container = styled('div')(() => ({
   p: {
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      color: ' #4B4759',
      fontFamly: 'Poppins',
   },
   '.DeleteIcon': {
      width: '1.25rem',
      height: '1.25rem',
   },
   '.ContainButton': {
      display: 'flex',
      justifyContent: 'end',
      marginTop: '2rem',
      fontFamly: 'Poppins',
      fontWeight: '800',
      marginRight: '0.3rem',
   },
   '.CreatTests': {
      display: 'flex',
      justifyContent: 'center',
      rowGap: '1.12rem',
      columnGap: '1.12rem',
      flexWrap: 'wrap',
      marginTop: '2rem',
      fontFamly: 'Poppins',
      ul: {
         fontSize: '16px',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: 'normal',
         color: '#4C4859',
      },
   },
   '.CreatTest': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      border: '1.53px solid #D4D0D0',
      width: '15rem',
      height: '3rem',
      borderRadius: '0.5rem',
      padding: '0.80rem 0.85rem 0.80rem 0.85rem',
      fontFamly: 'Poppins',
   },
   '.ControlButton': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '2.5rem',
      fontFamly: 'Poppins',
      marginRight: '0.3rem',
   },
}))
const ContainDeleteChek = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '4px',
}))
const AudioContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '15px',
}))
