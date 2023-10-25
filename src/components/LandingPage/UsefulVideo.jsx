import { Typography, styled } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { usefulVideosList } from '../../utils/helpers/UseVideList'

const UsefulVideo = () => {
   return (
      <Container>
         <MyText>Useful videos </MyText>
         <StyledBox>
            {usefulVideosList.map((item) => (
               <StyledInnerBox key={item.id}>
                  <BoxVideo>
                     <ReactPlayer
                        url={item.url}
                        controls
                        height={261}
                        width={370}
                     />
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
   width: '100vw',
   height: '444px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '2.8rem',
   overflow: 'hidden',
})

const StyledBox = styled('div')({
   width: '100vw',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   overflow: 'hidden',
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
const Title = styled(Typography)({
   fontFamily: 'Gilroy',
   fontSize: '1.3rem',
   fontStyle: 'normal',
   fontWeight: '700',
   lineHeight: '24.18px',
   color: '#3752B4',
   paddingLeft: '20px',
})
const Text = styled(Typography)({
   fontFamily: 'Gilroy',
   fontSize: '1.2rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: '20.88px',
   color: '#212629',
   paddingLeft: '20px',
})
const StyledInnerBox = styled('div')({
   width: '27vw',
   height: '50vh',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'start',
   borderTopLeftRadius: '16px',
   borderTopRightRadius: '16px',
   borderBottomLeftRadius: '16px',
   borderBottomRightRadius: '16px',
   overflow: 'hidden',
   gap: '0.5rem',
   border: '1px solid #DDDDDD',
   backgroundColor: 'white',
   borderCollapse: 'separate ',
})

const BoxVideo = styled('div')({
   border: '1px solid #DDDDDD',
   borderTopLeftRadius: '16px',
   borderTopRightRadius: '16px',
   overflow: 'hidden',
})

const StyledBottomBox = styled('div')({
   width: '27vw',
   height: '15vh',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
})
export default UsefulVideo
