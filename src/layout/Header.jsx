import { Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Logo } from '../assets'
import Button from '../components/UI/Buttons/Button'
import { authActions } from '../store/auth/authSlice'

const Header = ({ roles = 'guest', marginBottom }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleLogout = () => {
      dispatch(authActions.logout(navigate))
   }
   const handleComeInClick = () => {
      navigate('/signin')
   }

   const handleLoginClick = () => {
      navigate('/signup')
   }

   return (
      <MyHeader marginBottom={marginBottom}>
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
                  LOG IN
               </Button>
               <Button
                  defaultStyle="white"
                  hoverStyle="#F0EDED"
                  className="registerButton"
                  onClick={handleLoginClick}
               >
                  SIGN UP
               </Button>
            </ButtonsContainer>
         ) : (
            <Options>
               <OptionsBlock>
                  <NavLink
                     style={({ isActive }) => {
                        return {
                           color: isActive ? 'blue' : '#4C4859',
                        }
                     }}
                     to={roles === 'user' ? '/user/test-list' : '/admin/tests'}
                  >
                     <MyText>Tests</MyText>
                  </NavLink>
               </OptionsBlock>
               <OptionsBlock>
                  {roles === 'user' ? (
                     <NavLink
                        to="/user/results/my-results"
                        style={({ isActive }) => {
                           return {
                              color: isActive ? 'blue' : '#4C4859',
                           }
                        }}
                     >
                        <MyText>My Results</MyText>
                     </NavLink>
                  ) : (
                     <NavLink
                        style={({ isActive }) => {
                           return {
                              color: isActive ? 'blue' : '#4C4859',
                           }
                        }}
                        to="/admin/results"
                     >
                        <MyText>Submitted Results</MyText>
                     </NavLink>
                  )}
               </OptionsBlock>
               <OptionsBlock>
                  <Button
                     className="logOutButton"
                     variant="outlined"
                     defaultStyle="white"
                     hoverStyle="blue"
                     onClick={handleLogout}
                  >
                     <MyText onClick={handleLogout}>Log out</MyText>
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
   alignItems: 'center',
}))
const MyHeader = styled('header')(({ marginBottom }) => ({
   maxWidth: '100vw',
   height: '94px',
   display: 'flex',
   background: '#fff',
   justifyContent: 'space-between',
   marginBottom: marginBottom || null,
}))
const LogoBox = styled('div')({
   margin: '19px 0 0 7rem',
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
   '& a': {
      textDecoration: 'none',
   },
})
const OptionsBlock = styled('div')({
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
   textAlign: 'center',
   marginRight: '1.7rem',
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
