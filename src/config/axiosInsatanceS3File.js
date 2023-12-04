import axios from 'axios'

export const axiosInstanceS3File = axios.create({
   baseURL: 'http://ec2-18-153-48-98.eu-central-1.compute.amazonaws.com/api',
   headers: {
      'Content-Type': 'multipart/form-data',
   },
})
let store
export const injectStore = (_store) => {
   store = _store
}
axiosInstanceS3File.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const { token } = store.getState().authLogin
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})
axiosInstanceS3File.interceptors.response.use(
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
