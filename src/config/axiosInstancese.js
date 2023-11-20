import axios from 'axios'

export const axiosInstance = axios.create({
   baseURL: 'http://billingual.peaksoftprojects.com',
   // headers: {
   //    'Content-Type': 'application/json',
   // },
})
let store
export const injectStore = (_store) => {
   store = _store
}
axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   // const { token } = store.getState().authLogin
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDEwNzgwMTIsImlhdCI6MTcwMDQ3MzIxMiwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.N1XO2JEW9ERMICvtNm2pOuFXibwSMryKw1ByfQcDP_8'
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
