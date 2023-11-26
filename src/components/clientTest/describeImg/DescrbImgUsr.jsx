import React, { useState } from 'react'
import { Typography, styled } from '@mui/material'
import { Background } from '../../../layout/Background'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'
import Button from '../../UI/Buttons/Button'
import TextArea from '../../UI/textarea/TextArea'

const DescrbImgUsr = ({ img }) => {
   const [value, setValue] = useState()
   const duration = 20
   function handleTimeUp() {
      // setTimeout(() => {
      //    console.log('nextPage')
      // }, 10000)
   }
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)
   const handleInputChange = (e) => {
      setValue(e.target.value)
   }
   const onSave = () => {
      console.log(value)
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
                  <DescribeText>
                     Write one or more sentences that describe the image
                  </DescribeText>
               </div>
               <BlockImg>
                  <BoxImg>
                     <img src={img} alt="img comes with props" />
                  </BoxImg>
                  <Input onChange={handleInputChange} value={value} />
               </BlockImg>
               <BlockBottom>
                  <hr />
                  <ButtonBox>
                     <Button padding="0.8rem 2.5rem" onClick={onSave}>
                        Next
                     </Button>
                  </ButtonBox>
               </BlockBottom>
            </Container>
         </Background>
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
})
const PrgressBlock = styled('div')({
   width: '50rem',
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
   border: '1px green solid',
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
   //    textTransform: 'lowercase',  // font-family: DINNextRoundedLTW01-Regular;
})
