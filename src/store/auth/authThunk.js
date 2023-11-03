// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { USER_KEY, users } from '../../utils/constants/constants'

// const authLogin = ({ email, password }) => {
//    const valueUser = users.find(
//       (user) => user.email === email && user.password === password
//    )
//    return valueUser
// }

// export const loginAsync = createAsyncThunk(
//    'loginAsync/login',
//    async ({ aboutUser, navigate, login }, { rejectWithValue, dispatch }) => {
//       try {
//          const data = authLogin(aboutUser)
//          localStorage.setItem(USER_KEY, JSON.stringify(data))
//          return dispatch(login({ data, navigate }))
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )
