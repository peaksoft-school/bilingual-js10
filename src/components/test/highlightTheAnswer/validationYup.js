import * as Yup from 'yup'

export const schemaHighlight = Yup.object().shape({
   question: Yup.string().required('Поле обязательно для заполнения !'),
   text: Yup.string().required('Поле обязательно для заполнения !'),
})
