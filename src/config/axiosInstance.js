// import axios from 'axios'
// import { store } from '../store'
// import { authActions } from '../store/auth/authSlice'

// const BASE_URL = {}

// const headers = {
//    'Content-Type': 'application/json',
// }
// export const axiosInstance = axios.create({
//    baseURL: BASE_URL,
//    headers,
// })

// axiosInstance.interceptors.request.use((config) => {
//    const updatedConfig = { ...config }
//    const token = store.getState().login.accessToken
//    if (token) {
//       updatedConfig.headers.Authorization = `Bearer ${token}`
//    }
//    return updatedConfig
// })
// axios.interceptors.response.use(
//    (response) => {
//       return Promise.resolve(response)
//    },
//    (error) => {
//       if (error.response.status === 401) {
//          store.dispatch(authActions())
//       }
//    }
// )
