import { createSlice } from '@reduxjs/toolkit'
import { ROUTES, USER_KEY } from '../../utils/constants/constants'

const initialState = {
   isAuthorized: false,
   token: '',
   email: '',
   role: '',
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, { payload: { data, navigate } }) => {
         state.token = data.token
         state.role = data.role
         state.email = data.email
         state.isAuthorized = true
         navigate(ROUTES[data.role].index)
      },

      logout: () => {
         localStorage.removeItem(USER_KEY.BILINGUAL_USER_KEY)
         const newState = initialState
         return newState
      },
   },
})

export const authActions = authSlice.actions
