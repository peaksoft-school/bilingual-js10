import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { questionsSlice } from './questions/questionsSlice'
// import { ListenSelectSlice } from './listenSelect/ListenSelectSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      // [ListenSelectSlice.name]: ListenSelectSlice.reducer,
      [questionsSlice.name]: questionsSlice.reducer,
   },
})
