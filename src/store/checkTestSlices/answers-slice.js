import { createSlice } from '@reduxjs/toolkit'

export const answersSlice = createSlice({
   name: 'answer',
   initialState: {
      userData: {},
   },
   reducers: {
      addUserData: (state, { payload }) => {
         state.userData = payload
      },
   },
})
