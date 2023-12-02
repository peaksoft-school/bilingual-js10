import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Typography, styled } from '@mui/material'
import Button from '../../UI/Buttons/Button'
import TextArea from '../../UI/textarea/TextArea'
import { addTest } from '../../../store/userTest/global-test-slice'

const DescrbImgUsr = ({ img }) => {
   const [value, setValue] = useState()
   const dispatch = useDispatch()

   const handleInputChange = (e) => {
      setValue(e.target.value)
   }
   const handleAddTest = () => {
      const testPayload = {
         statement: value,
      }
      dispatch(addTest(testPayload))
      console.log(testPayload)
   }
   return (
      <div>
         <Container>
            <div>
               <DescribeText>
                  Write one or more sentences that describe the image
               </DescribeText>
            </div>
            <BlockImg>
               <BoxImg>
                  <img src={img} alt="img comes with props" />
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
                  <Button padding="0.8rem 2.5rem" onClick={handleAddTest}>
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
