import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   tests: [],
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
   },
})
export const { addTest } = globalTestSlice.actions
