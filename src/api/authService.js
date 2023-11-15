import { axiosInstance } from '../config/axiosInstance'

const signIn = (userData) => {
   return axiosInstance.post('/auth/signIn', userData)
}

const signUp = (userData) => {
   return axiosInstance.post('/auth/signUp', userData)
}

export default { signIn, signUp }
