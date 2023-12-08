import axios from 'axios'
import { store } from '../store/index'

export const BASE_URL = 'http://billingual.peaksoftprojects.com/api'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

axiosInstance.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      const { token } = store.getState().auth

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
