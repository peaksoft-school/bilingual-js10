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
               <a href="tests">
                  <Typography>Tests</Typography>
               </a>
            </OptionsBlock>
            <OptionsBlock>
               {role ? (
                  <a href="myresults">
                     <Typography>My Results</Typography>
                  </a>
               ) : (
                  <a href="submittedresult">
                     <Typography>Submitted Results</Typography>
                  </a>
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
   maxWidth: '100%',
   height: '94px',
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
   gap: '60px',
   marginRight: '5rem',
   textTransform: 'uppercase',
})
const OptionsBlock = styled('div')({
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
   textAlign: 'center',
   marginRight: '20px',
   '& > a ': {
      textDecoration: 'none',
   },
})

export default Header
