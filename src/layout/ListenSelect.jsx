import { styled } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { VolumeUp } from '@mui/icons-material'
import Input from '../components/UI/Input'
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
   const [options, setOptions] = useState([])
   const removeElement = (id) => {
      const newOption = options.filter((option) => option.id !== id)
      setOptions(newOption)
   }
   const handleSave = () => {
      const newOption = {
         id: Math.floor(Math.random() * 10000),
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
         <div className="Contains">
            <Background>
               <div className="display">
                  <div className="Contain">
                     <div>
                        <p>Title</p>
                        <Input
                           className="InputText"
                           type="text"
                           placeholder="Select real English words"
                        />
                     </div>
                     <label>
                        <p>
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
                     <p>Type</p>
                     <Select className="SelectStyle" />
                     <div className="ContainButton">
                        <Button
                           hoverStyle="rgba(58, 16, 229, 0.90)"
                           defaultStyle="#3A10E5"
                           className="addNewTestButton"
                           onClick={() => setState(true)}
                        >
                           ADD OPTIONS
                        </Button>
                     </div>
                  </div>
                  <div className="CreatTeasts">
                     {options.map((el, index) => (
                        <div key={el.id} className="CreatTest">
                           <ul>{index + 1}</ul>
                           <VolumeUp onClick={handlePlayAudio} />
                           <p>{el.text}</p>
                           <InputRadio value={values} variant="CHECKBOX" />
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
                  <Button defaultStyle="#2AB930" hoverStyle="#31CF38">
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
         </div>
      </Container>
   )
}
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
      lineHeight: '1.2rem',
      justifyContent: 'center',
      alignItems: 'center',
   },
   '.Contains': {
      lineHeight: '3rem',
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
   ' .InputText': {
      width: '43.5rem',
      height: '2.8rem',
      backgrount: '#fff',
      fontFamly: 'Poppins',
   },
   ' .InputTime:hover': {
      border: ' 1.53px solid blue',
   },
   ' .InputTime': {
      width: '6.1rem',
      height: '3.4rem',
      borderRadius: '0.2rem',
      border: ' 1.53px solid #D4D0D0',
      marginBottom: '0.6rem',
      backgrount: '#fff',
      paddingLeft: '2rem',
      fontWeight: '500',
      outline: 'none',
      fontFamly: 'Poppins',
   },
   '.ContainSelects': {
      width: '51.1rem',
      lineHeight: '2rem',
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
      width: '51.1rem',
   },
   '.CreatTeasts': {
      display: 'flex',
      justifyContent: 'center',
      rowGap: '1rem',
      columnGap: '1rem',
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
      border: '1px solid grey',
      width: '15rem',
      height: '3rem',
      borderRadius: '8px',
      padding: '0.81rem 1rem 0.81rem 1rem',
      fontFamly: 'Poppins',
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
