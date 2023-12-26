import React, { useState } from 'react'
import { styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Modal } from '../../UI/UiModal'
import { InputRadio } from '../../UI/InputRadio'
import Button from '../../UI/Buttons/Button'
import { CancelModal } from '../../../assets'
import { postOption } from '../../../store/questions/questionsThunk'

const OptionModal = ({
   open,
   handleCloseModal,
   handleSaveOption,
   titleInput,
}) => {
   const [isTrue, setIsTrueOption] = useState(false)
   const [title, setTitle] = useState('')
   const dispatch = useDispatch()
   const { pathname } = useLocation()

   const updateUrl =
      pathname === '/admin/tests/update-question/select-real-english-words'

   const handleSave = () => {
      if (updateUrl) {
         const option = {
            title,
            isTrue,
         }
         dispatch(postOption(option))
      } else if (title) {
         handleSaveOption(title, isTrue)
         setTitle('')
         setIsTrueOption(false)
         handleCloseModal()
      }
   }

   return (
      <Modal
         open={open}
         onClose={handleCloseModal}
         width="40rem"
         height="25rem"
         backgroundColor="#FFF"
         titleInput={titleInput}
      >
         <>
            <CancelIcon onClick={handleCloseModal} />
            <ContainerFirstInput>
               <TextTitle>Title</TextTitle>
               <FirstInput
                  placeholder={titleInput}
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </ContainerFirstInput>
            <Container>
               <TextOption> Is true option?</TextOption>
               <Radio
                  variant="CHECKBOX"
                  checkedSwitch={isTrue}
                  onChange={() => setIsTrueOption(!isTrue)}
               />
            </Container>
            <ContainerForButtons>
               <FAM>
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
                     onClick={handleSave}
                  >
                     Save
                  </Button>
               </FAM>
            </ContainerForButtons>
         </>
      </Modal>
   )
}

export default OptionModal

const FirstInput = styled('input')(() => ({
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
   outline: 'none',
   '&:hover, &:focus': {
      border: '1.53px solid #3A10E5',
   },
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

const ContainerForButtons = styled('div')(() => ({
   marginTop: '5.7rem',
   borderRadius: ' 0px 0px 9px 9px',
   width: '40rem',
   height: '5.875rem',
   backgroundColor: '#F0F1F1',
   display: 'flex',
   alignItems: 'center',
}))

const FAM = styled('div')(() => ({
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

const ContainerFirstInput = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: '20px',
   marginTop: '83px',
   gap: '1rem',
}))
