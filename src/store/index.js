import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
<<<<<<< HEAD
import listenSelectSlice from './ListenSelect/listenSelectSlice'
=======
import { questionsSlice } from './questions/questionsSlice'
>>>>>>> 629122f9fe6ebe97865c9fd0dda2e3d6600b679b
import s3fileSlice from './s3file/s3fileSlice'
// import { ListenSelectSlice } from './listenSelect/ListenSelectSlice'
import { createTestSlice } from './admin/createTestSlice'
import { questionSlice } from './admin/QuestionsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [listenSelectSlice.name]: listenSelectSlice.reducer,
      [s3fileSlice.name]: s3fileSlice.reducer,
      // [ListenSelectSlice.name]: ListenSelectSlice.reducer,
      [questionsSlice.name]: questionsSlice.reducer,
      [createTestSlice.name]: createTestSlice.reducer,
      [questionSlice.name]: questionSlice.reducer,
   },
})
