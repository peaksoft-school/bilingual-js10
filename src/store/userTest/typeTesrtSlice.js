import { createSlice } from '@reduxjs/toolkit'

const typeTest = createSlice({
   name: 'typeTest',
   initialState: {
      test: [],
      testsArr: [],
      testID: null,
   },
   reducers: {
      addTest: (state, action) => {
         state.test = action.payload
      },
      addTestsArr: (state, action) => {
         state.testsArr = action.payload
      },
      setIDToTest: (state, action) => {
         console.log('action', action.payload)
         state.testID = action.payload
      },
   },
})

export { typeTest }
