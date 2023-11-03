import { createSlice } from '@reduxjs/toolkit'
import { USER_KEY, routes } from '../../utils/constants/constants'

const initialState = {
   isAuth: null,
   email: null,
   token: null,
   role: false,
}
const storedUserData = localStorage.getItem(USER_KEY)
const storedUser = storedUserData ? JSON.parse(storedUserData) : null

const initialStateWithStoredData = {
   ...initialState,
   ...storedUser,
}
export const authSlice = createSlice({
   name: 'authLogin',
   initialState: initialStateWithStoredData,
   reducers: {
      login: (state, { payload: { data, navigate } }) => {
         localStorage.setItem(USER_KEY, JSON.stringify(data))
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

         localStorage.removeItem(USER_KEY)
         return newState
      },
   },
})

export const { login, logout } = authSlice.actions
