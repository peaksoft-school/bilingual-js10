import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import Notify from '../../components/UI/Notifay'

export const postHighlightAnswer = createAsyncThunk(
   'post/highlightAnswer',
   async (result, { getState }) => {
      try {
         const testId = getState().createTestSlice?.testID
         Notify(
            {
               sucessTitle: 'Question saved ',
               successMessage: 'Successfully saved',
               errorTitle: 'Error',
            },
            axiosInstance.post(
               `/questions?testId=${testId}&questionType=HIGHLIGHT_THE_ANSWER`,
               result
            )
         )
      } catch (error) {
         console.log(error)
      }
   }
)

export const postRecordStatement = createAsyncThunk(
   'post/statement',
   async (result, { getState }) => {
      try {
         const testId = getState().createTestSlice?.testID
         Notify(
            {
               sucessTitle: 'Question saved ',
               successMessage: 'Successfully saved',
               errorTitle: 'Error',
            },
            axiosInstance.post(
               `/questions?testId=${testId}&questionType=RECORD_SAYING_STATEMENT`,
               result
            )
         )
      } catch (error) {
         console.log(error)
      }
   }
)
