import { axiosInstance } from '../config/axiosInstance'

export const getResult = (userId, questionId) => {
   return axiosInstance.get(
      `/result/getQuestionsResults?userId=${userId}&questionId=${questionId}`
   )
}
export const sendingResult = () => {
   return axiosInstance.post('/result')
}
