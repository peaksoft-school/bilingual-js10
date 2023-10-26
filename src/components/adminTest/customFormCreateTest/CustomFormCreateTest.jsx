import React from 'react'
import { InputLabel, styled } from '@mui/material'
import { TimeField } from '@mui/x-date-pickers/TimeField'
import Select from '../../UI/select/Select'
import Input from '../../UI/Input'

const CustomFormCraeteTest = ({
   titlePlaceholder,
   durationLabel,
   selectLabel,
   formStyles,
   labelStyles,
}) => {
   return (
      <FormSubmit style={formStyles}>
         <ContainerTitleInput>
            <Container>
               <TextTitle style={labelStyles}>Title</TextTitle>
               <StyledInput
                  border="solid 1.53px #D4D0D0"
                  padding="0.6rem 1rem"
                  placeholder={titlePlaceholder}
                  name="title"
               />
            </Container>
            <ContainerTimerInput>
               <TimeText htmlFor="timeInput">
                  {durationLabel}
                  <p>(in minutes)</p>
               </TimeText>
               <FieldTime format="mm:ss" />
            </ContainerTimerInput>
         </ContainerTitleInput>
         <ContainerInputSecond>
            <InputLabelTextType>{selectLabel}</InputLabelTextType>{' '}
            <Select fullWidth />
         </ContainerInputSecond>
      </FormSubmit>
   )
}

export default CustomFormCraeteTest

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
   fontSize: '0.9rem',
   display: 'flex',
   color: '#4B4759',
   flexDirection: 'column',
   width: '110px',
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
   '& .css-1fpet8r-MuiInputBase-root-MuiOutlinedInput-root ': {
      paddingLeft: '10px',
   },
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
   color: '#4C4859',
}))
