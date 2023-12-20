import React, { forwardRef } from 'react'
import { TextField, styled } from '@mui/material'

const Input = forwardRef(
   ({ children, onChange, value, label, error, fullWidth, ...rest }, ref) => {
      return (
         <MyStyledInput
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            error={error}
            inputRef={ref}
            fullWidth={fullWidth}
            {...rest}
            InputProps={{ inputProps: { min: 0, max: 1000 } }}
         >
            {children}
         </MyStyledInput>
      )
   }
)
const MyStyledInput = styled(TextField)((props) => ({
   '& .MuiInputBase-input': {
      padding: `${props.padding ? props.padding : '1rem 1.4rem'}`,
      lineHeight: '1.5rem',
      color: '#757575',
      borderRadius: '8px',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         border: `${props.border ? props.border : '1px solid #D4D0D0'}`,
         borderRadius: '8px',
      },
      '&:hover fieldset': {
         border: '1.53px solid #3A10E5',
         borderRadius: '8px',
      },
      '&.Mui-focused': {
         '& fieldset': {
            border: '1.3px solid #3A10E5',
            borderRadius: '8px',
         },
         '& .MuiInputLabel-outlined': {
            transform: 'translate(14px, -6px) scale(0.75)',
            color: '#3A10E5',
            fontWeight: 'bold',
            '&.MuiInputLabel-shrink': {
               transform: 'translate(14px, 8px) scale(1)',
            },
         },
      },
   },
}))

export default Input
