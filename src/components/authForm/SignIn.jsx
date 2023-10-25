import React from 'react'
import { validationAuthSignIn } from '../../utils/helpers/validate/authValidate'
import AuthContainer from '../authContainer/authContainer'

const SignIn = ({ toggleSignUp }) => {
   const handleSignInClick = (values) => {
      console.log('Данные формы:', values)
   }

   return (
      <AuthContainer
         title="Sign in"
         formFields={{
            initialValues: {
               email: '',
               password: '',
            },
            fields: [
               { name: 'email', label: 'Email', type: 'text' },
               { name: 'password', label: 'Password', type: 'password' },
            ],
         }}
         validationSchema={validationAuthSignIn}
         onSubmit={handleSignInClick}
         toggleLinkText="Register"
         toggleLinkClick={toggleSignUp}
         googleButtonText="Sign In with Google"
      />
   )
}

export default SignIn
