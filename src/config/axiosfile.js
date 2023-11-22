import axios from 'axios'
import { store } from '../store'

export const BASE_URL =
   'http://ec2-18-153-48-98.eu-central-1.compute.amazonaws.com'

export const axiosFile = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'multipart/form-data',
   },
})

axiosFile.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      // const { token } = store.getState().auth
      const token =
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDA3MzQ4OTAsImlhdCI6MTcwMDEzMDA5MCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ._1ylq-GUus9mAuyGJfWqaS4GGoBpPFoP60qrVlCi8i8'
      if (token) {
         configUpdate.headers.Authorization = `Bearer ${token}`
      }
      return configUpdate
   },
   (error) => {
      return Promise.reject(error)
   }
)
axiosFile.interceptors.response.use(
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
