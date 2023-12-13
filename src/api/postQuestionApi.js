import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../config/axiosInstance'
import Notify from '../components/UI/Notifay'

const selectOptions = {
   'Select real English words': 'SELECT_REAL_ENGLISH_WORD',
   'Respond in at least N words': 'RESPOND_AT_LEAST_N_WORDS',
   'Select the main idea': 'SELECT_THE_MAIN_IDEA',
   'Select the best title': 'SELECT_THE_BEST_TITLE',
}

export const postQuestion = createAsyncThunk(
   'postQuestionThunk',
   async (data, { getState }) => {
      const { selectedOption } = getState().questions
      const { testID } = getState().createTestSlice
      try {
         Notify(
            {
               sucessTitle: 'Question saved ',
               successMessage: 'Successfully saved',
               errorTitle: 'Error',
            },
            axiosInstance.post(
               `/questions?testId=${testID}&questionType=${selectOptions[selectedOption]}`,
               data
            )
         )
      } catch (error) {
         console.log(error)
      }
   }
)
