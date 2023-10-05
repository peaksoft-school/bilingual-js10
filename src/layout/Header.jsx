import { Typography, styled } from '@mui/material'
import React from 'react'
import { ReactComponent as Logo } from '../assets/svg/header-logo.svg'

const Header = ({ role = 'clent' }) => {
   return (
      <MyHeader>
         <LogoBox>
            <Logo />
         </LogoBox>
         <Options>
            <OptionsBlock>
               <Typography>Tests</Typography>
            </OptionsBlock>
            <OptionsBlock>
               {role ? (
                  <Typography>My Results</Typography>
               ) : (
                  <Typography>Submitted Results</Typography>
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
   maxWidth: '1440px',
   height: '94px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})
const LogoBox = styled('div')({
   marginLeft: '120px',
})
const Options = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '60px',
   marginRight: '100px',
   textTransform: 'uppercase',
})
const OptionsBlock = styled('div')({
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
   textAlign: 'center',
   marginRight: '20px',
})

export default Header
