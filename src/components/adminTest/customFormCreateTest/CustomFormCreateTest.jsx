import React from 'react'
import { InputLabel, styled } from '@mui/material'
import { TimeField } from '@mui/x-date-pickers/TimeField'
import Select from '../../UI/select/Select'
import Input from '../../UI/Input'
import { CreateRealEnglishWord } from '../realEnglishWords/CreateRealEnglishWords'
import { Background } from '../../../layout/Background'

const renderedContent = {
   'Select real English words': {
      placeholder: 'Select real English words',
      content: <CreateRealEnglishWord />,
   },
   'Listen and select English word': {
      placeholder: 'Listen and select English word',
      content: <div>Listen and select English word</div>,
   },
   'Type what you hear': {
      placeholder: 'Take a free practice test and estimate your score',
      content: <div>Type what you hear</div>,
   },
   'Record saying statement': {
      placeholder: 'My uncle is at work',
      content: <div>Record saying statement</div>,
   },
   'Respond in at least N words': {
      placeholder: 'Respond in at least N words',
      content: <div>Respond in at least N words</div>,
   },
   'Describe image': {
      placeholder: 'Take a free practice test and estimate your score',
      content: <div>Describe image</div>,
   },
   'Highlight the answer': {
      placeholder: 'Highlight the answer',
      content: <div>Highlight the answer</div>,
   },
   'Select the main idea': {
      placeholder: 'Select the main idea',
      content: <div>Select the main idea</div>,
   },
   'Select best title': {
      placeholder: 'Select best title',
      content: <div>Select best title</div>,
   },
}

const CustomFormCreateTest = ({ selectLabel, formStyles, labelStyles }) => {
   const [selectedOption, setSelectedOption] = React.useState(
      'Select real English words'
   )

   const handleChange = (event) => {
      setSelectedOption(event.target.value)
   }
   return (
      <Background marginTop="4rem">
         <FormSubmit style={formStyles}>
            <ContainerTitleInput>
               <Container>
                  <TextTitle style={labelStyles}>Title</TextTitle>
                  <StyledInput
                     border="solid 1.53px #D4D0D0"
                     padding="0.6rem 1rem"
                     placeholder={renderedContent[selectedOption]?.placeholder}
                     name="title"
                  />
               </Container>
               <ContainerTimerInput>
                  <TimeText htmlFor="timeInput">
                     Duration
                     <span>(in minutes)</span>
                  </TimeText>
                  <FieldTime format="mm:ss" />
               </ContainerTimerInput>
            </ContainerTitleInput>
            <ContainerInputSecond>
               <InputLabelTextType>{selectLabel}Type</InputLabelTextType>{' '}
               <Select
                  selectedOption={selectedOption}
                  handleChange={handleChange}
                  fullWidth
               />
            </ContainerInputSecond>
         </FormSubmit>
         {renderedContent[selectedOption]?.content}
      </Background>
   )
}

export default CustomFormCreateTest

const FormSubmit = styled('form')(() => ({
   width: '50rem',
   marginTop: '30px',
   display: 'flex',
   gap: '30px',
   flexDirection: 'column',
}))
const ContainerTitleInput = styled('div')(() => ({
   display: 'flex',
   gap: '16px',
   alignItems: 'end',
}))
const Container = styled('div')(() => ({
   height: '76px',
   paddingTop: '4px',
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
}))
const StyledInput = styled(Input)(() => ({
   width: '43rem',
   '& ::placeholder': {
      color: '#D4D0D0',
      fontWeight: 400,
   },
}))
const TextTitle = styled('h1')(() => ({
   fontfamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '1rem',
   lineHeight: '18px',
   color: '#4B4759',
}))
const TimeText = styled('label')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '0.9rem',
   display: 'flex',
   color: '#4B4759',
   flexDirection: 'column',
   width: '110px',
   '& input': {
      alignItems: 'center',
   },
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
   width: '6rem',
   '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ': {
      height: '0.5rem',
      borderRadius: ' 0.5rem',
      border: '1.53px solid #D4D0D0',
      textAlign: 'center',
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
   color: '#4C4859',
}))