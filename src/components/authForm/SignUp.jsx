import React from 'react'
import { useNavigate } from 'react-router-dom'
import { validationAuthSignUp } from '../../utils/helpers/validate/authValidate'
import AuthContainer from '../authContainer/authContainer'

const SignUp = () => {
   const navigate = useNavigate()
   const handleSignUpClick = (values) => {
      console.log('Данные формы:', values)
   }
   const handleRegisterClick = () => {
      navigate('/signin')
   }
   return (
      <AuthContainer
         title="Sign Up"
         formFields={{
            initialValues: {
               firstName: '',
               lastName: '',
               email: '',
               password: '',
            },
            fields: [
               { name: 'firstName', label: 'First Name', type: 'text' },
               { name: 'lastName', label: 'Last Name', type: 'text' },
               { name: 'email', label: 'Email', type: 'text' },
               { name: 'password', label: 'Password', type: 'password' },
            ],
         }}
         validationSchema={validationAuthSignUp}
         onSubmit={handleSignUpClick}
         toggleLinkText="LOG IN"
         toggleLinkClick={handleRegisterClick}
         googleButtonText="Sign Up with Google"
      />
   )
}

export default SignUp
