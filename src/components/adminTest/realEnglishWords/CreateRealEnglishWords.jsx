import { InputLabel, styled } from '@mui/material'
import { TimeField } from '@mui/x-date-pickers/TimeField'
import { useState } from 'react'
import { DeleteRealEnglishWord } from '../../../assets/index'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import Select from '../../UI/select/Select'
import OptionModal from '../addOptionModal/AddOptionModal'

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
      <>
         <MainCreateTest>
            <FormSubmit>
               <ContainerTitleInput>
                  <Container>
                     <TextTitle>Title</TextTitle>
                     <FirstInput
                        placeholder="Select real English words"
                        name="title"
                     />
                  </Container>
                  <ContainerTimerInput>
                     <TimeText htmlFor="timeInput">
                        Duration
                        <p>(in minutes)</p>
                     </TimeText>
                     <FieldTime format="mm:ss" />
                  </ContainerTimerInput>
               </ContainerTitleInput>
               <ContainerInputSecond>
                  <InputLabelTextType>Type</InputLabelTextType>
                  <Select fullWidth />
               </ContainerInputSecond>
               <MiniContainerButton>
                  <Button
                     defaultStyle="#3A10E5"
                     className="addNewTestButton"
                     hoverStyle="#3A10E5E5"
                     onClick={handleOpenModal}
                     variant="contained"
                  >
                     add options
                  </Button>
               </MiniContainerButton>
            </FormSubmit>

            <ContainerCreateTest>
               {options.map((option, index) => (
                  <CreateTest key={option.id}>
                     <MainContainer>
                        <p className="Number-Words">{index + 1}</p>
                        <div className="NumberText">
                           <p>{option.text}</p>
                        </div>
                     </MainContainer>
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
         </MainCreateTest>
         {isModalOpen && (
            <OptionModal
               open={isModalOpen}
               handleCloseModal={handleCloseModal}
               onSaveOption={handleSaveOption}
            />
         )}
      </>
   )
}
export default CreateRealEnglishWord

const MainContainer = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   '.Number-Words': {
      color: '#4C4859',
   },
}))
const MiniContainerButton = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
}))
const ContainerCreateTest = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '10px',
   marginTop: '9px',
   flexWrap: 'wrap',
   paddingTop: '20px',
}))
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   marginTop: '2rem',
   gap: '1rem',
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
const MainCreateTest = styled('div')(() => ({
   margin: '50px auto',
   width: '68%',
   height: 'auto',
   background: '#ffffff',
   marginTop: '48px',
   borderRadius: '20px',
   padding: '50px 70px',
   boxShadow:
      ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
}))
const FormSubmit = styled('form')(() => ({
   marginTop: '30px',
   display: 'flex',
   gap: '30px',
   flexDirection: 'column',
}))
const ContainerTitleInput = styled('div')(() => ({
   display: 'flex',
   gap: '20px',
   alignItems: 'end',
}))
const Container = styled('div')(() => ({
   width: '100%',
   height: '76px',
   paddingTop: '4px',
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
}))
const FirstInput = styled('input')(() => ({
   '&::placeholder': {
      color: '#4C4859',
   },

   width: '100%',
   borderRadius: '8px',
   border: 'solid 1.53px #D4D0D0',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   padding: '12px',
   paddingLeft: '16px',
   outline: 'none',
   '&:hover, &:focus': {
      border: '1.53px solid #3A10E5',
   },
}))
const TextTitle = styled('h1')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4B4759',
}))
const TimeText = styled('label')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '1rem',
   display: 'flex',
   color: '#4B4759',
   flexDirection: 'column',
   width: '120px',
}))

const ContainerTimerInput = styled('div')(() => ({
   width: '120px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'start',
}))

const ContainerInputSecond = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '13px',
}))
const FieldTime = styled(TimeField)(() => ({
   width: '7rem',
   '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ': {
      height: '0.5rem',
      borderRadius: ' 0.5rem',
      border: '1.53px solid #D4D0D0',
      '&:hover, &:focus': {
         border: '1.53px solid #3A10E5',
      },
   },
   '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline ': {
      border: 'none',
   },
}))

const InputLabelTextType = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4B4759',
}))
