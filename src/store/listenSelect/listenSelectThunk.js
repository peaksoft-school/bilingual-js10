import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { fileAxiosInstanse } from '../../config/fileAxiosInstance'
import { axiosInstance } from '../../config/axiosInstance'

const getFiles = createAsyncThunk('files/getFiles', async () => {
   try {
      const response = await fileAxiosInstanse.get(
         '/api/tests/getById?testId=23'
      )
      setOptions(response.data)
   } catch (error) {
      console.error(error)
   }
})
dispatch = useDispatch()

export const fetchFile = createAsyncThunk('files/fetchFile', async () => {
   try {
      await fileAxiosInstanse.post('/api/s3file', {
         link: formik.values.fileUrl,
      })
   } catch (error) {
      console.log(error)
   }
})

export const SaveHandlers = createAsyncThunk(
   'files/SaveHandlers',
   async ({ rejectWithValue, dispatch, formik }) => {
      dispatch(fetchFile())
      dispatch(getFiles)
      try {
         await axiosInstance.post(
            '/api/questions?testId=23&questionType=LISTEN_AND_SELECT_ENGLISH_WORDS',
            {
               options: formik.values.options,
               fileUrl: formik.values.fileUrl,
            }
         )
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
