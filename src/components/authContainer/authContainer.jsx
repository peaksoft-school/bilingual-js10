import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Grid, Typography, InputAdornment, styled } from '@mui/material'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'
import { ErrorIcon, Eye, EyeClosed, Google, Layer, System } from '../../assets'
import { InputRadio } from '../UI/InputRadio'

const AuthContainer = ({
   title,
   formFields,
   validationSchema,
   onSubmit,
   toggleLinkText,
   toggleLinkClick,
   googleButtonText,
}) => {
   const [showPassword, setShowPassword] = useState(false)
   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: formFields.initialValues,
      validationSchema,
      onSubmit,
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
               <Title>{title}</Title>
               {formFields.fields.map((field) => (
                  <StyledInput
                     key={field.name}
                     label={field.label}
                     name={field.name}
                     type={
                        field.type === 'password' && showPassword
                           ? 'text'
                           : field.type
                     }
                     value={values[field.name]}
                     onChange={handleChange}
                     error={!!errors[field.name]}
                     InputProps={
                        field.type === 'password'
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
               {title === 'Sign in' && (
                  <RememberContainer>
                     <InputRadio variant="CHECKED" />
                     <Remember>To remember me</Remember>
                  </RememberContainer>
               )}
               {errorMessages.length > 0 && (
                  <ErrorMessage>
                     {`Incorrect ${errorMessages.join(', ')}`}
                     <Error />
                  </ErrorMessage>
               )}
               <StyledButton
                  onClick={handleSubmit}
                  type="submit"
                  fullWidth="fullWidth"
                  defaultStyle="#3A10E5"
                  hoverStyle="#3A10E5E5"
               >
                  {title.toUpperCase()}
               </StyledButton>
               <ButtonContainer defaultStyle="white" hoverStyle="#d9d6d6">
                  <GoogleIcon />
                  {` ${googleButtonText.toLowerCase()}`}
               </ButtonContainer>

               <StyledText>
                  {toggleLinkText === 'Register'
                     ? 'ALREADY HAVE AN ACCOUNT?'
                     : "DON'T HAVE AN ACCOUNT?"}
                  {/* <StyledRegister onClick={toggleLinkClick}>
                     {toggleLinkText === ' Register' ? 'LOG IN' : 'REGISTER'}
                  </StyledRegister> */}
                  <StyledRegister
                     onClick={() =>
                        toggleLinkText === 'Register'
                           ? toggleLinkClick()
                           : toggleLinkClick('Register')
                     }
                  >
                     {toggleLinkText === ' Register' ? 'LOG IN' : 'REGISTER'}
                  </StyledRegister>
               </StyledText>
            </MainContainer>
         </SignInForm>
      </Background>
   )
}

export default AuthContainer

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
const RememberContainer = styled(Grid)(() => ({
   display: 'flex',
   gap: '5px',
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
   letterSpacing: '0.02em',
   marginBottom: '32px',
}))

const Remember = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '0px',
   color: '#757575',
   marginTop: '13px',
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
const Error = styled(ErrorIcon)(() => ({
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
