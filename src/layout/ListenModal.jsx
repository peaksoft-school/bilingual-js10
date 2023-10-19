import { styled } from '@mui/material'
import React from 'react'
import { CloseIcon } from '../assets'
import Input from '../components/UI/Input'
import { Modal } from '../components/UI/UiModal'
import Button from '../components/UI/Buttons/Button'

export const ListenModal = ({
   state,
   handleClick,
   formik,
   handleSave,
   handleClose,
   fileInputRef,
   values,
   setValues,
}) => {
   return (
      <ModalList open={state} handleClose={handleClose}>
         <div className="ContainModal">
            <div className="Close">
               <CloseIcon onClick={handleClose} />
            </div>
            <div>
               <p>Title</p>
               <Input
                  type="text"
                  value={values}
                  onChange={(e) => setValues(e.target.value)}
                  placeholder="Listen and select English word "
                  className="InputTitle"
               />
            </div>
            <div className="container">
               <input
                  ref={fileInputRef}
                  type="file"
                  id="myFileInput"
                  onChange={(e) => {
                     formik.setFieldValue(
                        'selectedFile',
                        e.currentTarget.files[0]
                     )
                  }}
               />
               <input
                  type="button"
                  onClick={handleClick}
                  value="Uppload audio file"
                  className="InputFile"
               />
               <label htmlFor="myFileInput" className="label">
                  {formik.values.selectedFile
                     ? formik.values.selectedFile.name
                     : 'No File Chosen'}
               </label>
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
      </ModalList>
   )
}
const ModalList = styled(Modal)(() => ({
   '.Close': { display: 'flex', justifyContent: 'end', marginLeft: '5rem' },
   '.InputTitle': {
      width: '32.3rem',
      height: '2.8rem',
   },
   ' .ContainModal': {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: '4rem',
      padding: '1.25rem 3.25rem 1.65rem 3.75rem',
   },
   '& .InputFile:hover': {
      width: '10.4rem',
      height: '2.7rem',
      marginTop: '1.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      border: '2px solid blue',
      color: '#fff',
      borderRadius: '0.5rem',
      padding: '0.5rem',
      background: '#3A10E5',
   },
   '& .InputFile': {
      width: '10.4rem',
      height: '2.7rem',
      marginTop: '1.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      border: '2px solid blue',
      color: 'blue',
      borderRadius: '0.5rem',
      padding: '0.5rem',
      background: '#fff',
   },
   '.label': {
      fontFamly: 'Poppins',
      fontWeight: '400',
      fontSize: '1rem',
      width: '14rem',
      height: '1rem',
      color: '#4C4859',
      marginLeft: '2rem',
   },
   '.ContainButton': {
      background: '#F0F1F1',
      width: '100%',
      height: '5.5rem',
      borderRadius: '0px 1rem',
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      paddingRight: '3.3rem',
      marginTop: '4.5rem',
   },
   '#myFileInput': {
      display: 'none',
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
