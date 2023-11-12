import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { createTestSlice } from './admin/createTestSlice'
import { questionSlice } from './admin/QuestionsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [createTestSlice.name]: createTestSlice.reducer,
      [questionSlice.name]: questionSlice.reducer,
   },
})
