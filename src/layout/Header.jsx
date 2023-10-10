import { Typography, styled } from '@mui/material'
import React from 'react'

import { Link } from 'react-router-dom'
import { Logo } from '../assets'

const Header = ({ role = 'client' }) => {
   return (
      <MyHeader>
         <LogoBox>
            <Logo />
         </LogoBox>
         <Options>
            <OptionsBlock>
               <HeaderLink to="/">
                  <Typography>Tests</Typography>
               </HeaderLink>
            </OptionsBlock>
            <OptionsBlock>
               {role ? (
                  <HeaderLink to="/">
                     <Typography>My Results</Typography>
                  </HeaderLink>
               ) : (
                  <HeaderLink to="/">
                     <Typography>Submitted Results</Typography>
                  </HeaderLink>
               )}
            </OptionsBlock>
            <OptionsBlock>
               <button>Logout</button>
            </OptionsBlock>
         </Options>
      </MyHeader>
   )
}
const MyHeader = styled('header')({
   maxWidth: '100vw',
   height: '5vh',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})
const LogoBox = styled('div')({
   marginLeft: '7rem',
})
const Options = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '3.75rem',
   marginRight: '5rem',
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

export default Header
