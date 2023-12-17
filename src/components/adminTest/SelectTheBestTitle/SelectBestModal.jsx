import { styled } from '@mui/material'
import React from 'react'
import { Modal } from '../../UI/UiModal'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import { CloseIcon } from '../../../assets'
import Input from '../../UI/Input'

export const SelectBestModal = ({
   openModal,
   handleSave,
   handleClose,
   titleValues,
   setTitleValues,
   setCheckboxValue,
   checkboxValue,
   options,
   titlePlaceholder = 'Select Best title',
}) => {
   const trueOption = options.find((el) => el.isTrue === true)

   return (
      <Modal open={openModal} handleClose={handleClose} width="40rem">
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
                        placeholder={titlePlaceholder}
                        value={titleValues}
                        onChange={(e) => setTitleValues(e.target.value)}
                     />
                  </div>
                  <div
                     style={
                        trueOption ? { display: 'none' } : { display: 'block' }
                     }
                     className="ParagraphCheck"
                  >
                     <span>Is true option?</span>
                     <InputRadio
                        variant="CHECKBOX"
                        checked={checkboxValue}
                        onChange={(e) => setCheckboxValue(e.target.checked)}
                     />
                  </div>
               </div>
               <ContainButtons>
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
               </ContainButtons>
            </div>
         </ModalList>
      </Modal>
   )
}
const ContainButtons = styled('div')({
   display: 'flex',
   alignItems: 'end',
})
const InputTitle = styled(Input)(() => ({
   width: '33.3rem',
   height: '2.5rem',
   lineHeight: '18px',
   color: '#4C4859',
   marginTop: '1rem',
   outline: 'none',
   display: 'flex',
}))
const ModalList = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '1.25rem 3.75rem 0rem 3.75rem',
   '& .MuiInputBase-root': {
      borderRadius: '0.5rem',
   },
   ' .ContainModal': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5rem',
      flexDirection: 'column',
      fontFamly: 'Poppins',
   },
   '.ContainButton': {
      background: '#F0F1F1',
      width: '40rem',
      height: '6.5rem',
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
      gap: '2.1rem',
   },
}))
const ContainClose = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'end',
   cursor: 'pointer',
   padding: '1.25rem 1.25rem 0px 0px',
}))
