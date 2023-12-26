import React from 'react'
import { Typography, styled } from '@mui/material'
import { partnersIcons } from '../../utils/helpers/partnersIcons'

const SliderPartner = () => {
   return (
      <Container>
         <MyText>Partners </MyText>
         <Slider>
            <StyledBox1>
               {partnersIcons.map((item) => (
                  <InnerBox key={item.id}>
                     <img src={item.icon} alt={item.title} />
                  </InnerBox>
               ))}
            </StyledBox1>
            <StyledBox2>
               {partnersIcons.map((item) => (
                  <InnerBox key={item.id}>
                     <img src={item.icon} alt={item.title} />
                  </InnerBox>
               ))}
            </StyledBox2>
         </Slider>
      </Container>
   )
}

export default SliderPartner
const Container = styled('div')({
   position: 'relative',
   overflow: 'hidden',
   height: '214px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '2.4rem',
   marginBottom: '120px',
})
const Slider = styled('div')({
   position: 'relative',
   width: '100vw',
   height: '126px',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'spaceAround',
   alignItems: 'center',
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

const StyledBox1 = styled('div')({
   position: 'absolute',
   left: '0%',
   width: '100vw',
   height: '126px',
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'end',
   gap: '2.7rem',
   perspective: '100px',
   animation: 'scroll 10s linear infinite',
   '@keyframes scroll': {
      from: {
         left: '0%',
      },
      to: {
         left: '-100%',
      },
   },
})

const StyledBox2 = styled('div')({
   position: 'absolute',
   left: '0%',
   width: '100vw',
   height: '126px',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space between',
   alignItems: 'end',
   gap: '2.7rem',
   perspective: '100px',
   animation: 'scroll2 10s linear infinite',
   '@keyframes scroll2': {
      from: {
         left: '100%',
      },
      to: {
         left: '0%',
      },
   },
})

const InnerBox = styled('div')({
   border: '1px solid #E4E4E4',
   boxShadow: 'revert',
   width: '22vw',
   height: '126px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#FFFFFF',
   perspective: '100px',
   borderRadius: '20px',
   transition: 'transform 3s',
   '&:hover': {
      transform: 'translateY(-20px) scale(1.3)',
   },
   '& .img': {
      width: '100%',
      height: '86px',
   },
})
