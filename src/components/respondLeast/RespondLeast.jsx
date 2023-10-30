import React, { useState } from 'react'
import { styled } from '@mui/material'
import Button from '../UI/Buttons/Button'
import Input from '../UI/Input'

export const RespondLeast = () => {
   const [questionAndAnswer, setQuestionAndAnswer] = useState('')
   const [replays, setReplays] = useState('')

   const handleInputChange = (e) => {
      const userInput = e.target.value
      setQuestionAndAnswer(userInput)
   }

   const handleReplaysChange = (e) => {
      const replayValue = e.target.value
      setReplays(replayValue)
   }

   const handleSave = () => {
      const data = {
         replays,
         questionAndAnswer,
      }
      console.log(data)
   }

   return (
      <div>
         <WidthContainer>
            <Container>
               <label htmlFor="Question statement">Question statement</label>
               <Input
                  value={questionAndAnswer}
                  onChange={handleInputChange}
                  placeholder="“describe a time you were surprised. what happened?”"
               />
            </Container>
            <AudioContainer>
               <div>
                  <p>Number off</p>
                  <p style={{ marginBottom: '1rem' }}>Replays</p>
                  <Input
                     type="number"
                     className="Input replaceInput"
                     value={replays}
                     onChange={handleReplaysChange}
                     min="0"
                  />
               </div>
            </AudioContainer>
            <Buttons>
               <Button
                  variant="outlined"
                  className="goBackButton"
                  hoverStyle="#3A10E5"
               >
                  Go back
               </Button>
               <Button
                  onClick={handleSave}
                  variant="contained"
                  defaultStyle="#2AB930"
                  hoverStyle="#31CF38"
               >
                  Save
               </Button>
            </Buttons>
         </WidthContainer>
      </div>
   )
}
const Container = styled('div')`
   display: flex;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;
   label {
      margin-top: 1rem;
      color: var(--Dark-grey-font-color, #4c4859);
   }
   input {
      width: 47rem;
      height: 1rem;
   }
`
const Buttons = styled('div')`
   display: flex;
   gap: 1rem;
   justify-content: end;
   margin-right: 3.5rem;
`
const WidthContainer = styled('div')`
   width: 53.12rem;
   display: flex;
   flex-direction: column;
   row-gap: 2rem;
`
const AudioContainer = styled('div')`
   display: flex;
   align-items: end;
   p {
      color: var(--Dark-grey-font-color, #4c4859);
   }

   .replaceinput {
      width: 3.6rem;
      height: 3rem;
   }
   input {
      width: 2rem;
      height: 1.5rem;
      outline: none;
      position: none;
   }
`
