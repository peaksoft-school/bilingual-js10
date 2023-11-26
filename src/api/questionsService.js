import { axiosInstance } from '../config/axiosInstance'

export const getAllTests = (id) => {
   return axiosInstance.get(`/questions?questionId=${id}`)
}

export const getTestById = (id) => {
   return axiosInstance.get(
      `/questions/getOptionsByQuestionId?questionId=${id}`
   )
}
