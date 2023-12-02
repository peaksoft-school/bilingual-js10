import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography, styled } from '@mui/material'
import { Background } from '../../../layout/Background'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { Hear } from '../../../assets'
import TextArea from '../../UI/textarea/TextArea'
import Button from '../../UI/Buttons/Button'

export const UserTypeWhatYouHear = () => {
   const [value, setValue] = useState()

   const duration = 120
   function handleTimeUp() {
      // setTimeout(() => {
      //    console.log('nextPage')
      // }, 10000)
   }
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)
   const { link, numberOffReplays } = useSelector((state) => state.questions)
   const [isIconBlue, setIsIconBlue] = useState(false)
   const audioRef = useRef(null)
   const handleInputChange = (e) => {
      setValue(e.target.value)
   }
   const isNextButtonDisabled = !value
   const playAudio = () => {
      if (audioRef.current && !isIconBlue && numberOffReplays > 0) {
         audioRef.current.play()
         setIsIconBlue(true)
         // setIsIconBlue(true)
      }
   }
   return (
      <div>
         <Background>
            <Container>
               <PrgressBlock>
                  <ProgressBar
                     timeObject={timeObject}
                     timeProgress={chartPercent}
                  />
               </PrgressBlock>
               <div>
                  <DescribeText>Type the statement you hear</DescribeText>
               </div>
               <BlockImg>
                  <BoxImg>
                     <Hear
                        onClick={playAudio}
                        style={{
                           color: isIconBlue ? 'blue' : 'grey',
                           marginTop: '2rem',
                        }}
                     />
                     <audio ref={audioRef} src={link}>
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
                        Number of replays left:{numberOffReplays}
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
                     >
                        Next
                     </Button>
                  </ButtonBox>
               </BlockBottom>
            </Container>
         </Background>
      </div>
   )
}
const Container = styled('div')({
   fontfamily: 'Gilroy',
   fontStyle: 'normal',
   height: '30rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '3.1rem',
   alignItems: 'center',
})
const PrgressBlock = styled('div')({
   width: '50rem',
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
      border: '1.5px #D4D0D0 solid',
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
