import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstanceS3File } from '../../config/axiosInsatanceS3File'

export const postFileThunk = createAsyncThunk(
   'postFileThunk',
   async function ({ file }, { rejectWithValue }) {
      try {
         const formData = new FormData()
         formData.append('multipartFile', file)
         const data = await axiosInstanceS3File.post('/s3file', formData)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
