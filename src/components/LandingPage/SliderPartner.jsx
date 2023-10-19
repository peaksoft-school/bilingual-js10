import React from 'react'
import { Typography, styled } from '@mui/material'
import { partnersIcons } from '../../utils/helpers/PartnersIcons'

const SliderPartner = () => {
   return (
      <Slider>
         <MyText>Partners </MyText>
         <StyledBox>
            {partnersIcons.map((item) => (
               <InnerBox key={item.id}>
                  <img src={item.icon} alt="" />
               </InnerBox>
            ))}
         </StyledBox>
      </Slider>
   )
}

export default SliderPartner
const Slider = styled('div')({
   width: '100%',
   height: '214px',
   display: 'flex',
   flexDirection: 'column',
   border: '1px solid blue',
   justifyContent: 'end',
   gap: '2rem',
   position: 'relative',
})
const MyText = styled(Typography)({
   fontFamily: 'Gilroy',
   fontSize: '2.5rem',
   fontStyle: 'normal',
   fontWeight: '700',
   lineHeight: '48.36px',
   color: '#3752B4',
   textAlign: 'center',
})

const StyledBox = styled('div')({
   width: '100%',
   height: '126px',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'end',
   gap: '30px',
})

const InnerBox = styled('div')({
   border: '1px solid #E4E4E4',
   width: '255px',
   height: '126px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#FFFFFF',
   borderRadius: '20px',
   '& img': {
      width: '175px',
      height: '86px',
   },
})
