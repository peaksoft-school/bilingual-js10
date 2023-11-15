import { axiosInstance } from '../config/axiosInstance'

const signIn = (userData) => {
   return axiosInstance.post('/api/auth/signIn', userData)
}

const signUp = (userData) => {
   return axiosInstance.post('/api/auth/signUp', userData)
}

export default { signIn, signUp }
