import axios from 'axios'
import { store } from '../store'

export const BASE_URL =
   'http://ec2-18-153-48-98.eu-central-1.compute.amazonaws.com'

export const fileAxiosInstanse = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'multipart/form-data',
   },
})

fileAxiosInstanse.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      // const { token } = store.getState().auth
      const token =
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDAxOTk2NjMsImlhdCI6MTY5OTU5NDg2MywidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.0XOjJxSSX3nKUnj97IwxgUGoXjNHAi4YLnZY7wPTPew'

      if (token) {
         configUpdate.headers.Authorization = `Bearer ${token}`
      }
      return configUpdate
   },
   (error) => {
      return Promise.reject(error)
   }
)
fileAxiosInstanse.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response?.status === 401) {
         store.dispatch(postFiles())
         throw new Error('401 unauthotized')
      }
      return Promise.reject(error)
   }
)
