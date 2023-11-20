import axios from 'axios'
import { store } from '../store/index'
import { authActions } from '../store/auth/authSlice'

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
      if (error?.code === 403) {
         store.dispatch(authActions.logout())
         throw new Error('Unauthotized!')
      }
      return Promise.reject(error)
   }
)
