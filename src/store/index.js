import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import listenSelectSlice from './ListenSelect/listenSelectSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [listenSelectSlice.name]: listenSelectSlice.reducer,
   },
})
