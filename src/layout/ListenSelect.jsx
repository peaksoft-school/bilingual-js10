import { styled } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { VolumeUp } from '@mui/icons-material'
import Button from '../components/UI/Buttons/Button'
import { Delete } from '../assets'
import { InputRadio } from '../components/UI/InputRadio'
import { ListenModal } from './ListenModal'
import Select from '../components/UI/select/Select'
import { Background } from './Background'

export const ListenSelect = () => {
   const [time, setTime] = useState('15:00')
   const [state, setState] = useState(false)
   const [values, setValues] = useState('')
   const handleClose = () => setState(false)
   const [options, setOptions] = useState([{ text: 'Word 1' }])
   const removeElement = (id) => {
      const newOption = options.filter((option) => option.id !== id)
      setOptions(newOption)
   }
   const handleSave = () => {
      const newOption = {
         id: Math.floor(Math.random() * 100),
         text: values,
         checked: false,
      }
      setValues('')
      setOptions([...options, newOption])
      handleClose()
   }
   const fileInputRef = useRef(null)
   const handleClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click()
      }
   }
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

   const [audioFile, setAudioFile] = useState(null)

   const handleFile = (event) => {
      const file = event.target.files[0]
      setAudioFile(file)
   }
   const handlePlayAudio = () => {
      if (audioFile) {
         const audio = new Audio(URL.createObjectURL(audioFile))
         audio.play()
      }
   }

   return (
      <Container>
         <Background>
            <div className="display">
               <div className="Contain">
                  <div className="InputTitle">
                     <p>Title</p>
                     <InputTitle
                        className="InputTitles"
                        type="text"
                        placeholder="Select real English words"
                     />
                  </div>
                  <label>
                     <p className="InputText">
                        Duration <br /> (in minutes)
                     </p>
                     <input
                        type="time"
                        className="InputTime"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                     />
                  </label>
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
                  {options.map((el, index) => (
                     <div key={el.id} className="CreatTest">
                        <p>{index + 1}</p>
                        <VolumeUp
                           onClick={handlePlayAudio}
                           className="VolumUp"
                        />
                        <p>{el.text}</p>
                        <InputRadio variant="CHECKBOX" />
                        <Delete
                           onClick={() => removeElement(el.id)}
                           className="DeleteIcon"
                        />
                     </div>
                  ))}
               </div>
            </div>
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

const InputTitle = styled('input')(() => ({
   width: '43.5rem',
   height: '3rem',
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
   '& .InputTitles:hover': {
      border: '2px solid blue',
   },
}))
const Container = styled('div')(() => ({
   width: '100vw',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
   background: '#D7E1F8',
   '.display': {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
   },
   '.Contain': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
   },
   p: {
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      color: ' #4B4759',
      fontFamly: 'Poppins',
   },
   '.InputText': { paddingBottom: '0.75rem' },
   '.InputTitle': { paddingTop: '0.75rem' },
   ' .InputTime:hover': {
      border: ' 2px solid blue',
   },
   ' .InputTime': {
      width: '6.2rem',
      height: '3rem',
      borderRadius: '0.5rem',
      border: ' 2px solid #D4D0D0',
      marginBottom: '0.6rem',
      backgrount: '#fff',
      paddingLeft: '2rem',
      fontWeight: '500',
      outline: 'none',
      fontFamly: 'Poppins',
   },
   '.ContainSelects': {
      width: '51.1rem',
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
      columnGap: '1rem',
      flexWrap: 'wrap',
      marginTop: '2rem',
      marginLeft: '1rem',
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
      border: '1px solid grey',
      width: '15rem',
      height: '3rem',
      borderRadius: '8px',
      padding: '0.80rem 0.85rem 0.80rem 0.85rem',
      fontFamly: 'Poppins',
   },
   '.VolumUp': {
      color: 'grey',
   },
   '.ControlButton': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      marginRight: '2.7rem',
      marginTop: '4rem',
      fontFamly: 'Poppins',
   },
}))
