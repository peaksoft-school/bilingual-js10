import { useState } from 'react'
import { InputLabel, styled } from '@mui/material'
import Button from '../../UI/Buttons/Button'
import OptionModal from '../addOptionModal/AddOptionModal'
import { InputRadio } from '../../UI/InputRadio'
import { DeleteRealEnglishWord } from '../../../assets/index'
import Select from '../../UI/select/Select'

const TestQuestions = () => {
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
         setOptions([...options, option])
      }
      handleCloseModal()
   }

   const handleDeleteOption = (optionId) => {
      const updatedOptions = options.filter((option) => option.id !== optionId)
      setOptions(updatedOptions)
   }

   return (
      <>
         <DivCreateTest>
            <FormSubmit>
               <DivInputOne>
                  <div
                     style={{
                        width: '85%',
                        height: '76px',
                        marginTop: '20px',
                     }}
                  >
                     <TextTitle>Title</TextTitle>
                     <InputOne
                        placeholder="Select real English words"
                        name="title"
                     />
                  </div>
                  <DivTimerInput>
                     <TimeText htmlFor="timeInput">
                        Duration (inminutes)
                     </TimeText>
                     <InputNewTime
                        placeholder="15"
                        id="timeInput"
                        name="duration"
                        type="number"
                        min={1}
                        defaultValue={15}
                     />
                  </DivTimerInput>
               </DivInputOne>
               <DivInputSecond>
                  <InputLabelTextType>Type</InputLabelTextType>
                  <SelectStyled>
                     <Select fullWidth />
                  </SelectStyled>
               </DivInputSecond>
            </FormSubmit>

            <AddOption onClick={handleOpenModal}>+ ADD OPTIONS </AddOption>

            <>
               {options.map((option) => (
                  <>
                     <p key={option.id}>{option.text}</p>
                     <InputRadio
                        variant="CHECKBOX"
                        checked={option.isTrue}
                        readOnly
                     />
                     <DeleteRealEnglishWord
                        onClick={() => handleDeleteOption(option.id)}
                     />
                  </>
               ))}
            </>
         </DivCreateTest>
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
export default TestQuestions

const DivCreateTest = styled('div')(() => ({
   margin: '50px auto',
   width: '68%',
   height: 'auto',
   background: '#ffffff',
   marginTop: '48px',
   borderRadius: '20px',
   paddingTop: '50px',
   paddingBottom: '50px',
   boxShadow:
      ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
}))
const FormSubmit = styled('form')(() => ({}))
const SelectStyled = styled('div')(() => ({}))
const AddOption = styled(Button)(() => ({
   width: '15.82%',
   height: '42px',
   borderRadius: '8px',
   marginLeft: '76.02%',
   marginBottom: '22px',
   color: '#ffff',
   whiteSpace: 'nowrap',
   fontFamily: 'Poppins',
   fontSize: '0.875rem',
   lineHeight: '1rem',
   fontWeight: '500',
}))
const DivInputOne = styled('div')(() => ({
   width: '83.57%',
   height: '94px',
   display: 'flex',
   margin: '0 auto',
   gap: '24px',
}))
const InputOne = styled('input')(() => ({
   '&::placeholder': {
      color: '#4C4859',
   },
   width: '98.9%',
   height: '60.53%',
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
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4B4759',
   marginTop: '-2px',
}))
const InputNewTime = styled('input')(() => ({
   width: '95%',
   height: '46px',
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   textAlign: 'center',
   marginTop: '10px',
}))

const TimeText = styled('label')(() => ({
   width: '100%',
   height: '38.3%',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '1rem',
   lineHeight: '1.4rem',
   display: 'flex',
   alignItems: 'center',
   color: '#4B4759',
}))

const DivTimerInput = styled('div')(() => ({
   width: '12.07%',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
}))

const DivInputSecond = styled('div')(() => ({
   // width: '51rem',
   // height: '74px',
   margin: '24px 8.16% 32px 8.16%',
}))

const InputLabelTextType = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4B4759',
}))
