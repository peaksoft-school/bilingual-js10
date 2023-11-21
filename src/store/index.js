import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import s3fileSlice from './s3file/s3fileSlice'
// import { ListenSelectSlice } from './listenSelect/ListenSelectSlice'
import { createTestSlice } from './admin/createTestSlice'
import { questionSlice } from './admin/QuestionsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [s3fileSlice.name]: s3fileSlice.reducer,

      // [ListenSelectSlice.name]: ListenSelectSlice.reducer,
      [createTestSlice.name]: createTestSlice.reducer,
      [questionSlice.name]: questionSlice.reducer,
   },
})
