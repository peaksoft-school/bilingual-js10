import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const postHighlightAnswer = createAsyncThunk(
   'post/highlightAnswer',
   async (result, { rejectWithValue }) => {
      try {
         const response = axiosInstance.post(
            `/questions?testId=1&questionType=HIGHLIGHT_THE_ANSWER`,
            {
               statement: result.statement,
               correctAnswer: result.correctAnswer,
               passage: result.passage,
            }
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
