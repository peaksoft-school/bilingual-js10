import React from 'react'
import { styled } from '@mui/material'
import { CancelModal } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import { Modal } from '../../UI/UiModal'

export const ListenModal = ({
   open,
   formik,
   handleClick,
   handleSave,
   handleClose,
   fileInputRef,
   handleFile,
}) => {
   return (
      <ModalList
         open={open}
         handleClose={handleClose}
         width="40rem"
         height="24rem"
      >
         <div className="Close">
            <CancelModal onClick={handleClose} />
         </div>
         <div className="ContainModal">
            <div>
               <div className="InputTitle">
                  <span htmlFor="lastName">Title</span>
                  <InputTitle
                     id="lastName"
                     className="InputTitles"
                     type="text"
                     placeholder="Listen and select English word"
                     name="titleValues"
                     value={formik.values.titleValues}
                     onChange={formik.handleChange}
                     maxLength={8}
                  />
               </div>
            </div>
            <div className="container">
               <input
                  ref={fileInputRef}
                  type="file"
                  id="myFileInput"
                  onChange={(e) => {
                     handleFile(e)
                     formik.setFieldValue('selectedFile', e.target.files[0])
                  }}
                  accept="audio/*"
               />
               <input
                  type="button"
                  onClick={handleClick}
                  value="Upload audio file"
                  className="InputFile"
               />
               <label htmlFor="myFileInput" className="label">
                  {formik.values.selectedFile
                     ? formik.values.selectedFile.name
                     : 'No File Chosen'}
               </label>
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
                  disabled={
                     !formik.values.titleValues || !formik.values.selectedFile
                  }
                  type="submit"
                  defaultStyle="#2AB930"
                  hoverStyle="#31CF38"
                  onClick={() => {
                     handleSave()
                  }}
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
   border: '1.53px solid #D4D0D0',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   paddingLeft: '16px',
   marginTop: '1rem',
   outline: 'none',
   display: 'flex',
   ':hover': {
      border: '1.53px solid blue',
   },
   ':focus': {
      border: '1.53px solid blue',
   },
}))
const ModalList = styled(Modal)(() => ({
   '& .MuiInputBase-root': {
      borderRadius: '0.5rem',
   },
   '.Close': {
      display: 'flex',
      justifyContent: 'end',
      cursor: 'pointer',
      padding: '1.25rem 1.25rem 0px 0px',
   },
   ' .ContainModal': {
      display: 'flex',
      gap: '1rem',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem 3.75rem 0rem 3.75rem',
      fontFamly: 'Poppins',
   },
   '& .InputFile:hover': {
      color: '#fff',
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
      marginRight: '1rem',
      cursor: 'pointer',
   },
   '.label': {
      fontFamly: 'Poppins',
      fontWeight: '400',
      fontSize: '1rem',
      width: '100%',
      height: '2rem',
      color: '#4C4859',
      marginRight: '13.6rem',
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
      paddingRight: '3.9rem',
      marginTop: '2.9rem',
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
