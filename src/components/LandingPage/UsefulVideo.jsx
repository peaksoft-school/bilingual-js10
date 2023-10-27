import { Typography, styled } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { usefulVideosList } from '../../utils/helpers/UseVideList'

const UsefulVideo = () => {
   return (
      <Container>
         <MyText>Useful videos</MyText>
         <StyledBox>
            {usefulVideosList.map((item) => (
               <StyledInnerBox key={item.id}>
                  <BoxVideo>
                     <ReactPlayer url={item.url} width="100%" height="100%" />
                  </BoxVideo>
                  <StyledBottomBox>
                     <Title>{item.title}</Title>
                     <Text>Duration {item.duration}</Text>
                  </StyledBottomBox>
               </StyledInnerBox>
            ))}
         </StyledBox>
      </Container>
   )
}

const Container = styled('div')({
   backgroundColor: '#FEF5E8',
   position: 'relative',
   left: '3rem',
   width: '79rem',
   height: '28rem',
   // width: '1250px',
   // height: '444px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   overflow: 'hidden',
   gap: '2.8rem',
})

const StyledBox = styled('div')({
   width: '79rem',
   height: '21.05rem',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
})

const MyText = styled(Typography)({
   fontfamily: 'Gilroy',
   fontSize: '2.5rem',
   fontStyle: 'normal',
   fontWeight: '700',
   lineHeight: '48.36px',
   color: '#3752B4',
   textAlign: 'center',
   paddingTop: '10px',
})
const Title = styled(Typography)({
   fontfamily: 'Gilroy',
   fontSize: '1.3rem',
   fontStyle: 'normal',
   fontWeight: '700',
   lineHeight: '24.18px',
   color: '#3A10E5',
   paddingLeft: '20px',
})
const Text = styled(Typography)({
   fontfamily: 'Gilroy',
   fontSize: '1.2rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: '20.88px',
   color: '#212629',
   paddingLeft: '20px',
})
const StyledInnerBox = styled('div')({
   width: '23rem',
   height: '21.75rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'start',
   borderTopLeftRadius: '16px',
   borderTopRightRadius: '16px',
   borderBottomLeftRadius: '16px',
   borderBottomRightRadius: '16px',
   gap: '0.7rem',
   border: '1px solid #DDDDDD',
   backgroundColor: 'white',
   borderCollapse: 'separate ',
})
const BoxVideo = styled('div')({
   width: '23rem',
   height: '16rem',
   border: '1px solid #DDDDDD',
   borderTopLeftRadius: '16px',
   borderTopRightRadius: '16px',
   overflow: 'hidden',
})

const StyledBottomBox = styled('div')({
   width: '23rem',
   height: '5rem',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
})
export default UsefulVideo
