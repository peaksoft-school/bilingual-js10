import { styled } from '@mui/material'
import React from 'react'
// import { CloseIcon } from '../assets'
import { Modal } from '../components/UI/UiModal'
import Button from '../components/UI/Buttons/Button'
import { InputRadio } from '../components/UI/InputRadio'

export const SelectBestModal = ({
   state,
   handleSave,
   handleClose,
   values,
   setValues,
}) => {
   return (
      <ModalList
         open={state}
         handleClose={handleClose}
         width="40rem"
         height="24rem"
      >
         <div className="Close">
            {/* <CloseIcon onClick={handleClose} /> */}
         </div>
         <div className="ContainModal">
            <div>
               <div className="InputTitle">
                  <p>Title</p>
                  <InputTitle
                     className="InputTitles"
                     type="text"
                     placeholder="Select Best title"
                     value={values}
                     onChange={(e) => setValues(e.target.value.slice(0, 8))}
                     maxLength={8}
                  />
               </div>
               <div>
                  <p>Is true option?</p>
                  <InputRadio variant="CHECKBOX" />
               </div>
            </div>
            <div className="ContainButton">
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
                  onClick={handleSave}
                  className="ButtonTwo"
               >
                  SAVE
               </Button>
            </div>
         </div>
      </ModalList>
   )
}
const InputTitle = styled('input')(() => ({
   width: '32.3rem',
   height: '3rem',
   borderRadius: '8px',
   border: '2px solid #D4D0D0',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
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
const ModalList = styled(Modal)(() => ({
   '& .MuiInputBase-root': {
      borderRadius: '0.5rem',
   },
   //  '.Close': {
   //     display: 'flex',
   //     justifyContent: 'end',
   //     cursor: 'pointer',
   //     padding: '1.25rem 1.25rem 0px 0px',
   //  },
   ' .ContainModal': {
      display: 'flex',
      gap: '1rem',
      flexDirection: 'column',
      padding: '1.25rem 3.75rem 5rem 3.75rem',
      fontFamly: 'Poppins',
   },
   '.ContainButton': {
      background: '#F0F1F1',
      width: '40rem',
      height: '5.5rem',
      borderRadius: '0px 0rem 0.5rem 0.5rem',
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'end',
      alignItems: 'center',
      paddingRight: '3.3rem',
      margin: '3.2rem 0px 10rem -3.75rem',
   },
   '.Button': {
      width: '6.9rem',
      height: '2.5rem',
      fontSize: '0.7rem',
      fontWeight: '800',
      fontFamly: 'Poppins',
   },
   '.ButtonTwo': {
      width: '5.1rem',
      height: '2.5rem',
      fontSize: '0.7rem',
      fontWeight: '800',
      fontFamly: 'Poppins',
   },
}))
