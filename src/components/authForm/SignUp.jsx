import { Grid, Typography, styled } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../config/withGoogle'
import { signUpInput } from '../../utils/constants/constants'
import {
   ErrorIcon,
   EyeClosed,
   EyePassword,
   Google,
   Layer,
   System,
} from '../../assets'
import { authActions } from '../../store/auth/authSlice'
import { authWithGoogle, signUp } from '../../store/auth/authThunk'
import { validationAuthSignUp } from '../../utils/helpers/validate/authValidate'
import Button from '../UI/Buttons/Button'
import Input from '../UI/Input'

const SignupPage = () => {
   const dispatch = useDispatch()
   const [showPassword, setShowPassword] = useState(false)

   const navigate = useNavigate()
   const handleClickShowPassword = () => setShowPassword((show) => !show)
   const latinRegExp = /^[a-zA-Z]+$/

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
   const submitHandler = (values) => {
      dispatch(signUp({ userData: values, navigate, login: authActions.login }))
   }

   const { values, handleChange, handleSubmit, errors, touched } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
      },
      validationSchema: validationAuthSignUp,
      onSubmit: (values) => {
         if (
            !latinRegExp.test(values.firstName) ||
            !latinRegExp.test(values.lastName)
         ) {
            return
         }
         submitHandler(values)
      },
   })
   const errorMessages = Object.values(errors).filter(Boolean)
   const gotToLandingPage = () => {
      navigate('/')
   }

   return (
      <Background>
         <SignUpForm onSubmit={handleSubmit}>
            <IconContainer>
               <CloseModalIcon onClick={gotToLandingPage} />
            </IconContainer>
            <Container>
               <Icon2 />
               <Title> Create an Account</Title>
               {signUpInput.map((item) => {
                  return (
                     <StyledInput
                        error={touched[item.name] && errors[item.name]}
                        key={item.name}
                        label={item.label}
                        name={item.name}
                        value={values[item.name]}
                        onChange={handleChange}
                        type={showPassword ? 'text' : item.type}
                     />
                  )
               })}
               <EyeIcon onClick={handleClickShowPassword}>
                  {showPassword ? <EyePassword /> : <EyeClosed />}
               </EyeIcon>
               {errorMessages.length > 0 && (
                  <ErrorMessage>
                     {`Incorrect ${errorMessages.join(',')}`}
                     <Error />
                  </ErrorMessage>
               )}
               <StyledButton
                  variant="contained"
                  defaultStyle="#3A10E5"
                  hoverStyle="#3A10E5E5"
                  type="submit"
               >
                  sign up
               </StyledButton>
               <ButtonContainer
                  defaultStyle="white"
                  hoverStyle="#d9d6d6"
                  onClick={(event) => handleAuthWithGoogle(event)}
               >
                  <GoogleIcon />
                  sign up with google
               </ButtonContainer>
               <StyledText>
                  ALREADY HAVE AN ACCOUNT?
                  <StyledNavLink to="/signin"> LOG IN</StyledNavLink>
               </StyledText>
            </Container>
         </SignUpForm>
      </Background>
   )
}

export default SignupPage

const ErrorMessage = styled(Typography)(() => ({
   color: 'red',
   display: 'flex',
   justifyContent: 'center',
}))
const Error = styled(ErrorIcon)(() => ({
   marginLeft: '5px',
   marginTop: '2px',
}))

const Background = styled(Grid)(() => ({
   background: 'linear-gradient(90.76deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   padding: '30px',
   width: '100%',
   height: '100vh',
   display: 'flex',
   alignItems: 'center',
}))

const SignUpForm = styled('form')(() => ({
   width: '38.5rem',
   background: '#FFFFFF',
   borderRadius: '10px',
   margin: '0 auto',
   padding: '30px',
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
   marginLeft: '30px',
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

const StyledButton = styled(Button)(() => ({
   height: '52px',
   marginTop: '10px',
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

const StyledNavLink = styled(NavLink)(() => ({
   color: '#3A10E5',
   textDecoration: 'none',
}))
const EyeIcon = styled('span')(() => ({
   position: 'absolute',
   display: 'flex',
   marginTop: '22.2rem',
   marginLeft: '29rem',
   cursor: 'pointer',
}))
