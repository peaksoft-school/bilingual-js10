import { TextField as MuiTextArea, styled } from '@mui/material'
import React from 'react'

const TextArea = () => {
   return (
      <div>
         <StyledTextArea
            name="Outlined"
            placeholder="Your response"
            variant="outlined"
            id="outlined-basic"
            multiline
            rows={5}
         />
      </div>
   )
}

const StyledTextArea = styled(MuiTextArea)({
   backgroundColor: 'white',
   width: '33vw',
   '& .MuiOutlinedInput-root': {
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      borderRadius: '8px',
      color: '#D4D0D0',
      '&.Mui-focused fieldset': {
         border: '2px solid #3A10E5',
      },
      '&:hover fieldset': {
         border: '2px solid #3A10E5',
      },
   },
})

export default TextArea
