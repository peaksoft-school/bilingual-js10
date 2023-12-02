import { Typography, styled } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../assets'
import Button from '../components/UI/Buttons/Button'

const Header = ({ roles = 'guest' }) => {
   const navigate = useNavigate()
   const handleComeInClick = () => {
      navigate('/signin')
   }

   const handleLoginClick = () => {
      navigate('/signup')
   }
   return (
      <MyHeader>
         <LogoBox>
            <Logo />
         </LogoBox>
         {roles === 'guest' ? (
            <ButtonsContainer>
               <Button
                  defaultStyle="#3A10E5"
                  hoverStyle="#4E28E8"
                  onClick={handleComeInClick}
               >
                  to come in
               </Button>
               <Button
                  defaultStyle="white"
                  hoverStyle="#F0EDED"
                  className="registerButton"
                  onClick={handleLoginClick}
               >
                  Registration
               </Button>
            </ButtonsContainer>
         ) : (
            <Options>
               <OptionsBlock>
                  <HeaderLink to={roles === 'user' ? '/user' : '/'}>
                     <MyText>Tests</MyText>
                  </HeaderLink>
               </OptionsBlock>
               <OptionsBlock>
                  {roles === 'user' ? (
                     <HeaderLink to="/user/my-results">
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
                     <MyText>Log out</MyText>
                  </Button>
               </OptionsBlock>
            </Options>
         )}
      </MyHeader>
   )
}
const ButtonsContainer = styled('div')(() => ({
   paddingRight: '80px',
   display: 'flex',
   columnGap: '24px',
}))
const MyHeader = styled('header')({
   maxWidth: '100vw',
   height: '15vh',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   backgroundColor: '#ffff',
})
const LogoBox = styled('div')({
   position: 'sticky',
   top: '1.2rem',
   marginLeft: '7rem',
})
const Options = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '3.5rem',
   marginRight: '7rem',
   position: 'sticky',
   top: '1.2rem',
   bottom: '1.2rem',
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
      fontFamily: 'DIN Next Rounded LT Pro Bold',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 'normal',
      textTransform: 'uppercase',
   },
})
export default Header
