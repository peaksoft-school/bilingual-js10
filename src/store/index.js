import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { questionsSlice } from './questions/questionsSlice'
import s3fileSlice from './s3file/s3fileSlice'
import { createTestSlice } from './admin/createTestSlice'
import { questionSlice } from './admin/QuestionsSlice'
import { globalTestSlice } from './userTest/global-test-slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [s3fileSlice.name]: s3fileSlice.reducer,
      [questionsSlice.name]: questionsSlice.reducer,
      [createTestSlice.name]: createTestSlice.reducer,
      [questionSlice.name]: questionSlice.reducer,
      [globalTestSlice.name]: globalTestSlice.reducer,
   },
})
