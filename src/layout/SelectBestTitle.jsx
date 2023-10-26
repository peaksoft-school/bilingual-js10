import React, { useState } from 'react'
import { styled } from '@mui/material'
import { TimeField } from '@mui/x-date-pickers'
import Button from '../components/UI/Buttons/Button'
import Select from '../components/UI/select/Select'
import { InputRadio } from '../components/UI/InputRadio'
import { Delete } from '../assets'
import { Background } from './Background'
import { SelectBestModal } from './SelectBestModal'

export const SelectBestTitle = () => {
   const [state, setState] = useState(false)
   const [values, setValues] = useState('')
   const [options, setOptions] = useState([])
   const handleClose = () => setState(false)

   const removeElement = (id) => {
      const newOption = options.filter((option) => option.id !== id)
      setOptions(newOption)
   }

   const handleSave = () => {
      const newOption = {
         id: Math.random(),
         text: values,
         checked: false,
      }
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
                        <p>{index + 1}</p>
                        <p>{el.text}</p>
                        <div style={ContainDeleteChek}>
                           <InputRadio variant="RADIO" />
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
            <SelectBestModal
               open={state}
               handleClose={handleClose}
               state={state}
               values={values}
               setValues={setValues}
               handleSave={handleSave}
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
   '.DeleteIcon': {
      width: '1.25rem',
      height: '1.25rem',
   },
   '.ContainButton': {
      display: 'flex',
      justifyContent: 'end',
      marginTop: '2rem',
      marginRight: '0.9rem',
      fontFamly: 'Poppins',
      fontWeight: '800',
   },
   '.ControlButton': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '5rem',
      fontFamly: 'Poppins',
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
}))
