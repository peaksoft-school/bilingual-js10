import { axiosInstance } from '../config/axiosInstance'

export const getResult = () => {
   return axiosInstance.get('/result/getQuestionsResults?userId=1&questionId=3')
}
export const sendingResult = () => {
   return axiosInstance.post('/result')
}
