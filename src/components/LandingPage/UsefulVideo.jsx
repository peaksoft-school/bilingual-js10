import { Typography, styled } from '@mui/material'
import React from 'react'
import { usefulVideosList } from '../../utils/helpers/UseVideList'

const UsefulVideo = () => {
   return (
      <Container>
         <MyText>Useful videos </MyText>
         <StyledBox>
            {usefulVideosList.map((item) => (
               <StyledInnerBox key={item.id}>
                  <BoxVideo>
                     <video>
                        <track kind="captions" />
                        <source src={item.url} type="video/mp4" />
                     </video>
                  </BoxVideo>
                  <StyledBottomBox>
                     <Typography>{item.title}</Typography>
                     <p>Duration: {item.duration}</p>
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
})

const StyledBox = styled('div')({
   width: '100vw',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around',
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

const StyledInnerBox = styled('div')({
   width: '370px',
   height: '348px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'start',
   borderRadius: '16px, 16px, 16px, 16px',
   gap: '0.5rem',
   border: '1px solid #DDDDDD',
   backgroundColor: 'white',
})

const BoxVideo = styled('div')({
   border: '1px solid #DDDDDD',
   width: '370px',
   height: '261px',
   borderRadius: '16px, 16px, 0px, 0px',
})

const StyledBottomBox = styled('div')({
   width: '370px',
   height: '87px',
   display: 'flex',
   flexDirection: 'column',
})
export default UsefulVideo
