import { createSlice } from '@reduxjs/toolkit'

export const answersSlice = createSlice({
   name: 'answer',
   initialState: {
      testId: null,
      userId: null,
      questionId: null,
      questionType: '',
   },
   reducers: {
      addUserId: (state, action) => {
         state.userId = action.payload
      },
      addTestId: (state, action) => {
         state.testId = action.payload
      },
      addQuestionId: (state, action) => {
         state.questionId = action.payload
      },
      addQuestionType: (state, action) => {
         state.questionType = action.payload
      },
   },
})
