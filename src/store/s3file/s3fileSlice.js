import { createSlice } from '@reduxjs/toolkit'
import { postImageS3 } from './thunk'

const initialState = {
   file: '',
}

const s3fileSlice = createSlice({
   name: 'file',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(postImageS3.fulfilled, (state, action) => {
         state.file = action.payload
      })
   },
})

export default s3fileSlice
