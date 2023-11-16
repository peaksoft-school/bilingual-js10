import { createSlice } from '@reduxjs/toolkit'
import { postFileS3 } from './listenSelectThunk'

const initialState = {
   file: '',
   //  options: [],
}

const listenSelectSlice = createSlice({
   name: 'file',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(postFileS3.fulfilled, (state, action) => {
         state.file = action.payload
      })
      // builder.addCase(postListenSelect.fulfilled, (state, action) => {
      //    state.options = action.payload
      // })
   },
})

export default listenSelectSlice
