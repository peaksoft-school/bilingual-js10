import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   tests: [],
}

export const globalTestSlice = createSlice({
   name: 'globalTestSlice',
   initialState,
   reducers: {
      addTest: (state, action) => {
         console.log(action.payload)
         state.tests = [...state.tests, action.payload]
      },
   },
})

export const { addTest } = globalTestSlice.actions
