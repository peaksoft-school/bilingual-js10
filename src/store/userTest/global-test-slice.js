import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   tests: [],
}

export const globalTestSlice = createSlice({
   name: 'globalTestSlice',
   initialState,
   reducers: {
      addTest: (state, action) => {
         state.tests = [...state.tests, action.payload]
      },
   },
})

export const { addTest } = globalTestSlice.actions
