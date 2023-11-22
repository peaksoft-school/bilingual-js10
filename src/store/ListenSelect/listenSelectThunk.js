import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { fileAxiosInstance } from '../../config/fileAxiosInstanse'

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
   async (formik, { rejectWithValue }) => {
      try {
         const testId = 5
         const response = await axiosInstance.post(
            `/questions?testId=${testId}&questionType=LISTEN_AND_SELECT_ENGLISH_WORDS`,
            {
               options: formik.values.options.map((el) => {
                  return {
                     title: el.title,
                     isTrue: el.isTrue,
                     audioUrl: el.audioUrl,
                  }
               }),
            }
         )
         const { data } = response
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
