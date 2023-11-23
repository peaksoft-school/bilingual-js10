import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { fileAxiosInstance } from '../../config/fileAxiosInstanse'

export const postFileS3 = createAsyncThunk(
   'file/postFileS3',
   async (file, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', file)
         const response = await fileAxiosInstance.post('/s3file', formData)
         return response
      } catch (error) {
         return rejectWithValue(
            error.response ? error.response.data : error.message
         )
      }
   }
)

export const postListenSelect = createAsyncThunk(
   'File/audio',
   async ({ formik, testID, title, questionDuration }, { rejectWithValue }) => {
      try {
         await axiosInstance.post(
            `/questions?testId=${testID}&questionType=LISTEN_AND_SELECT_ENGLISH_WORDS`,
            {
               title,
               questionDuration,
               options: formik.values.options.map((el) => {
                  return {
                     title: el.title,
                     isTrue: el.isTrue,
                     audioUrl: el.audioUrl,
                  }
               }),
            }
         )
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
