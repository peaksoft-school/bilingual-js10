import axios from 'axios'
import { store } from '../store'

export const BASE_URL = 'http://billingual.peaksoftprojects.com/api'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})
axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   //  const { token } = store.getState().authLogin
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDA4MTkzNDAsImlhdCI6MTcwMDIxNDU0MCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.jq3RVlYPEmAghM8gCJIRei2sspLrGrJzJtwUFtTje1o'
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

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
