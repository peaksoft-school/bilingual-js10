import { Grid, Typography, styled } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../config/withGoogle'
import { EyeClosed, EyePassword, Google, Layer, System } from '../../assets'
import { authWithGoogle, signIn } from '../../store/auth/authThunk'
import { validationAuthSignIn } from '../../utils/helpers/validate/authValidate'
import Button from '../UI/Buttons/Button'
import Input from '../UI/Input'
import { InputRadio } from '../UI/InputRadio'
import { authActions } from '../../store/auth/authSlice'

const SigninPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [showPassword, setShowPassword] = useState(false)
   const handleAuthWithGoogle = (event) => {
      event.preventDefault()
      signInWithPopup(auth, provider)
         .then((data) => {
            const userToken = data.user.accessToken
            return userToken
         })
         .then((token) => {
            dispatch(authWithGoogle({ token, navigate }))
         })
         .catch((error) => {
            if (error.code === 'auth/cancelled-popup-request') {
               console.log('Вы отменили запрос на всплывающее окно', 'error')
            }
         })
   }
   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const submitHandler = (values) => {
      dispatch(signIn({ userData: values, navigate, login: authActions.login }))
   }

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: validationAuthSignIn,
      onSubmit: (values) => {
         submitHandler(values)
      },
   })

   const gotToLandingPage = () => {
      navigate('/')
   }

   return (
      <Background>
         <SignInForm onSubmit={handleSubmit}>
            <IconContainer>
               <CloseModalIcon onClick={gotToLandingPage} />
            </IconContainer>
            <Container>
               <Icon2 />
               <Title>Log in</Title>
               <StyledInput
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  id="outlined-basic"
               />
               <StyledInput
                  id="outlined-basic"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
               />
               <EyeIcon onClick={handleClickShowPassword}>
                  {showPassword ? <EyePassword /> : <EyeClosed />}
               </EyeIcon>
               <CheckboxContainer>
                  <StyledCheckbox variant="CHECKED" />
                  <Text>Remember me</Text>
               </CheckboxContainer>

               <StyledButton
                  defaultStyle="#3A10E5"
                  hoverStyle="#3A10E5E5"
                  variant="contained"
                  type="submit"
               >
                  log in
               </StyledButton>
               <ButtonContainer
                  defaultStyle="white"
                  hoverStyle="#d9d6d6"
                  onClick={(event) => handleAuthWithGoogle(event)}
               >
                  <GoogleIcon />
                  log in with google
               </ButtonContainer>
               <StyledText>
                  DON`T HAVE AN ACCOUNT?
                  <StyledNavLink to="/signup">SIGN UP</StyledNavLink>
               </StyledText>
            </Container>
         </SignInForm>
      </Background>
   )
}
export default SigninPage

const Background = styled(Grid)(() => ({
   background: 'linear-gradient(90.76deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   padding: '40px 0',
   width: '100%',
   height: '100vh',
   display: 'flex',
   alignItems: 'center',
}))

const SignInForm = styled('form')(() => ({
   width: '38.5rem',
   background: '#FFFFFF',
   borderRadius: '10px',
   margin: '0 auto',
   padding: '20px',
}))

const IconContainer = styled('div')(() => ({
   textAlign: 'end',
}))

const CloseModalIcon = styled(System)(() => ({
   cursor: 'pointer',
}))
const Container = styled(Grid)(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '500px',
   marginLeft: '40px',
}))
const Icon2 = styled(Layer)(() => ({
   width: '100%',
}))
const Title = styled(Typography)(() => ({
   textAlign: 'center',
   marginTop: '12px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '24px',
   lineHeight: '36px',
   color: '#4C4859',
   marginBottom: '32px',
}))

const StyledInput = styled(Input)(() => ({
   height: '52px',
   marginBottom: '20px',
}))
const CheckboxContainer = styled(Grid)(() => ({
   display: 'flex',
   gap: '8px',
}))
const StyledCheckbox = styled(InputRadio)(() => ({
   justifyContent: 'flex-start',
   padding: '0',
   marginBottom: '30px',
}))
const Text = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: ' normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '0px',
   color: '#757575',
   marginTop: '13px',
}))
const StyledButton = styled(Button)(() => ({
   marginTop: '1.5rem',
   height: '52px',
}))
const ButtonContainer = styled(Button)(() => ({
   margin: '34px auto 0',
   border: ' 1px solid #BDBDBD',
   boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
   borderRadius: '8px',
   padding: '10px 10px',
   color: '#757575',
}))
const GoogleIcon = styled(Google)(() => ({
   margin: '0 8px 0 0',
}))
const EyeIcon = styled('span')(() => ({
   position: 'absolute',
   display: 'flex',
   marginTop: '13.2rem',
   marginLeft: '29rem',
   cursor: 'pointer',
}))
const StyledText = styled(Typography)(() => ({
   textAlign: 'center',
   marginTop: '24px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '14px',
   lineHeight: '21px',
   letterSpacing: '0.02em',
   color: '#757575',
}))

const StyledNavLink = styled(NavLink)(({ disabled }) => ({
   color: disabled ? '#bdbdbd' : '#3A10E5',
   textDecoration: 'none',
   cursor: disabled ? 'default' : 'pointer',
}))
