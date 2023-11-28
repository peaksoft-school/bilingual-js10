import { TextField as MuiTextArea, styled } from '@mui/material'
import React, { forwardRef } from 'react'

const TextArea = forwardRef(
   ({ onChange, value, label, error, fullWidth, disabled, ...rest }, ref) => {
      return (
         <div>
            <StyledTextArea
               fullWidth={fullWidth}
               name="Outlined"
               placeholder="Your response"
               variant="outlined"
               id="outlined-basic"
               multiline
               label={label}
               value={value}
               onChange={onChange}
               error={error}
               inputRef={ref}
               disabled={disabled}
               {...rest}
            />
         </div>
      )
   }
)

const StyledTextArea = styled(MuiTextArea)({
   '& .MuiOutlinedInput-root': {
      borderRadius: '0.5rem',
      backgroundColor: 'white',
      fontFamily: 'Poppins',
      color: ' #4C4859',
      padding: '0.88rem 1rem 2.83rem 1rem',
      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
         border: '1.53px solid #D4D0D0',
      },
      '&.Mui-focused fieldset': {
         border: '1.53px solid #3A10E5',
      },
      '&:hover fieldset': {
         border: '1.53px solid #3A10E5',
      },
      '&:invalid fieldset': {
         border: '1.53px solid red',
      },
      '&:required fieldset': {
         border: '1.53px solid black',
      },
   },
})
export default TextArea
