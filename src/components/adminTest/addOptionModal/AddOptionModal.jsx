import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import { styled } from '@mui/material'
import { Modal } from '../../UI/UiModal'
import { InputRadio } from '../../UI/InputRadio'
import Button from '../../UI/Buttons/Button'
import { CancelModal } from '../../../assets'

const OptionModal = ({
   open,
   handleCloseModal,
   onSaveOption,
   // onDeleteOption,
}) => {
   const [isTrueOption, setIsTrueOption] = useState(false)
   const [title, setTitle] = useState('')
   // const [isChecked, setIsChecked] = useState(isTrueOption)

   const handleSaveOption = () => {
      if (title) {
         onSaveOption(title, isTrueOption)
         setTitle('')
         setIsTrueOption(false)
         handleCloseModal()
      }
   }

   return (
      <Modal
         open={open}
         onClose={handleCloseModal}
         onSaveOption={handleSaveOption}
         // onDeleteOption={handleDeleteOption}
         width="40rem"
         height="25rem"
         backgroundColor="#FFF"
      >
         <>
            <CancelIcon onClick={handleCloseModal} />
            <DivInputOne>
               <TextTitle>Title</TextTitle>
               <InputOne
                  placeholder="Select real English words"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </DivInputOne>
            <Container>
               <TextOption> Is true option?</TextOption>

               <Radio
                  variant="CHECKBOX"
                  checked={isTrueOption}
                  // onChange={(e) => setIsTrueOption(e.target.checked)}
                  onChange={() => setIsTrueOption(!isTrueOption)}
               />
            </Container>
            <FooterContainer>
               <Mini>
                  <Button
                     variant="outlined"
                     hoverStyle="#3A10E5"
                     onClick={handleCloseModal}
                  >
                     GO BACK
                  </Button>
                  <Button
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     onClick={handleSaveOption}
                  >
                     Save
                  </Button>
               </Mini>
            </FooterContainer>
         </>
      </Modal>
   )
}

export default OptionModal

const InputOne = styled('input')(() => ({
   width: ' 32.3125rem ',
   height: ' 2.875rem',
   borderRadius: '8px',
   border: 'solid 1.53px #D4D0D0',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   paddingLeft: '16px',
}))
const TextTitle = styled('h1')(() => ({
   display: 'flex',
   marginRight: '30rem',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4B4759',
}))
const Container = styled('div')(() => ({
   display: 'flex',
   marginLeft: '4rem',
}))
const CancelIcon = styled(CancelModal)(() => ({
   display: 'flex',
   cursor: 'pointer',
   marginLeft: '37rem',
   position: 'absolute',
   marginTop: '1rem',
}))
const FooterContainer = styled('div')(() => ({
   marginTop: '5.7rem',
   borderRadius: ' 0px 0px 9px 9px',
   width: '40rem',
   height: '5.875rem',
   backgroundColor: '#F0F1F1',
   display: 'flex',
   alignItems: 'center',
}))
const Mini = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
   marginLeft: '24rem',
}))
const Radio = styled(InputRadio)(() => ({
   marginTop: '-0.6rem',
}))

const TextOption = styled('h1')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: 'normal',
   color: '#4C4859',
}))
const DivInputOne = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: '20px',
   marginTop: '83px',
   gap: '1rem',
}))
