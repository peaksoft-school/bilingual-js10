import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Typography, styled } from '@mui/material'
import Button from '../../UI/Buttons/Button'
import TextArea from '../../UI/textarea/TextArea'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

const DescrbImgUsr = () => {
   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [value, setValue] = useState(null)

   const handleInputChange = (e) => {
      setValue(e.target.value)
   }
   const handleAddTest = () => {
      const testPayload = {
         statement: value,
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
      <div>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
         <Container>
            <div>
               <DescribeText>
                  Write one or more sentences that describe the image
               </DescribeText>
            </div>
            <BlockImg>
               <BoxImg>
                  <img
                     src={testComponent.fileUrl}
                     alt="img comes with props"
                     width="100%"
                     height="100%"
                  />
               </BoxImg>
               <Input
                  minRows={5}
                  maxRows={5}
                  onChange={handleInputChange}
                  value={value}
               />
            </BlockImg>
            <BlockBottom>
               <hr />
               <ButtonBox>
                  <Button
                     defaultStyle="#3A10E5"
                     hoverStyle="#4E28E8"
                     className="nextButton"
                     padding="0.8rem 2.5rem"
                     onClick={handleAddTest}
                  >
                     Next
                  </Button>
               </ButtonBox>
            </BlockBottom>
         </Container>
      </div>
   )
}

export default DescrbImgUsr

const Container = styled('div')({
   fontfamily: 'Gilroy',
   fontStyle: 'normal',
   width: '50rem',
   height: '30rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3.1rem',
   alignItems: 'center',
   marginTop: '2rem',
})

const BlockImg = styled('div')({
   width: '38rem',
   height: '15rem',
   display: 'flex',
   flexDirection: 'row',
   gap: '2rem',
   alignItems: 'center',
})
const BoxImg = styled('div')({
   width: '11.37rem',
   height: '11rem',
   textAlign: 'center',
})
const Input = styled(TextArea)({
   width: '23.87rem',
   height: '11.43rem',
   padding: '0.3rem',
})

const BlockBottom = styled('div')({
   width: '50rem',
   height: '8rem',
   display: 'flex',
   gap: '1.5rem',
   flexDirection: 'column',
   hr: {
      hr: {
         border: '1px #D4D0D0 solid',
      },
   },
})
const ButtonBox = styled('div')({
   alignSelf: 'end',
})
const DescribeText = styled(Typography)({
   color: '#4C4859',
   fontfamily: 'Gilroy',
   fontSize: '1.5rem',
   fontWeight: '400',
   lineHeight: 'normal',
})
