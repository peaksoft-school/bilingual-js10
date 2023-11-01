import { styled } from '@mui/material'
import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'
import TextArea from '../UI/textarea/TextArea'

export const HighlightTheAnswer = () => {
   const [text, setText] = useState('')
   const [answerValue, setAnswerValue] = useState('')
   const [question, setQuestion] = useState('')

   function save() {
      const answer = window.getSelection().toString()
      setAnswerValue(answer)
   }
   console.log(answerValue)
   console.log(text.includes(answerValue), 'heloo')

   return (
      <div>
         <MainPassageContainer>
            <span>Questions to the Passage</span>
            <Input
               value={question}
               border=" 1.53px solid #D4D0D0"
               className="input"
               padding="10px 16px"
               fullWidth
               onChange={(e) => setQuestion(e.target.value)}
            />
            <span>Passage</span>
            <TextFieldStyle>
               <TextArea
                  multiline
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  fullWidth
                  className="textarea"
               />
            </TextFieldStyle>
            <span>Highlight correct answer:</span>
            <CorrectAnswerBlock>
               <Pstyle text={text} answerValue={answerValue}>
                  {text}
               </Pstyle>
            </CorrectAnswerBlock>
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
      </div>
   )
}

const Pstyle = styled('p')(({ text, answerValue }) => ({
   color: text.includes(answerValue) ? 'red' : '#4C4859',
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
   '& > span': {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '16px',
      color: '#4C4859',
      marginBottom: '12px',
   },
   '& > .input, .textarea': {
      marginBottom: '24px',
      marginTop: '12px',
   },
}))

const ButtonContainer = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'center',
   gap: '16px',
})

const CorrectAnswerBlock = styled('div')({
   width: '820px',
   wordBreak: 'break-word',
   minHeight: '40px',
})
