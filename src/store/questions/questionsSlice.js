import { createSlice } from '@reduxjs/toolkit'
import { postFileThunk } from './questionsThunk'

const initialState = {
   questionDuration: 0,
   title: '',
   link: '',
   selectedOption: 'Select real English words',
   questionID: null,
   options: [],
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
      selectedOption: (state, action) => {
         state.selectedOption = action.payload
      },
      setQuestionID: (state, action) => {
         state.questionID = action.payload
      },
      addOption: (state, action) => {
         state.options.push(action.payload)
      },
   },
   extraReducers: (builder) => {
      builder.addCase(postFileThunk.fulfilled, (state, action) => {
         state.link = action.payload.link
      })
   },
})
