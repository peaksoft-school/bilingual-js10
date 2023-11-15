import axios from 'axios'
import { store } from '../store'

export const BASE_URL = 'http://billingual.peaksoftprojects.com/api'

export const axiosMyInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})
axiosMyInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   //  const { token } = store.getState().authLogin
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDA2NDQzODIsImlhdCI6MTcwMDAzOTU4MiwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.IEq8Mf6tqoLuWe0H6Jz6wIhgWEilyczuRzEr0M9E_4g'
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

axiosMyInstance.interceptors.response.use(
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
