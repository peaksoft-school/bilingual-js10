import { TextField, styled } from '@mui/material'
import React, { useState } from 'react'
import Button from '../../UI/Buttons/Button'
import OptionModal from '../addOptionModal/AddOptionModal'
import { InputRadio } from '../../UI/InputRadio'
import { DeleteRealEnglishWord } from '../../../assets'

export const CreateSelectMainIdea = () => {
   const [isModalOpen, setModalOpen] = useState(false)
   const [options, setOptions] = useState([])
   const [text, setText] = useState('')
   const handleOpenModal = () => {
      setModalOpen(true)
   }
   const handleCloseModal = () => {
      setModalOpen(false)
   }
   const handleSaveOption = (newOption, isTrue) => {
      if (!options.some((option) => option.text === newOption)) {
         const optionId = text
         const option = { id: optionId, text: newOption, isTrue }
         if (options.length < 6) {
            setOptions([...options, option])
         }
      }
      handleCloseModal()
   }
   const handleSave = () => {
      console.log(options)
   }
   const handleCheckboxChange = (index) => {
      const updatedOptions = [...options]
      updatedOptions[index].isTrue = !updatedOptions[index].isTrue
      setOptions(updatedOptions)
   }

   const handleDeleteOption = (optionId) => {
      const updatedOptions = options.filter((option) => option.id !== optionId)
      setOptions(updatedOptions)
   }

   return (
      <Container>
         <Text>Passage</Text>
         <TextFieldStyle>
            <TextField
               multiline
               value={text}
               onChange={(e) => setText(e.target.value)}
               fullWidth
            />
         </TextFieldStyle>
         <MiniContainerButton>
            <Button
               defaultStyle="#3A10E5"
               className="addNewTestButton"
               hoverStyle="#3A10E5E5"
               variant="contained"
               onClick={handleOpenModal}
            >
               add options
            </Button>
         </MiniContainerButton>
         {isModalOpen && (
            <OptionModal
               open={isModalOpen}
               handleCloseModal={handleCloseModal}
               onSaveOption={handleSaveOption}
               titleInput="Select the main idea"
            />
         )}
         <ContainerCreateTest>
            {options.map((option, index) => (
               <CreateTest key={option.id}>
                  <div style={{ width: '1rem' }}>
                     <MainContainer>
                        <span className="Number-Words">{index + 1}</span>
                        <div className="NumberText">
                           <OptionText>{option.text}</OptionText>
                        </div>
                     </MainContainer>
                  </div>
                  <div className="InputDelete">
                     <InputRadio
                        variant="RADIO"
                        checked={option.isTrue}
                        onChange={() => handleCheckboxChange(index)}
                     />
                     <DeleteIcon
                        onClick={() => handleDeleteOption(option.id)}
                     />
                  </div>
               </CreateTest>
            ))}
         </ContainerCreateTest>
         {options.length > 0 && (
            <ContainerButtons>
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
            </ContainerButtons>
         )}
      </Container>
   )
}
const TextFieldStyle = styled('div')(() => ({
   marginTop: '1rem',
   '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
      border: '1.53px solid #D4D0D0',
      outline: 'none',
   },
   '& :hover fieldset': {
      border: ' 1.59px solid #3A10E5 !important',
   },
}))
const Text = styled('span')(() => ({
   color: '#4C4859',
   fontfamily: 'DINNextRoundedLTW04-Medium',
   fontSize: '1rem',
   fontWeight: '500',
   lineHeight: '1rem',
}))
const OptionText = styled('span')(() => ({
   wordWrap: 'break-word',
   width: '42rem',
}))

const MiniContainerButton = styled('div')(() => ({
   marginTop: '2rem',
   display: 'flex',
   justifyContent: 'end',
}))

const Container = styled('div')(() => ({
   marginTop: '1.7rem',
}))
const DeleteIcon = styled(DeleteRealEnglishWord)(() => ({
   cursor: 'pointer',
}))
const ContainerCreateTest = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '10px',
   marginTop: '9px',
   flexWrap: 'wrap',
   paddingTop: '20px',
}))

const CreateTest = styled('div')(() => ({
   border: 'solid 1.53px #D4D0D0',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '100%',
   height: '5rem',
   borderRadius: '0.5rem',
   padding: '0.88rem 1rem 0.81rem 1rem ',
   '.NumberText': {
      display: 'flex',
      justifyContent: 'start',
      span: {
         color: '#4C4859',
      },
   },
   '.InputDelete': {
      gap: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
}))
const MainContainer = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   '.Number-Words': {
      color: '#4C4859',
   },
}))

const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   marginTop: '1rem',
   gap: '1rem',
}))
