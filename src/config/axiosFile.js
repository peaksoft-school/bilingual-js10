import axios from 'axios'
import { store } from '../store'

export const BASE_URL = 'http://billingual.peaksoftprojects.com/api'

export const axiosFile = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'multipart/form-data',
   },
})
axiosFile.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   //  const { token } = store.getState().authLogin
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDA4MjI4NzIsImlhdCI6MTcwMDIxODA3MiwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.I-P33u2JduakVCF-GljyCOLTJUWsr-pqqqGapw1i8g0'
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

axiosFile.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         store.dispatch(logoutAction())
      }
      return Promise.reject(error)
   }
)
