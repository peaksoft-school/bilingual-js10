import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstanceS3File } from '../../config/axiosInsatanceS3File'
import { axiosInstance } from '../../config/axiosInstance'

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

export const TypeWhatYouHearThunk = createAsyncThunk(
   'TypeWhatYouHearThunk',
   async (data, { dispatch }) => {
      try {
         const link = dispatch(postFileThunk({ file: data.audioFile }))
         console.log(link.link, 'kdjfklsjfsafj')
         await axiosInstance.post(
            `/questions?testId=1&questionType=TYPE_WHAT_YOU_HEAR`,
            {
               title: data.title,
               duration: data.duration,
               attempts: data.numberOffReplays,
               correctAnswer: data.correctAnswer,
               fileUrl: link,
            }
         )
      } catch (error) {
         console.log(error)
      }
   }
)
