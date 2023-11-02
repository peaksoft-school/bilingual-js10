import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_KEY, users } from '../../utils/constants/constants'

const authLogin = ({ email, password }) => {
   const currentUser = users.find(
      (user) => user.email === email && user.password === password
   )
   return currentUser
}

export const loginQuery = createAsyncThunk(
   'authorization/login',
   async ({ userInfo, navigate, login }, { rejectWithValue, dispatch }) => {
      try {
         const data = authLogin(userInfo)
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         return dispatch(login({ data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
