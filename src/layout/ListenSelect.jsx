import { styled } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/UI/Input'
import Button from '../components/UI/Buttons/Button'
import { Delete } from '../assets'
import { InputRadio } from '../components/UI/InputRadio'
import { ListenModal } from './ListenModal'

export const ListenSelect = () => {
   const [time, setTime] = useState('15:00')
   const [state, setState] = useState(false)
   const [values, setValues] = useState('')
   const handleClose = () => setState(false)
   const [options, setOptions] = useState([
      {
         text: 'WORD 1',
         checked: false,
      },
   ])

   const handleSave = () => {
      const newOption = {
         text: values,
         checked: true,
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
         // console.log('Selected file:', values.selectedFile)
         handleClose()
      },
   })
   return (
      <Container>
         <div className="ContainBorder">
            <div className="display">
               <div className="Contain">
                  <p>Title</p>
                  <Input
                     className="InputText"
                     type="text"
                     placeholder="Select real English words"
                  />
               </div>
               <div className="Containers">
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
            </div>
            <div className="ContainSelects">
               <p>Type</p>
               <select className="ContainSelect">
                  <option>Listen and select English word</option>
                  <option>Select real English words</option>
                  <option>Select real English words</option>
                  <option>Select real English words</option>
                  <option>Select real English words</option>
               </select>
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
               {options.map((el) => (
                  <div key={el.id}>
                     <h1>{el.text}</h1>
                     <InputRadio value={values} variant="CHECKBOX" />
                     <Delete />
                  </div>
               ))}
            </div>
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
         />
      </Container>
   )
}

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   paddingTop: '3.25rem',
   background: '#D7E1F8',
   width: '100%',
   height: '100vh',
   border: 'none',
   '.ContainBorder': {
      paddingTop: '3.1rem',
      width: '62rem',
      height: ' 22.8rem',
      background: '#FFF',
      BoxShadow: '(0px 4px 39px rgba(196, 196, 196, 0.60))',
      borderRadius: '1rem',
   },
   '.display': {
      display: 'flex',
      gap: '1.5rem',
      lineHeight: '1.4rem',
      justifyContent: 'center',
      alignItems: 'center',
   },
   ' p': {
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      color: ' #4B4759',
   },
   ' .InputText': {
      width: '43.5rem',
      height: '2.8rem',
      backgrount: '#fff',
   },
   ' .InputTime:hover': {
      border: ' 1.53px solid blue',
   },

   ' .InputTime': {
      width: '6.1rem',
      height: '3.4rem',
      borderRadius: '0.2rem',
      border: ' 1.53px solid #D4D0D0',
      backgrount: '#fff',
      paddingLeft: '2rem',
      fontWeight: '500',
      outline: 'none',
   },
   '.Contain': {
      marginTop: '0.8rem',
   },
   '.ContainButton': {
      display: 'flex',
      justifyContent: 'end',
      marginRight: '0.8rem',
      marginTop: '2rem',
      fontFamly: 'Poppins',
      fontWeight: '800',
   },
   '.ContainSelect': {
      display: 'flex',
      justifyContent: 'center',
      width: '51.2rem',
      height: '2.8rem',
      borderRadius: '0.5rem',
      border: '1.53px solid #D4D0D0',
      background: ' #FFF',
      textAlign: 'center',
   },
   '  .ContainSelects': {
      margin: '3.2rem 5rem',
   },
}))
