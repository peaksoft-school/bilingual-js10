import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const postHighlightAnswer = createAsyncThunk(
   'post/highlightAnswer',
   async (result, { rejectWithValue, getState }) => {
      try {
         const testId = getState().createTestSlice?.testID
         const response = axiosInstance.post(
            `/questions?testId=${testId}&questionType=HIGHLIGHT_THE_ANSWER`,
            result
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postRecordStatement = createAsyncThunk(
   'post/statement',
   async (result, { rejectWithValue, getState }) => {
      try {
         const testId = getState().createTestSlice?.testID
         const response = axiosInstance.post(
            `/questions?testId=${testId}&questionType=RECORD_SAYING_STATEMENT`,
            {
               statement: result.statement,
            }
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
