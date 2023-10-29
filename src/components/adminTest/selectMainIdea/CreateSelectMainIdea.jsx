import { TextField, styled } from '@mui/material'
import React from 'react'
// import TextArea from '../../UI/textarea/TextArea'

export const CreateSelectMainIdea = () => {
   return (
      <Container>
         <Text>Passage</Text>
         <TextFieldStyle>
            <TextField
               multiline
               //    value={text}
               //    onChange={(e) => setText(e.target.value)}
               fullWidth
            />
         </TextFieldStyle>
      </Container>
   )
}
const TextFieldStyle = styled('div')(() => ({
   '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
      border: '1.53px solid #D4D0D0',
      outline: 'none',
   },
   '& :hover fieldset': {
      border: ' 1.59px solid #3A10E5 !important',
   },
}))
const Text = styled('span')(() => ({
   paddingBottom: '4rem',
   color: '#4C4859',
   fontfamily: 'DINNextRoundedLTW04-Medium',
   fontSize: '1rem',
   fontWeight: '500',
   lineHeight: '1rem',
}))
const Container = styled('div')(() => ({
   marginTop: '1rem',
}))
