import * as yup from 'yup'

const latinRegExp = /^[a-zA-Z]+$/

const validationAuthSignUp = yup.object().shape({
   firstName: yup
      .string()
      .required('First name is required')
      .matches(latinRegExp, 'Only Latin characters'),
   lastName: yup.string().required('Last name is required'),
   // .matches(latinRegExp, 'Last name must contain only Latin characters'),
   email: yup
      .string()
      .required('Email is required')
      .matches(/.*@gmail\.com$/, 'Email must be a valid Gmail address'),
   password: yup
      .string()
      .min(6, 'The password must be more than 6 characters!')
      .max(100)
      .required('Password is required'),
})

const validationAuthSignIn = yup.object().shape({
   email: yup
      .string()
      .required('email!')
      .matches(/.*@gmail\.com$/, 'email must be a valid gmail address'),

   password: yup
      .string()
      .min(6, 'The password must be more than 6 characters')
      .max(100)
      .required('password'),
})
const validationPassage = yup.object({
   passage: yup.string().required('Passage should not be empty!'),
})

const schemaHighlight = yup.object().shape({
   text: yup.string().required('Highlight the correct answer !'),
})

export {
   validationAuthSignUp,
   validationAuthSignIn,
   validationPassage,
   schemaHighlight,
}
