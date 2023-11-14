import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosFile } from '../../config/axiosFile'
import { axiosInstance } from '../../config/axiosInstance'

export const postImageS3 = createAsyncThunk(
   'post/image',
   async (fil, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', fil)
         const response = await axiosFile.post('/s3file', formData, {})
         const data = Object.values(response.data)
         return data[0]
      } catch (error) {
         return rejectWithValue(
            error.response ? error.response.data : error.message
         )
      }
   }
)

export const postDescribeImage = createAsyncThunk(
   'post/img',
   async (
      { selectedImage, values },
      { rejectWithValue, dispatch, getState }
   ) => {
      try {
         await dispatch(postImageS3(selectedImage))
         await axiosInstance.post(
            '/questions?testId=1&questionType=DESCRIBE_IMAGE',
            {
               correctAnswer: values,
               fileUrl: getState().file.file,
            }
         )
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
