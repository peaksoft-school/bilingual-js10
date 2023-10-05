import React from 'react'
import { TextField, styled } from '@mui/material'

const Input = ({ children, onChange, value, label, error, ...rest }) => {
   return (
      <MyStyledInput
         label={label}
         variant="outlined"
         value={value}
         onChange={onChange}
         error={error}
         {...rest}
      >
         {children}
      </MyStyledInput>
   )
}
const MyStyledInput = styled(TextField)({
   '& .MuiInputBase-input': {
      width: '40vw',
      padding: '12px 16px',
      color: '#757575',
      '&:hover': {
         border: '1px solid #3A10E5',
      },
      '&:active': {
         border: '1px solid #3A10E5',
      },
   },
   '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
         border: '1px solid #3A10E5',
      },
   },
})

export default Input
