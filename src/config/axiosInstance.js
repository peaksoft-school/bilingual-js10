import axios from 'axios'
import { store } from '../store/index'

export const BASE_URL = 'http://billingual.peaksoftprojects.com/api'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

const token =
   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDI0NjczNzYsImlhdCI6MTcwMTg2MjU3NiwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.gv__syrAo3AM08Wp0KvGAx-vWarfZX-REM7yzNU_770'

axiosInstance.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      // const { token } = store.getState().auth

      if (token) {
         configUpdate.headers.Authorization = `Bearer ${token}`
      }

      return configUpdate
   },
   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
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
