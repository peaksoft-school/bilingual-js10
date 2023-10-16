import { useState } from 'react'
import { useFormik } from 'formik'
import { Grid, Typography, styled, InputAdornment } from '@mui/material'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'
import { InputRadio } from '../UI/InputRadio'
import { Error, Eye, EyeClosed, Google, Layer, System } from '../../assets'
import { validationAuthSignIn } from '../../utils/helpers/validate/authValidate'

const SignIn = ({ toggleSignUp }) => {
   const [showPassword, setShowPassword] = useState(false)

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
      },
      validationSchema: validationAuthSignIn,
   })
   const togglePassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword)
   }

   const errorMessages = Object.values(errors).filter(Boolean)
   return (
      <Background>
         <SignInForm onSubmit={handleSubmit}>
            <IconStyled>
               <CloseIcon />
            </IconStyled>
            <MainContainer>
               <StyledLayer />
               <Title>Sign in</Title>
               <StyledInput
                  label="Email"
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  error={!!errors.email}
               />
               <StyledInput
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           {showPassword ? (
                              <Eye onClick={togglePassword} />
                           ) : (
                              <EyeClosed onClick={togglePassword} />
                           )}
                        </InputAdornment>
                     ),
                  }}
               />
               {errorMessages.length > 0 && (
                  <ErrorMessage>
                     {`Incorrect ${errorMessages.join(', ')}`}
                     <ErrorIcon />
                  </ErrorMessage>
               )}
               <CheckboxContain>
                  <InputRadio variant="CHECKED" />
                  <Text>To remember me</Text>
               </CheckboxContain>
               <StyledButton
                  type="submit"
                  fullWidth="fullWidth"
                  defaultStyle="#3A10E5"
                  hoverStyle="#3A10E5E5"
               >
                  {' '}
                  SIGN iN
               </StyledButton>
               <ButtonContainer defaultStyle="white" hoverStyle="#d9d6d6">
                  <GoogleIcon />
                  sign in with google
               </ButtonContainer>
               <StyledText>
                  DON`T HAVE AN ACCOUNT?
                  <StyledRegister onClick={toggleSignUp}>
                     REGISTER
                  </StyledRegister>
               </StyledText>
            </MainContainer>
         </SignInForm>
      </Background>
   )
}
export default SignIn

const ErrorMessage = styled(Typography)(() => ({
   color: 'red',
   display: 'flex',
   justifyContent: 'center',
}))
const Background = styled(Grid)(() => ({
   background: 'linear-gradient(90.76deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   padding: '40px 0',
}))

const SignInForm = styled('form')(() => ({
   width: '38.5rem',
   height: 'auto',
   background: '#FFFFFF',
   borderRadius: '10px',
   margin: '0 auto',
   padding: '20px',
}))

const MainContainer = styled(Grid)(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '500px',
   marginLeft: '39px',
}))

const Title = styled(Typography)(() => ({
   textAlign: 'center',
   marginTop: '12px',
   fontfamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '24px',
   lineHeight: '36px',
   color: '#4C4859',
   marginBottom: '32px',
}))
const ErrorIcon = styled(Error)(() => ({
   marginLeft: '5px',
   marginTop: '2px',
}))
const StyledInput = styled(Input)(() => ({
   height: '52px',
   marginBottom: '20px',
}))
const StyledButton = styled(Button)(() => ({
   marginTop: '30px',
   fontFamily: 'Poppins',
}))
const CheckboxContain = styled(Grid)(() => ({
   display: 'flex',
   gap: '8px',
}))

const Text = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '0px',
   color: '#757575',
   marginTop: '13px',
}))
const StyledText = styled(Typography)(() => ({
   display: 'flex',
   justifyContent: 'center',
   textAlign: 'center',
   marginTop: '24px',
   fontfamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '14px',
   lineHeight: '21px',
   letterSpacing: '0.02em',
   color: '#757575',
}))

const CloseIcon = styled(System)(() => ({
   cursor: 'pointer',
}))
const IconStyled = styled('div')(() => ({
   textAlign: 'end',
}))
const StyledLayer = styled(Layer)(() => ({
   width: '100%',
}))
const StyledRegister = styled(Typography)(() => ({
   color: '#3A10E5',
   fontFamily: 'Poppins',
   fontWeight: '500',
   fontSize: '14px',
   lineHeight: '21px',
}))
const ButtonContainer = styled(Button)(() => ({
   fontFamily: 'Poppins',
   margin: '34px auto 0',
   border: ' 1px solid #BDBDBD',
   boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
   borderRadius: '8px',
   padding: '10px 10px',
   color: '#757575',
   letterSpacing: '0.14px',
}))
const GoogleIcon = styled(Google)(() => ({
   margin: '0 8px 0 0',
}))
