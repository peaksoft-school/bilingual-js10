import { createSlice } from '@reduxjs/toolkit'
import {
   getOptionByQuestionId,
   getQuestionThunk,
   postFileThunk,
} from './questionsThunk'

const initialState = {
   questionDuration: 0,
   title: '',
   link: '',
   selectedOption: 'Select real English words',
   questionID: null,
   options: [],
   question: {},
   titleValidate: false,
   durationValidate: false,
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
      titleValidate: (state, action) => {
         state.titleValidate = action.payload
      },
      durationValidate: (state, action) => {
         state.durationValidate = action.payload
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(postFileThunk.fulfilled, (state, action) => {
            state.link = action.payload.link
         })
         .addCase(getOptionByQuestionId.fulfilled, (state, action) => {
            state.options = action.payload.data
         })
         .addCase(getQuestionThunk.fulfilled, (state, action) => {
            state.question = action.payload
         })
   },
})
