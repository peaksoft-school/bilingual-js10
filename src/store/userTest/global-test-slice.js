import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   tests: [],
   options: [],
}

export const globalTestSlice = createSlice({
   name: 'globalTestSlice',
   initialState,
   reducers: {
      addTest: (state, action) => {
         state.tests = [...state.tests, action.payload]
      },
      addOptions: (state, action) => {
         state.options = [...state.options, action.payload]
      },
   },
})

export const { addTest, addOptions } = globalTestSlice.actions
