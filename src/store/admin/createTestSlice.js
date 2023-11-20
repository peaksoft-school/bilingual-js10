import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   tests: [],
   updatedTestId: null,
   testID: null,
}

export const createTestSlice = createSlice({
   name: 'createTestSlice',
   initialState,
   reducers: {
      updatedTestId: (state, action) => {
         state.updatedTestId = action.payload
      },
      tests: (state, action) => {
         state.tests = action.payload
      },
      testID: (state, action) => {
         state.testID = action.payload
      },
   },
})

export const createTestActions = createTestSlice.actions
