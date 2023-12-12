import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import Notifay from '../../components/UI/Notifay'

const getTestThunk = createAsyncThunk('getTestThunk', async (testID) => {
   try {
      const response = await axiosInstance.get(
         `/tests/getById?testId=${testID}`
      )
      return response.data
   } catch (error) {
      return error
   }
})

export const deleteQuestion = createAsyncThunk(
   'questionSlice/deleteQuestion',
   async (questionId, { rejectWithValue }) => {
      try {
         Notifay(
            {
               sucessTitle: 'File deleted ',
               successMessage: 'Successfully deleted',
               errorTitle: 'Error',
            },
            axiosInstance.delete(`/questions?questionId=${questionId}`)
         )
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const questionSlice = createSlice({
   name: 'questionSlice',
   initialState: { questions: [], error: null, pending: false },
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getTestThunk.fulfilled, (state, action) => {
         const newState = {
            ...state,
            pending: false,
            error: null,
            questions: action.payload,
         }
         return newState
      })
   },
})

export { getTestThunk }
