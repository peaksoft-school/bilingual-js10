import { createAsyncThunk } from '@reduxjs/toolkit'
import { fileAxiosInstance } from '../../config/fileAxiosInstanse'
import { axiosInstance } from '../../config/axiosInstance'

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
export const updateQuestion = createAsyncThunk(
   'updateQuestion',
   async function (data, { getState, dispatch }) {
      try {
         const { questionID } = getState().questions
         const link = await dispatch(postFileThunk({ file: data.fileUrl }))
         await axiosInstance.put(`/questions?questionId=${questionID}`, {
            ...data,
            fileUrl:
               typeof data.fileUrl === 'string'
                  ? data.fileUrl
                  : link.payload.data.link,
         })
      } catch (error) {
         console.log(error)
      }
   }
)
export const deleteOption = createAsyncThunk(
   'deleteOption',
   async function (id) {
      try {
         await axiosInstance.delete(`/questions/deleteOption?optionId=${id}`)
      } catch (error) {
         console.log(error)
      }
   }
)

export const postOption = createAsyncThunk(
   'postOption',
   async (option, { getState }) => {
      try {
         const { questionID } = getState().questions
         await axiosInstance.post(
            `/questions/saveOption?questionId=${questionID}`,
            option
         )
      } catch (error) {
         console.log(error)
      }
   }
)

export const optionEnable = createAsyncThunk(
   'optionEnable',
   async function ({ e, id, boolean }) {
      try {
         await axiosInstance.put(
            `/questions/updateOption?optionId=${id}`,
            e ? e.target.checked : boolean
         )
      } catch (error) {
         console.log(error)
      }
   }
)

export const getQuestionThunk = createAsyncThunk(
   'getQuestionThunk',
   async (_, { rejectWithValue, getState }) => {
      try {
         const { questionID } = getState().questions
         const response = await axiosInstance.get(
            `/questions?questionId=${questionID}`
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getOptionByQuestionId = createAsyncThunk(
   'getOptionByQuestionId',
   async (_, { rejectWithValue, getState }) => {
      try {
         const { questionID } = getState().questions
         const response = await axiosInstance.get(
            `/questions/getOptionsByQuestionId?questionId=${questionID}`
         )
         return response
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
