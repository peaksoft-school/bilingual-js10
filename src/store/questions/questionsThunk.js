import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const postRecordStatement = createAsyncThunk(
   'post/statement',
   async (values, { rejectWithValue, getState }) => {
      try {
         console.log(values)
         const testId = getState().createTestSlice?.testID
         const response = axiosInstance.post(
            `/questions?testId=${testId}&questionType=RECORD_SAYING_STATEMENT`,
            {
               statement: values,
            }
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
