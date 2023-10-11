import { Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../assets'
import Button from '../components/UI/Buttons/Button'

const Header = ({ role = 'client' }) => {
   return (
      <MyHeader>
         <LogoBox>
            <Logo />
         </LogoBox>
         <Options>
            <OptionsBlock>
               <HeaderLink to="/">
                  <MyText>Tests</MyText>
               </HeaderLink>
            </OptionsBlock>
            <OptionsBlock>
               {role ? (
                  <HeaderLink to="/">
                     <MyText>My Results</MyText>
                  </HeaderLink>
               ) : (
                  <HeaderLink to="/">
                     <MyText>Submitted Results</MyText>
                  </HeaderLink>
               )}
            </OptionsBlock>
            <OptionsBlock>
               <Button
                  className="logOutButton"
                  variant="outlined"
                  defaultStyle="white"
                  hoverStyle="blue"
               >
                  Logout
               </Button>
            </OptionsBlock>
         </Options>
      </MyHeader>
   )
}
const MyHeader = styled('header')({
   maxWidth: '100vw',
   height: '16vh',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})
const LogoBox = styled('div')({
   position: 'sticky',
   top: '1.6rem',
   marginLeft: '7rem',
})
const Options = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '3.75rem',
   marginRight: '5rem',
   position: 'sticky',
   top: '1.6rem',
   bottom: '1.6rem',
   textTransform: 'uppercase',
})
const OptionsBlock = styled('div')({
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
   textAlign: 'center',
   marginRight: '1.7rem',
})
const HeaderLink = styled(Link)({
   textDecoration: 'none',
   color: 'black',
   '&:focus, &:active': {
      color: 'blue',
   },
})
const MyText = styled(Typography)({
   '&': {
      fontFamily: 'DINNextRoundedLTPro-Bold',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
})

export default Header
