import { createAsyncThunk } from '@reduxjs/toolkit'
import { fileAxiosInstance } from '../../config/fileAxiosInstanse'
import { axiosInstance } from '../../config/axiosInstance'
import Notify from '../../components/UI/Notifay'

export const postFileThunk = createAsyncThunk(
   'postFileThunk',
   async function ({ file }, { rejectWithValue }) {
      try {
         const formData = new FormData()
         formData.append('multipartFile', file)
         const data = await fileAxiosInstance.post('/s3file', formData)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const TypeWhatYouHearThunk = createAsyncThunk(
   'TypeWhatYouHearThunk',
   async (data, { dispatch }) => {
      const fileUrl = await dispatch(postFileThunk({ file: data.audioFile }))
      Notify(
         {
            sucessTitle: 'Question saved ',
            successMessage: 'Successfully saved',
            errorTitle: 'Error',
         },
         axiosInstance.post(
            `/questions?testId=${data.testID}&questionType=TYPE_WHAT_YOU_HEAR`,
            {
               title: data.title,
               duration: data.duration,
               attempts: data.numberOffReplays,
               correctAnswer: data.correctAnswer,
               fileUrl: fileUrl.payload.data.link,
            }
         )
      )
   }
)
