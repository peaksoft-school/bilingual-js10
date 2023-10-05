import { Typography, styled } from '@mui/material'
import React from 'react'
import { ReactComponent as Logo } from '../assets/svg/header-logo.svg'

const Footer = () => {
   return (
      <FooterStyled>
         <Wrapper>
            <Logo />
            <Typography className="text"> © 2022 Peaksoft</Typography>
         </Wrapper>
      </FooterStyled>
   )
}

export default Footer
const FooterStyled = styled('footer')({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center',
   maxWidth: '1440px',
   height: '95px',
})
const Wrapper = styled('div')({
   display: 'flex',
   flexDirection: ' row',
   justifyContent: 'center',
   gap: '50px',
   '& .text': {
      color: '#98A2B3',
      fontSize: '2rem',
   },
})
