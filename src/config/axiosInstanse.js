import axios from 'axios'
import { store } from '../store'
import { authActions } from '../store/auth/authSlice'

export const BASE_URL =
   'http://ec2-18-153-48-98.eu-central-1.compute.amazonaws.com'

export const instanse = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

instanse.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      const { token } = store.getState().auth.token
      if (token) {
         configUpdate.headers.Authorization = `Bearer ${token}`
      }

      return configUpdate
   },
   (error) => {
      return Promise.reject(error)
   }
)

instanse.interceptors.response.use(
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
