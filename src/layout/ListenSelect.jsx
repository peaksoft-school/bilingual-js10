import { styled } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TimeField } from '@mui/x-date-pickers'
import Button from '../components/UI/Buttons/Button'
import { Delete, VolumeForEnglishWord } from '../assets'
import { InputRadio } from '../components/UI/InputRadio'
import { ListenModal } from './ListenModal'
import Select from '../components/UI/select/Select'
import { Background } from './Background'

const audioContainer = {
   display: 'flex',
   alignItems: 'center',
   gap: '15px',
}
const ContainDeleteChek = {
   display: 'flex',
   alignItems: 'center',
   gap: '4px',
}
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
      setValues('')
      if (audioFile.length === 0) {
         console.log('error')
      } else {
         setOptions([...options, newOption])
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
         <Background>
            <div className="ContainerCreateTest">
               <div className="Contain">
                  <div className="InputTitle">
                     <p>Title</p>
                     <InputTitle
                        className="InputTitles"
                        type="text"
                        placeholder="Listen and select English word"
                     />
                  </div>
                  <div>
                     <p className="InputText">
                        Duration <br /> (in minutes)
                     </p>
                     <ContainTimeField format="mm:ss" />
                  </div>
               </div>

               <div className="ContainSelects">
                  <p className="TextType">Type</p>
                  <Select />
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
               </div>
               <div className="CreatTeasts">
                  {options?.map((el, index) => (
                     <div key={el.id} className="CreatTest">
                        <div style={audioContainer}>
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
                        </div>
                        <div style={ContainDeleteChek}>
                           <InputRadio variant="CHECKBOX" />
                           <Delete
                              onClick={() => removeElement(el.id)}
                              className="DeleteIcon"
                           />
                        </div>
                     </div>
                  ))}
               </div>
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
         </Background>
      </Container>
   )
}
const ContainTimeField = styled(TimeField)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignContent: 'center',
   width: '6rem',
   height: '3.2rem',
   borderRadius: '0.5rem',
   '& .css-1fpet8r-MuiInputBase-root-MuiOutlinedInput-root ': {
      borderRadius: '0.5rem',
      width: '6rem',
      height: '3.2rem',
      marginBottom: '0.5rem',
      paddingLeft: '12px',
      border: '2px solid #D4D0D0',
      color: '#4C4859',
      ':hover': {
         border: '2px solid blue',
      },
   },
   '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': { border: 'none' },
}))
const InputTitle = styled('input')(() => ({
   width: '43rem',
   height: '3.2rem',
   borderRadius: '8px',
   border: '2px solid #D4D0D0',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#D4D0D0',
   paddingLeft: '16px',
   marginTop: '1rem',
   outline: 'none',
   ':hover': {
      border: '2px solid blue',
   },
   ':focus': {
      border: '2px solid blue',
   },
}))
const Container = styled('div')(() => ({
   width: '100vw',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
   background: '#D7E1F8',
   '.ContainerCreateTest': {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '800px',
   },
   '.Contain': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      gap: '1rem',
   },
   p: {
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      color: ' #4B4759',
      fontFamly: 'Poppins',
   },
   '.InputText': { paddingBottom: '0.75rem', width: '110px' },
   '.InputTitle': { paddingTop: '0.75rem' },
   '.InputTitles': { color: '#4C4859' },
   '.ContainSelects': {
      width: '51rem',
      height: '2.8rem',
      '.TextType': { paddingBottom: '0.75rem' },
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
   },
   '.CreatTeasts': {
      display: 'flex',
      justifyContent: 'center',
      rowGap: '1rem',
      columnGap: '2rem',
      flexWrap: 'wrap',
      marginTop: '7rem',
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
      borderRadius: '8px',
      padding: '0.80rem 0.85rem 0.80rem 0.85rem',
      fontFamly: 'Poppins',
   },
   '.ControlButton': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '5rem',
      fontFamly: 'Poppins',
   },
}))
