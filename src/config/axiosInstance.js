import axios from 'axios'

export const axiosInstance = axios.create({
   baseURL: 'http://ec2-18-153-48-98.eu-central-1.compute.amazonaws.com/api',
   headers: {
      'Content-Type': 'application/json',
   },
})

let store

export const injectStore = (_store) => {
   store = _store
}

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   // const { token } = store.getState().authLogin
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDAxMzQ0ODgsImlhdCI6MTY5OTUyOTY4OCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.O9MZO1hFGqX8csxbysug8Y9PkNiqeChJNh3IMABqxJs'
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
