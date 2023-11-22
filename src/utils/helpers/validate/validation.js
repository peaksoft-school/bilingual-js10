import * as yup from 'yup'

const validationAuthSignUp = yup.object().shape({
   questionStatement: yup.string().required('write a few words'),
   numberReplays: yup.number().required('write some numbers'),
})

const validationPassage = yup.object({
   passage: yup.string().required('write a few words'),
})

export { validationAuthSignUp, validationPassage }
