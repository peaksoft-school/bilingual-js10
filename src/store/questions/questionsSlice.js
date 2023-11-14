import { createSlice } from '@reduxjs/toolkit'
import { postFileThunk } from './questionsThunk'

const initialState = {
   link: '',
}

export const questionsSlice = createSlice({
   name: 'questions',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(postFileThunk.fulfilled, (state, action) => {
         state.link = action.payload.link
      })
   },
})
