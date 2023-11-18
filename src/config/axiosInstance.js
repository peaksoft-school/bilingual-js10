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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDA4OTc1MDIsImlhdCI6MTcwMDI5MjcwMiwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.B8N_E20N9cFqM_T-U4AF8L89go5ozerX1nFQJ_BUgpg'
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
      if (error?.code === 403) {
         store.dispatch(authActions.logout())
         throw new Error('Unauthotized!')
      }
      return Promise.reject(error)
   }
)
