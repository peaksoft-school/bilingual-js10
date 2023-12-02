import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Typography, styled } from '@mui/material'
import Button from '../../UI/Buttons/Button'
import TextArea from '../../UI/textarea/TextArea'
import { addTest } from '../../../store/userTest/global-test-slice'

const passage = `Sed ut perspiciatis unde omnis iste natus error sit
                           voluptatem accusantium doloremque laudantium, totam
                           rem aperiam, eaque ipsa quae ab illo inventore
                           veritatis et quasi architecto beatae vitae dicta sunt
                           explicabo. Nemo enim ipsam voluptatem quia voluptas
                           sit aspernatur aut odit aut fugit, sed quia
                           consequuntur magni dolores eos qui ratione voluptatem
                           sequi nesciunt. Neque porro quisquam est, qui dolorem
                           ipsum quia dolor sit amet, consectetur, adipisci
                           velit, sed quia non numquam eius modi tempora
                           incidunt ut labore et dolore magnam aliquam quaerat
                           voluptatem`
const HighLightAnswerUser = () => {
   const [answerValue, setAnswerValue] = useState('')
   const dispatch = useDispatch()

   const handleAddTest = () => {
      const testPayload = {
         statement: answerValue,
      }
      dispatch(addTest(testPayload))
   }
   return (
      <div>
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
                        {passage}
                     </Pstyle>
                  </TextBox>
               </PassageBlock>
               <InputBlock>
                  <TitleBox>
                     <TextClick>
                        Click and drad text to highlight the answer to the
                        question below
                     </TextClick>
                  </TitleBox>
                  <QuestionBox>
                     <p>
                        What did residents think couild happen with new bridge?
                     </p>
                  </QuestionBox>
                  <HighlitedBox>
                     <StyledInput
                        disabled
                        minRows={3}
                        maxRows={3}
                        placeholder="Highlight text in the passage to set an answer"
                        value={answerValue}
                     />
                  </HighlitedBox>
                  <ButtonBox>
                     <Button padding="0.8rem 2.5rem" onClick={handleAddTest}>
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
   fontFamily: 'DIN Next Rounded LT W04 Medium',
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
   marginTop: '2rem',
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
