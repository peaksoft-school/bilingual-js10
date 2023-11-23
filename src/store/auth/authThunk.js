import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../api/authService'
import { USER_KEY } from '../../utils/constants/constants'
import { authActions } from './authSlice'
import { axiosInstance } from '../../config/axiosInstance'
import Notify from '../../components/UI/Notifay'

export const signIn = createAsyncThunk(
   'auth/signIn',
   async ({ userData, navigate, login }, { rejectWithValue, dispatch }) => {
      try {
         const signInPromise = authService.signIn(userData)
         Notify(
            {
               successTitle: 'Logged in!',
               successMessage: 'Successfully logged in!',
               errorTitle: 'Error',
            },
            signInPromise
         )
         const { data } = await signInPromise
         localStorage.setItem(USER_KEY.BILINGUAL_USER_KEY, JSON.stringify(data))
         dispatch(login({ data, navigate }))
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data.message)
      }
   }
)

export const signUp = createAsyncThunk(
   'auth/signUp',
   async ({ userData, navigate, login }, { rejectWithValue, dispatch }) => {
      try {
         const signUpPromise = authService.signUp(userData)
         Notify(
            {
               successTitle: 'You are registered!',
               successMessage: 'Successfully registered!',
               errorTitle: 'Error',
            },
            signUpPromise
         )
         const { data } = await signUpPromise
         localStorage.setItem(USER_KEY.BILINGUAL_USER_KEY, JSON.stringify(data))
         dispatch(login({ data, navigate }))
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data.message)
      }
   }
)
export const authWithGoogle = createAsyncThunk(
   'auth/signInWithGoogle',
   async ({ token, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const authWithGooglePromise = axiosInstance.post(
            '/auth/signInWithGoogle',
            null,
            {
               params: { token },
            }
         )
         Notify(
            {
               successTitle: 'Sign In with Google',
               successMessage: 'Successfully signed in with Google',
               errorTitle: 'Error',
            },
            authWithGooglePromise
         )
         const { data } = await authWithGooglePromise
         localStorage.setItem(USER_KEY.BILINGUAL_USER_KEY, JSON.stringify(data))
         return dispatch(authActions.login({ data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
