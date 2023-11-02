import { createSlice } from '@reduxjs/toolkit'
import { routes } from '../../utils/constants/constants'

const initialState = {
   isAuth: null,
   email: null,
   token: null,
   role: null,
}

export const authSlice = createSlice({
   name: 'authLogin',
   initialState,
   reducers: {
      login: (state, { payload: { data, navigate } }) => {
         const newState = state
         newState.email = data.email
         newState.role = data.role
         newState.token = data.token
         newState.isAuth = true
         navigate(routes[data.role].path)
         return newState
      },
      logout: () => {
         const newState = initialState
         return newState
      },
   },
})

export const { login, logout } = authSlice.actions
