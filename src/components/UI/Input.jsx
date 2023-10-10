import React, { forwardRef } from 'react'
import { TextField, styled } from '@mui/material'

const Input = forwardRef(
   ({ children, onChange, value, label, error, ...rest }, ref) => {
      return (
         <MyStyledInput
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            error={error}
            inputRef={ref}
            {...rest}
         >
            {children}
         </MyStyledInput>
      )
   }
)
const MyStyledInput = styled(TextField)({
   '& .MuiInputBase-input': {
      padding: '1rem 1.4rem',
      lineHeight: '1.5rem',
      color: '#757575',
   },

   '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
         border: '1px solid #3A10E5',
      },
      '&:hover fieldset': {
         border: '1px solid #3A10E5',
      },
   },
})

export default Input
