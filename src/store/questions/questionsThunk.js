export const postFileThunk = createAsyncThunk(
   'postFileThunk',
   async function ({ file }, { rejectWithValue }) {
      try {
         const formData = new FormData()
         formData.append('multipartFile', file)
         const data = await axiosInstanceS3File.post('/s3file', formData)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const TypeWhatYouHearThunk = createAsyncThunk(
   'SelectTheMainIdea',
   async (data, { dispatch }) => {
      const fileUrl = await dispatch(postFileThunk({ file: data.audioFile }))
      Notify(
         {
            sucessTitle: 'Question saved ',
            successMessage: 'Successfully saved',
            errorTitle: 'Error',
         },
         axiosInstance.post(
            `/questions?testId=18&questionType=TYPE_WHAT_YOU_HEAR`,
            {
               title: data.title,
               duration: data.duration,
               attempts: data.numberOffReplays,
               correctAnswer: data.correctAnswer,
               fileUrl: fileUrl.payload.data.link,
            }
         )
      )
   }
)
