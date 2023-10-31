import { styled } from '@mui/material'
import React from 'react'
import { Modal } from '../../UI/UiModal'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import { CloseIcon } from '../../../assets'

export const SelectBestModal = ({
   openModal,
   handleSave,
   handleClose,
   titleValues,
   setTitleValues,
}) => {
   return (
      <Modal
         open={openModal}
         handleClose={handleClose}
         width="40rem"
         height="24rem"
      >
         <ContainClose>
            <CloseIcon onClick={handleClose} />
         </ContainClose>
         <ModalList>
            <div className="ContainModal">
               <div className="ControlTitleInput">
                  <div className="InputTitle">
                     <span>Title</span>
                     <InputTitle
                        type="text"
                        placeholder="Select Best title"
                        value={titleValues}
                        onChange={(e) => setTitleValues(e.target.value)}
                     />
                  </div>
                  <div className="ParagraphCheck">
                     <span>Is true option?</span>
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
                     disabled={!titleValues}
                  >
                     SAVE
                  </Button>
               </div>
            </div>
         </ModalList>
      </Modal>
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
   display: 'flex',
   ':hover': {
      border: '2px solid blue',
   },
   ':focus': {
      border: '2px solid blue',
   },
}))
const ModalList = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '1.25rem 3.75rem 5rem 3.75rem',
   '& .MuiInputBase-root': {
      borderRadius: '0.5rem',
   },
   ' .ContainModal': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5.5rem',
      flexDirection: 'column',
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
      paddingRight: '3.9rem',
   },
   '.ParagraphCheck': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      gap: '0.88rem',
   },
   '.ControlTitleInput': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.13rem',
   },
}))
const ContainClose = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'end',
   cursor: 'pointer',
   padding: '1.25rem 1.25rem 0px 0px',
}))
