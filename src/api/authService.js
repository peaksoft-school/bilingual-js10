import { instanse } from '../config/axiosInstanse'

const signIn = (userData) => {
   return instanse.post('/api/auth/signIn', userData)
}

const signUp = (userData) => {
   return instanse.post('/api/auth/signUp', userData)
}

export default { signIn, signUp }
