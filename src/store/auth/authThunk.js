import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../api/authService'
import { USER_KEY } from '../../utils/constants/constants'
import { authActions } from './authSlice'
import { axiosInstance } from '../../config/axiosInstance'

export const signIn = createAsyncThunk(
   'auth/signIn',
   async ({ userData, navigate, login }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await authService.signIn(userData)
         localStorage.setItem(USER_KEY.BILINGUAL_USER_KEY, JSON.stringify(data))
         dispatch(login({ data, navigate }))
         // Notify({
         //    sucessTitle: 'File saved ',
         //    successMessage: 'Successfully saved',
         //    errorTitle: 'Error',
         // })
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
         const { data } = await authService.signUp(userData)
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
         const { data } = await axiosInstance.post(
            '/auth/signInWithGoogle',
            null,
            {
               params: { token },
            }
         )
         localStorage.setItem(USER_KEY.BILINGUAL_USER_KEY, JSON.stringify(data))
         return dispatch(authActions.login({ data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
