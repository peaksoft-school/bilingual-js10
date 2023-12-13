import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   tests: [],
   questions: null,
   testComponent: [],
   currentComponent: 0,
}
export const globalTestSlice = createSlice({
   name: 'globalTestSlice',
   initialState,
   reducers: {
      addTest: (state, action) => {
         state.tests = [...state.tests, action.payload]
      },
      addTestComponent: (state, action) => {
         state.testComponent = action.payload
      },
      addCurrentComponent: (state, action) => {
         state.currentComponent += action.payload
      },
      addQuestions: (state, action) => {
         state.questions = action.payload
      },
   },
})
export const { addTest } = globalTestSlice.actions
