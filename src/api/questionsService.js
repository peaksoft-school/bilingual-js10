import { axiosInstance } from '../config/axiosInstance'

export const getResult = (userId, questionId) => {
   return axiosInstance.get(
      `/result/getQuestionsResults?userId=${userId}&questionId=${questionId}`
   )
}
export const sendingResult = (data) => {
   return axiosInstance.post('/result/', data)
}
