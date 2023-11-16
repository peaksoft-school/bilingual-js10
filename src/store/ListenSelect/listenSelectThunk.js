import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosFile } from '../../config/axiosfile'
import { axiosInstance } from '../../config/axiosInstance'

// const getFiles = createAsyncThunk('files/getFiles', async () => {
//    try {
//       const response = await axiosFile.get(
//          '/api/questions/getOptionsByQuestionId?questionId=1'
//       )
//       setOptions(response.data)
//    } catch (error) {
//       console.error(error)
//    }
// })
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
   async (file, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('file', file)
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
   async ({ values, file }, { rejectWithValue, dispatch }) => {
      try {
         const testId = 8
         const link = await dispatch(postFileS3(file))
         const response = await axiosInstance.post(
            `/api/questions?testId=${testId}&questionType=LISTEN_AND_SELECT_ENGLISH_WORDS`,
            {
               title: values.titleValues,
               fileUrl: values.fileUrl,
               options: [
                  {
                     title: values.titleValues,
                     isTrue: values.isTrue,
                     audioUrl: link,
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
