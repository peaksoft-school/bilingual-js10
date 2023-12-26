import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Typography, styled } from '@mui/material'
import TextArea from '../../UI/textarea/TextArea'
import Button from '../../UI/Buttons/Button'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

export const UserRespondInAtleastNwords = () => {
   const [wordCount, setWordCount] = useState(0)
   const [userInput, setUserInput] = useState('')
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )

   const handleInputChange = (event) => {
      const text = event.target.value
      const words = text.trim() === '' ? [] : text.trim().split(/\s+/)
      setWordCount(words.length)
      setUserInput(text)
   }
   const handleAddTest = () => {
      const testPayload = {
         statement: userInput,
         questionId: testComponent.id,
      }
      dispatch(addTest(testPayload))
      if (questions.length === currentComponent + 1) {
         navigate('/user/test-list/send-the-results')
      } else {
         dispatch(globalTestSlice.actions.addCurrentComponent(1))
      }
   }

   function handleTimeUp() {}
   const { duration } = testComponent
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)
   useEffect(() => {
      if (+timeObject.minute === 0) {
         if (+timeObject.seconds === 0) {
            dispatch(globalTestSlice.actions.addCurrentComponent(1))
         }
      }
   }, [+timeObject.seconds])

   return (
      <Container>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />

         <DescribeText>
            Respond to the question in at least {testComponent.attempts} words
         </DescribeText>
         <MainContainer>
            <Describe>
               <p>{testComponent.statement}</p>
            </Describe>
            <div>
               <Input minRows={5} maxRows={5} onChange={handleInputChange} />
               <Word wordCount={wordCount} res={testComponent.attempts}>
                  Word:{testComponent.count} : {wordCount}
               </Word>
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
                  disabled={wordCount <= testComponent.attempts}
                  onClick={handleAddTest}
               >
                  Next
               </Button>
            </ButtonBox>
         </BlockBottom>
      </Container>
   )
}
const Word = styled('span')(({ wordCount, res }) => {
   return {
      color: wordCount >= res ? '#3A10E5' : '#AFAFAF',
      fontSize: '1rem',
      fontWeight: '500',
   }
})
const Container = styled('div')`
   margin-top: 2rem;
`

const Input = styled(TextArea)({
   width: '23.875rem',
   padding: '0.3rem',
})

const DescribeText = styled(Typography)({
   textAlign: 'center',
   color: '#4C4859',
   fontfamily: 'Gilroy',
   fontSize: '1.5rem',
   fontWeight: '400',
   marginTop: '2rem',

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
