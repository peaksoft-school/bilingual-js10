import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { validationAuthSignIn } from '../../utils/helpers/validate/authValidate'
import AuthContainer from '../authContainer/authContainer'
import { users } from '../../utils/constants/constants'
import { login } from '../../store/auth/authSlice'

const SignIn = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleSignInClick = (values) => {
      const user = users.find(
         (user) =>
            user.email === values.email && user.password === values.password
      )

      if (user) {
         const { email, role } = user
         const token = 'your_token_here'
         const data = { email, role, token }

         localStorage.setItem('userData', JSON.stringify(data))

         dispatch(login({ data, navigate }))
      } else {
         console.log('Неверный логин или пароль')
      }
   }

   const handleRegisterClick = () => {
      navigate('/signup')
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
         toggleLinkClick={handleRegisterClick}
         toggleLinkText="Register"
         googleButtonText="Sign In with Google"
      />
   )
}

export default SignIn
