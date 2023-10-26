import React, { useState } from 'react'
import { styled } from '@mui/material'
import CustomForm from '../customFormCreateTest/CustomFormCreateTest'
import OptionModal from '../addOptionModal/AddOptionModal'
import { InputRadio } from '../../UI/InputRadio'
import { DeleteRealEnglishWord } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import { Background } from '../../../layout/Background'

const CreateRealEnglishWord = () => {
   const [isModalOpen, setModalOpen] = useState(false)
   const [options, setOptions] = useState([])

   const handleOpenModal = () => {
      setModalOpen(true)
   }
   const handleCloseModal = () => {
      setModalOpen(false)
   }
   const handleSaveOption = (newOption, isTrue) => {
      if (!options.some((option) => option.text === newOption)) {
         const optionId = Math.random().toString(36).substring(7)
         const option = { id: optionId, text: newOption, isTrue }
         if (options.length < 6) {
            setOptions([...options, option])
         }
      }
      handleCloseModal()
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
      <Background marginTop="4rem">
         <Container>
            <CustomForm
               titlePlaceholder="Select real English words"
               durationLabel="Duration"
               selectLabel="Type"
            />
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
            <ContainerCreateTest>
               {options.map((option, index) => (
                  <CreateTest key={option.id}>
                     <div style={{ width: '1rem' }}>
                        <MainContainer>
                           <p className="Number-Words">{index + 1}</p>
                           <div className="NumberText">
                              <p>{option.text}</p>
                           </div>
                        </MainContainer>
                     </div>
                     <div className="InputDelete">
                        <InputRadio
                           variant="CHECKBOX"
                           checked={option.isTrue}
                           onChange={() => handleCheckboxChange(index)}
                        />
                        <DeleteRealEnglishWord
                           onClick={() => handleDeleteOption(option.id)}
                        />
                     </div>
                  </CreateTest>
               ))}
            </ContainerCreateTest>
         </Container>
         {isModalOpen && (
            <OptionModal
               open={isModalOpen}
               handleCloseModal={handleCloseModal}
               onSaveOption={handleSaveOption}
            />
         )}
         {options.length > 0 && (
            <ContainerButtons>
               <Button
                  variant="outlined"
                  hoverStyle="#3A10E5"
                  onClick={handleCloseModal}
               >
                  GO BACK
               </Button>
               <Button defaultStyle="#2AB930" hoverStyle="#31CF38">
                  Save
               </Button>
            </ContainerButtons>
         )}
      </Background>
   )
}

export default CreateRealEnglishWord

const Container = styled('div')(() => ({
   width: '50rem',
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
   width: '14.5rem',
   height: '2.8rem',
   borderRadius: '0.5rem',
   p: { color: 'grey' },
   padding: '0.88rem 1rem 0.81rem 1rem ',
   '.NumberText': {
      display: 'flex',
      justifyContent: 'start',
      p: {
         color: '#4C4859',
      },
   },
   '.InputDelete': {
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
const MiniContainerButton = styled('div')(() => ({
   marginTop: '2rem',
   display: 'flex',
   justifyContent: 'end',
}))
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   marginTop: '2rem',
   gap: '1rem',
}))
