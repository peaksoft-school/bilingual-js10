import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosFile } from '../../config/axiosfile'
import { axiosInstance } from '../../config/axiosInstance'

// export const deleteQuestion = createAsyncThunk(
//    'listenSelectSlice/deleteQuestion',
//    async (questionId, { rejectWithValue, dispatch }) => {
//       try {
//          Notifay(
//             {
//                sucessTitle: 'File saved ',
//                successMessage: 'Successfully saved',
//                errorTitle: 'Error',
//             },
//             axiosInstance.delete(`/questions?questionId=${questionId}`)
//          )
//          setTimeout(() => {
//             dispatch(getTestThunk())
//          }, 400)
//       } catch (error) {
//          rejectWithValue(error)
//       }
//    }
// )
export const postFileS3 = createAsyncThunk(
   'file/postFileS3',
   async ({ rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append()
         const response = await axiosFile.post('/api/s3file', formData)
         const { data } = response
         return data
      } catch (error) {
         return rejectWithValue(
            error.response ? error.response.data : error.message
         )
      }
   }
)

export const postListenSelect = createAsyncThunk(
   'File/audio',
   async (_, { rejectWithValue }) => {
      try {
         const testId = 8
         // const link = await dispatch(postFileS3(file))
         const response = await axiosInstance.post(
            `/api/questions?testId=${testId}&questionType=LISTEN_AND_SELECT_ENGLISH_WORDS`,
            {
               options: [
                  {
                     title: 'string',
                     isTrue: true,
                     audioUrl: 'string',
                  },
               ],
            }
         )
         const { data } = response
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
