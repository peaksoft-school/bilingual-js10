import { Grid, Typography, InputAdornment, styled } from '@mui/material'
import { useState } from 'react'
import { useFormik } from 'formik'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'
import { validationAuthSignUp } from '../../utils/helpers/validate/authValidate'
import { Error, Eye, EyeClosed, Google, Layer, System } from '../../assets'
import { inputFields } from '../../utils/helpers/constants/inputFields'

const SignUp = ({ toggleSignIn }) => {
   const [showPassword, setShowPassword] = useState(false)
   const [formSubmitted, setFormSubmitted] = useState(false)
   const { values, handleSubmit, handleChange, errors, setValues } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         error: '',
      },
      validationSchema: validationAuthSignUp,
   })
   const handleSignUpClick = () => {
      console.log('Данные формы:', values)
      if (
         !values.firstName ||
         !values.lastName ||
         !values.email ||
         !values.password
      ) {
         setValues({ ...values })
      } else {
         setValues({ ...values, error: '' })
         setFormSubmitted(true)
      }
   }

   const togglePassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword)
   }
   const errorMessages = formSubmitted
      ? []
      : Object.values(errors).filter(Boolean)

   return (
      <Background>
         <SignInForm onSubmit={handleSubmit}>
            <IconStyled>
               <CloseIcon />
            </IconStyled>
            <MainContainer>
               <StyledLayer />
               <Title>Create an Account</Title>
               {inputFields.map((inputField) => (
                  <StyledInput
                     key={inputField.name}
                     label={inputField.label}
                     name={inputField.name}
                     type={
                        inputField.name === 'password' && showPassword
                           ? 'text'
                           : inputField.type
                     }
                     value={values[inputField.name]}
                     onChange={handleChange}
                     error={!!errors[inputField.name]}
                     InputProps={
                        inputField.name === 'password'
                           ? {
                                endAdornment: (
                                   <InputAdornment position="end">
                                      {showPassword ? (
                                         <Eye onClick={togglePassword} />
                                      ) : (
                                         <EyeClosed onClick={togglePassword} />
                                      )}
                                   </InputAdornment>
                                ),
                             }
                           : null
                     }
                  />
               ))}

               {errorMessages.length > 0 && (
                  <ErrorMessage>
                     {`Incorrect ${errorMessages.join(', ')}`}
                     <ErrorIcon />
                  </ErrorMessage>
               )}
               <StyledButton
                  onClick={handleSignUpClick}
                  type="submit"
                  fullWidth="fullWidth"
                  defaultStyle="#3A10E5"
                  hoverStyle="#3A10E5E5"
               >
                  SIGN UP
               </StyledButton>
               <ButtonContainer defaultStyle="white" hoverStyle="#d9d6d6">
                  <GoogleIcon />
                  sign up with google
               </ButtonContainer>
               <StyledText>
                  ALREADY HAVE AN ACCOUNT?
                  <StyledRegister onClick={toggleSignIn}>LOG IN</StyledRegister>
               </StyledText>
            </MainContainer>
         </SignInForm>
      </Background>
   )
}
export default SignUp

const Background = styled(Grid)(() => ({
   background: 'linear-gradient(90.76deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   padding: '40px',
}))
const ErrorMessage = styled(Typography)(() => ({
   color: 'red',
   display: 'flex',
   justifyContent: 'center',
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

const StyledInput = styled(Input)(() => ({
   height: '52px',
   marginBottom: '20px',
}))
const StyledButton = styled(Button)(() => ({
   marginTop: '30px',
   fontFamily: 'Poppins',
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
const ErrorIcon = styled(Error)(() => ({
   marginLeft: '5px',
   marginTop: '2px',
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
