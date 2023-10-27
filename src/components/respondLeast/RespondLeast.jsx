import React, { useState } from 'react'
import { TextField, styled } from '@mui/material'
import { Background } from '../../layout/Background'
import Button from '../UI/Buttons/Button'

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
      <MainContainer>
         <Background marginTop="65px">
            <div className="widthContainer">
               <Container>
                  <label htmlFor="Question statement">Question statement</label>
                  <TextFieldStyled
                     multiline
                     id="QuestionStatement"
                     value={questionAndAnswer}
                     onChange={handleInputChange}
                  />
               </Container>
               <div className="audioContainer">
                  <div>
                     <p>Number off</p>
                     <p>Replays</p>
                     <input
                        type="number"
                        className="Input replaceInput"
                        value={replays}
                        onChange={handleReplaysChange}
                     />
                  </div>
               </div>
               <div className="buttons">
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
                     className="saveButton"
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                  >
                     Save
                  </Button>
               </div>
            </div>
         </Background>
      </MainContainer>
   )
}
const Container = styled('div')`
   display: flex;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;
`
const TextFieldStyled = styled(TextField)({
   width: '53rem',
   height: '2.875rem',
   borderRadius: '0.5rem',
   background: '#fff',
   '.css-1tzkmqz-MuiInputBase-root-MuiOutlinedInput-root ': {
      borderRadius: '0.5rem',
      position: 'none',
   },
})

const MainContainer = styled('div')(() => ({
   '.tiemField': {
      width: '100',
   },
   '.widthContainer': {
      width: '53.12rem',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '2rem',
      '.buttons': {
         display: 'flex',
         justifyContent: 'end',
         gap: '1rem',
      },
      '.typeText': {
         marginBottom: '0.9rem',
      },
      '.audioContainer': {
         display: 'flex',
         alignItems: 'end',
         '.replaceInput': {
            width: '3.6rem',
            height: '3rem',
            marginTop: '0.9rem',
         },

         input: {
            height: '3rem',
            width: '100%',
            border: '2.2px solid #D4D0D0',
            borderRadius: '0.5rem',
            outline: 'none',
            paddingLeft: '0.7rem',
         },
      },
   },
}))
