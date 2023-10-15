import * as yup from 'yup'

const validationAuthSignUp = yup.object().shape({
   firstName: yup.string().required('first name'),
   lastName: yup.string().required('last name'),
   email: yup
      .string()
      .required('email!')
      .matches(/.*@gmail\.com$/, 'email must be a valid gmail address'),
   password: yup
      .string()
      .min(6, 'The password must be more than 6 characters!')
      .max(100)
      .required('password!'),
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

export { validationAuthSignUp, validationAuthSignIn }
