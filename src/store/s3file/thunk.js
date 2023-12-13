import { createAsyncThunk } from '@reduxjs/toolkit'
import { fileAxiosInstance } from '../../config/fileAxiosInstanse'
import { axiosInstance } from '../../config/axiosInstance'
import Notify from '../../components/UI/Notifay'

export const postImageS3 = createAsyncThunk(
   'post/image',
   async (fil, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', fil)
         const response = await fileAxiosInstance.post('/s3file', formData, {})
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
   async ({ data, selectedImage, testID }, { dispatch, getState }) => {
      try {
         await dispatch(postImageS3(selectedImage))
         Notify(
            {
               sucessTitle: 'Question saved ',
               successMessage: 'Successfully saved',
               errorTitle: 'Error',
            },
            axiosInstance.post(
               `/questions?testId=${testID}&questionType=DESCRIBE_IMAGE`,
               {
                  title: data.title,
                  duration: data.duration,
                  correctAnswer: data.correctAnswer,
                  fileUrl: getState().file.file,
               }
            )
         )
      } catch (error) {
         console.log(error)
      }
   }
)
