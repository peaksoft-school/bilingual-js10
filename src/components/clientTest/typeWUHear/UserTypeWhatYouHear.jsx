import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Hear } from '../../../assets'
import TextArea from '../../UI/textarea/TextArea'
import Button from '../../UI/Buttons/Button'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

export const UserTypeWhatYouHear = () => {
   const [value, setValue] = useState('')
   const navigate = useNavigate()

   const dispatch = useDispatch()
   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )

   const [replaysLeft, setReplaysLeft] = useState(testComponent.attempts)
   const [isPlaying, setIsPlaying] = useState(false)
   const audioRef = useRef(null)
   const handleInputChange = (e) => {
      setValue(e.target.value)
   }
   const isNextButtonDisabled = !value

   const playAudio = () => {
      if (audioRef.current && !isPlaying && replaysLeft > 0) {
         audioRef.current.play()
         setIsPlaying(true)
         setReplaysLeft((prev) => prev - 1)
      }
   }
   const stopAudio = () => {
      if (audioRef.current && isPlaying) {
         audioRef.current.pause()
         setIsPlaying(false)
      }
   }
   const nextBtn = () => {
      dispatch(addTest({ statement: value, questionId: testComponent.id }))
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
               <DescribeText>Type the statement you hear</DescribeText>
            </div>
            <BlockImg>
               <BoxImg>
                  <Hear
                     onClick={isPlaying ? stopAudio : playAudio}
                     disabled={replaysLeft === 0}
                  />
                  <audio ref={audioRef} src={testComponent.fileUrl}>
                     <track kind="captions" />
                  </audio>
               </BoxImg>
               <div>
                  <Input
                     minRows={5}
                     maxRows={5}
                     onChange={handleInputChange}
                     value={value}
                  />
                  <NumberReplace>
                     Number of replays left:{replaysLeft}
                  </NumberReplace>
               </div>
            </BlockImg>

            <BlockBottom>
               <hr />
               <ButtonBox>
                  <Button
                     padding="0.8rem 2.5rem"
                     disabled={isNextButtonDisabled}
                     defaultStyle="#3A10E5"
                     hoverStyle="#4E28E8"
                     className="nextButton"
                     onClick={nextBtn}
                  >
                     Next
                  </Button>
               </ButtonBox>
            </BlockBottom>
         </Container>
      </div>
   )
}
const Container = styled('div')({
   marginTop: '2rem',
   fontfamily: 'Gilroy',
   fontStyle: 'normal',
   height: '30rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3.1rem',
   alignItems: 'center',
})

const NumberReplace = styled('span')({
   color: '#AFAFAF',
   fontWeight: '400',
   lineHeight: '1.4rem',
   fontSize: '1rem',
})
const BlockImg = styled('div')({
   display: 'flex',
   gap: '2rem',
})
const BoxImg = styled('div')({
   width: '9.37rem',
   textAlign: 'center',
   display: 'flex',
})
const Input = styled(TextArea)({
   width: '27.4375rem',
   height: '11.43rem',
})

const BlockBottom = styled('div')({
   width: '50rem',
   display: 'flex',
   gap: '1.5rem',
   flexDirection: 'column',
   hr: {
      border: '1px #D4D0D0 solid',
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
