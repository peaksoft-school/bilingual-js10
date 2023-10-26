import React, { useState } from 'react'
import { styled } from '@mui/material'
import { TimeField } from '@mui/x-date-pickers'
import { Background } from '../../layout/Background'
import Input from '../UI/Input'
import Select from '../UI/select/Select'
import Button from '../UI/Buttons/Button'

export const RespondLeast = () => {
   const [inputValue, setInputValue] = useState('')
   const lines = inputValue.split('\n')

   const handleInputChange = (e) => {
      const userInput = e.target.value
      setInputValue(userInput)
      const wordCount = userInput.split(/\s+/).filter(Boolean).length
      console.log(`Количество слов: ${wordCount}`)
   }

   return (
      <MainContainer>
         <Background marginTop="65px">
            <div className="widthContainer">
               <div className="titleAndDurationContainer">
                  <div className="titleAndInputContainer">
                     <p className="labelTitle">Title</p>
                     <Input
                        border="2.2px solid #D4D0D0"
                        fullWidth
                        className="Input"
                        padding="0.710rem 1.4rem"
                        placeholder="Respond in at least N words "
                     />
                  </div>
                  <div className="durationContainer">
                     <p>Duration</p>
                     <p className="text">(in minutes)</p>
                     <TimeField format="mm:ss" className="tiemField" />
                  </div>
               </div>
               <div>
                  <p className="typeText">Type</p>
                  <Select />
               </div>
               <Container>
                  <label htmlFor="Question statement">Question statement</label>
                  <textarea
                     rows={lines.length + 2}
                     value={inputValue}
                     onChange={handleInputChange}
                     style={{ width: '100%' }}
                     placeholder="Describe a time you were surprised. what happened?"
                  />
               </Container>
               <div className="audioContainer">
                  <div>
                     <p>Number off</p>
                     <p>Replays</p>
                     <input
                        border="2.2px solid #D4D0D0"
                        className="Input replaceInput"
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
   textarea {
      width: 53rem;
      padding: 0 1rem;
      border-radius: 0.5rem;
      border: 1.53px solid #d4d0d0;
      background: #fff;
   }
`

const MainContainer = styled('div')(() => ({
   '.tiemField': {
      width: '100',
   },
   '.widthContainer': {
      width: '850px',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '24px',
      '.buttons': {
         display: 'flex',
         justifyContent: 'end',
         gap: '16px',
      },
      '.typeText': {
         marginBottom: '10px',
      },
      '.audioContainer': {
         display: 'flex',
         alignItems: 'end',
         '.replaceInput': {
            width: '59px',
            marginTop: '10px',
         },
         '.uploadContainer': {
            display: 'flex',
            columnGap: '15px',
            alignItems: 'center',
            input: {
               display: 'none',
            },
         },
         input: {
            height: '42px',
            border: '2.2px solid #D4D0D0',
            borderRadius: '8px',
            outline: 'none',
            width: '100%',
            paddingLeft: '1.1rem',
         },
      },
   },
   '.titleAndDurationContainer': {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: '24px',
      alignItems: 'end',
      '.titleAndInputContainer': {
         width: '100%',
         '.labelTitle': {
            marginBottom: '10px',
         },
      },
      '.durationContainer': {
         width: '115px',
         '.css-1d3z3hw-MuiOutlinedInput-notchedOutline ': {
            border: '2.2px solid #D4D0D0',
            borderRadius: '8px',
            outline: 'none',
            height: '53px',
         },
         input: {
            height: '1rem',
         },
         '.text': {
            marginBottom: ' 10px',
         },
      },
   },
}))
