import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Typography, styled } from '@mui/material'
import TextArea from '../../UI/textarea/TextArea'
import Button from '../../UI/Buttons/Button'
import { addTest } from '../../../store/userTest/global-test-slice'

export const UserRespondInAtleastNwords = () => {
   const [wordCount, setWordCount] = useState(0)
   const [userInput, setUserInput] = useState('')
   const dispatch = useDispatch()
   const handleInputChange = (event) => {
      const text = event.target.value
      const words = text.trim() === '' ? [] : text.trim().split(/\s+/)
      setWordCount(words.length)
      setUserInput(text)
   }
   const handleAddTest = () => {
      const testPayload = {
         statement: userInput,
      }
      dispatch(addTest(testPayload))
   }
   const isNextButtonDisabled = !wordCount
   return (
      <Container>
         <DescribeText>
            Respond to the question in at least 50 words
         </DescribeText>
         <MainContainer>
            <Describe>
               “Describe a time you were surprised.What <br /> happened?”
            </Describe>
            <div>
               <Input minRows={5} maxRows={5} onChange={handleInputChange} />
               <Word>Word: {wordCount}</Word>
            </div>
         </MainContainer>
         <BlockBottom>
            <hr />
            <ButtonBox>
               <Button
                  defaultStyle="#3A10E5"
                  hoverStyle="#4E28E8"
                  className="nextButton"
                  padding="0.8rem 2.5rem"
                  disabled={isNextButtonDisabled}
                  onClick={handleAddTest}
               >
                  Next
               </Button>
            </ButtonBox>
         </BlockBottom>
      </Container>
   )
}
const Container = styled('div')`
   margin-top: 2rem;
`

const Input = styled(TextArea)({
   width: '23.875rem',
   padding: '0.3rem',
})
const Word = styled('span')({
   color: '#AFAFAF',
   fontSize: '1rem',
   fontWeight: '400',
})
const DescribeText = styled(Typography)({
   textAlign: 'center',
   color: '#4C4859',
   fontfamily: 'Gilroy',
   fontSize: '1.5rem',
   fontWeight: '400',

   lineHeight: 'normal',
})
const MainContainer = styled('div')({
   display: 'flex',
   marginTop: '2rem',
   gap: '7rem',
})
const Describe = styled(Typography)({
   color: '#4C4859',
   fontSize: '1.2rem',
})

const BlockBottom = styled('div')({
   width: '55.5rem',
   display: 'flex',
   gap: '1.5rem',
   marginTop: '4rem',
   flexDirection: 'column',
   hr: {
      border: '1px #D4D0D0 solid',
   },
})
const ButtonBox = styled('div')({
   alignSelf: 'end',
})
