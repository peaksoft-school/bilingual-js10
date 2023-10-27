import { TextField, styled } from '@mui/material'
import React, { useState } from 'react'
import { Background } from '../../layout/Background'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'

export const HighlightTheAnswer = () => {
   const [text, setText] = useState('')
   const [answerValue, setAnswerValue] = useState('')
   const [question, setQuestion] = useState('')

   function save() {
      const answer = window.getSelection().toString()
      setAnswerValue(answer)
      const res = {
         text,
         answerValue,
         question,
      }
      console.log(res)
   }

   return (
      <div>
         <Background>
            <MainPassageContainer>
               <p>Questions to the Passage</p>
               <Input
                  border=" 2.3px solid #D4D0D0"
                  fullWidth
                  onChange={(e) => setQuestion(e.target.value)}
               />
               <p>Passage</p>
               <TextFieldStyle>
                  <TextField
                     multiline
                     value={text}
                     onChange={(e) => setText(e.target.value)}
                     fullWidth
                  />
               </TextFieldStyle>
               <p>Highlight correct answer:</p>
               <div
                  style={{
                     width: '820px',
                     wordBreak: 'break-word',
                     minHeight: '40px',
                  }}
               >
                  <Pstyle>{text}</Pstyle>
               </div>
               <ButtonContainer>
                  <Button variant="outlined" hoverStyle="#3A10E5">
                     go back
                  </Button>
                  <Button
                     hoverStyle="#31CF38"
                     variant="contained"
                     defaultStyle="#2AB930"
                     className="saveButton"
                     onClick={() => save()}
                  >
                     save
                  </Button>
               </ButtonContainer>
            </MainPassageContainer>
         </Background>
      </div>
   )
}

const Pstyle = styled('p')(() => ({
   color: '#4C4859',
   marginBottom: '25px',
   '::selection': {
      color: '#3A10E5',
      textDecoration: 'underline',
   },
}))

const TextFieldStyle = styled('div')(() => ({
   '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
      border: ' 2.3px solid #D4D0D0',
      outline: 'none',
   },
   '& :hover fieldset': {
      border: ' 1.59px solid #3A10E5 !important',
   },
}))

const MainPassageContainer = styled('div')(() => ({
   '& > p': {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '16px',
      color: '#4C4859',
      marginBottom: '12px',
      marginTop: '24px',
   },
}))

const ButtonContainer = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'center',
   gap: '16px',
})
