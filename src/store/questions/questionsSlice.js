import { createSlice } from '@reduxjs/toolkit'
import { postFileThunk } from './questionsThunk'

const initialState = {
   questionDuration: 0,
   title: '',
   link: '',
}

export const questionsSlice = createSlice({
   name: 'questions',
   initialState,
   reducers: {
      addTitle: (state, action) => {
         state.title = action.payload
      },
      addTime: (state, action) => {
         state.questionDuration = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(postFileThunk.fulfilled, (state, action) => {
         state.link = action.payload.link
      })
   },
})
