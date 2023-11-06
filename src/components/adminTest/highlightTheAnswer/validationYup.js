import * as Yup from 'yup'

export const schemaHighlight = Yup.object().shape({
   question: Yup.string().required('This field is required !'),
   text: Yup.string().required('This field is required !'),
})
