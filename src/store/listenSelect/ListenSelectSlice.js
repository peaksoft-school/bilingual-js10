import { createSlice } from '@reduxjs/toolkit'
import { SaveHandlers, fetchFile } from './listenSelectThunk'

const initialState = {
   options: [],
   fileId: null,
}

export const ListenSelectSlice = createSlice({
   name: 'files',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchFile, (state, action) => {
            state.options = action.payload
         })
         .addCase(SaveHandlers, (state, action) => {
            state.fileId = action.payload
         })
   },
})
