import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Buttons/Button'
import TextArea from '../../UI/textarea/TextArea'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

const HighLightAnswerUser = () => {
   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )
   const [answerValue, setAnswerValue] = useState('')
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleAddTest = () => {
      const testPayload = {
         statement: answerValue,
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
   const isNextButtonDisabled = !answerValue
   return (
      <div>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />

         <Container>
            <BottomBlock>
               <PassageBlock>
                  <div>
                     <ThePassage>Passage</ThePassage>
                     <hr />
                  </div>
                  <TextBox>
                     <Pstyle
                        onMouseUp={() =>
                           setAnswerValue(window.getSelection().toString())
                        }
                     >
                        {testComponent.passage}
                     </Pstyle>
                  </TextBox>
               </PassageBlock>
               <InputBlock>
                  <TitleBox>
                     <TextClick>
                        Click and drag text to highlight the answer to the
                        question below
                     </TextClick>
                  </TitleBox>
                  <QuestionBox>
                     <p>{testComponent.statement}</p>
                  </QuestionBox>
                  <HighlitedBox>
                     <StyledInput
                        disabled
                        minRows={3}
                        maxRows={3}
                        type="text"
                        placeholder="Highlight text in the passage to set an answer"
                        value={answerValue}
                        onChange={(e) => setAnswerValue(e.target.value)}
                     />
                  </HighlitedBox>
                  <ButtonBox>
                     <Button
                        defaultStyle="#3A10E5"
                        hoverStyle="#4E28E8"
                        padding="0.8rem 2.5rem"
                        onClick={handleAddTest}
                        className="nextButton"
                        disabled={isNextButtonDisabled}
                     >
                        Next
                     </Button>
                  </ButtonBox>
               </InputBlock>
            </BottomBlock>
         </Container>
      </div>
   )
}
const Container = styled('div')({
   fontfamily: 'Gilroy',
   fontStyle: 'normal',
   width: '60.25rem',
   height: '28.25rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3.1rem',
   alignItems: 'center',
   marginTop: '2.5rem',
})

const BottomBlock = styled('div')({
   width: '60.25rem',
   display: 'flex',
   flexDirection: 'row',
   gap: '3.1rem',
   alignItems: 'center',
})
const PassageBlock = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.4rem',
   width: '32.68rem',
   height: '20.75rem',
   border: '1.5px #D4D0D0 solid',
   borderRadius: '0.5rem',
   hr: {
      border: '1px  #D4D0D0 solid',
   },
})
const Pstyle = styled('p')(() => ({
   color: '#4C4859',
   marginBottom: '25px',
   '::selection': {
      color: '#3A10E5',
      textDecoration: 'underline',
   },
}))
const TextBox = styled('div')({
   width: '30.5rem',
   height: '14rem',
   margin: '1rem 2rem 1rem 1.1rem ',
   p: {
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      color: '#4C4859',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '1.4rem',
      fontSize: '1rem',
   },
})
const TextClick = styled(Typography)({
   color: '#4C4859',
   fontFamily: 'DIN Next Rounded LT W01 Regular',
   fontSize: '1.6rem',
   fontWeight: '400',
   lineHeight: '1.8rem',
})

const ThePassage = styled(Typography)({
   alignSelf: 'flex-start',
   padding: '1rem 1.2rem',
   color: '#4C4859',
   fontFamily: 'Poppins',
   fontSize: '1rem',
   fontWeight: '500',
   lineHeight: '1.3rem',
   textTransform: 'uppercase',
})
const InputBlock = styled('div')({
   width: '24.37rem',
   height: '20.75rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   alignItems: 'center',
})
const ButtonBox = styled('div')({
   alignSelf: 'end',
   marginTop: '2.2rem',
})
const TitleBox = styled('div')({
   marginBottom: '0.6rem',
})
const StyledInput = styled(TextArea)({
   width: '24rem',
   height: '6.75rem',
   borderRadius: '0.5rem',
   color: '#4C4859',
   fontFamily: 'DIN Next Rounded LT W01 Regular',
   fontSize: '1rem',
   fontWeight: '400',
   lineHeight: '1.1rem',
})
const QuestionBox = styled('div')({
   width: '24rem',
   p: {
      color: '#4C4859',
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      fontSize: '1.1rem',
      fontWeight: '400',
      lineHeight: '1.2rem',
   },
})
const HighlitedBox = styled('div')({
   marginTop: '0.5rem',
   width: '24rem',
   display: 'flex',
   alignItems: 'center',
})

export default HighLightAnswerUser
