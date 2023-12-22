import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { InputLabel, styled } from '@mui/material'
import Button from '../../UI/Buttons/Button'
import Input from '../../UI/Input'
import { postRecordStatement } from '../../../store/question/questionsThunk'
import { updateQuestion } from '../../../store/questions/questionsThunk'
import { questionsSlice } from '../../../store/questions/questionsSlice'

const StatementInput = () => {
   const dispatch = useDispatch()
   const { title, questionDuration, question } = useSelector(
      (state) => state.questions
   )
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const updateUrl =
      pathname === '/admin/tests/update-question/record-saying-statement'

   const formik = useFormik({
      initialValues: {
         inputValue: '',
      },
      validate: (values) => {
         const errors = {}
         if (!values.inputValue) {
            errors.inputValue = 'Required'
         } else if (values.inputValue.length > 50) {
            errors.inputValue = 'Must be 50 characters or less'
         }
         return errors
      },
   })

   const handleSave = async () => {
      if (title && questionDuration) {
         if (updateUrl) {
            await dispatch(
               updateQuestion({
                  title,
                  statement: formik.values.inputValue,
                  correctAnswer: 'string',
                  duration: questionDuration * 60,
                  attempts: 0,
                  fileUrl: 'string',
                  passage: 'string',
               })
            )
         } else {
            const result = {
               title,
               duration: questionDuration * 60,
               statement: formik.values.inputValue,
            }
            await dispatch(postRecordStatement(result))
         }
         navigate(-1)
      } else {
         dispatch(questionsSlice.actions.titleValidate(true))
         dispatch(questionsSlice.actions.durationValidate(true))
      }
   }
   useEffect(() => {
      if (updateUrl) {
         dispatch(questionsSlice.actions.addTime(question.duration))
         dispatch(questionsSlice.actions.addTitle(question.title))
         formik.setFieldValue('inputValue', question.statement)
      }
   }, [question])

   return (
      <Container>
         <div className="Box">
            <form onSubmit={formik.handleSubmit}>
               <div className="StatementBlock">
                  <InputTextAnswer>Statement</InputTextAnswer>
                  <Input
                     type="text"
                     padding="0.6rem 1rem"
                     fullWidth
                     name="inputValue"
                     value={formik.values.inputValue}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
                  {formik.touched.inputValue && formik.errors.inputValue ? (
                     <Error>{formik.errors.inputValue}</Error>
                  ) : null}
               </div>
               <div className="ButtonBlock">
                  <Button
                     variant="outlined"
                     hoverStyle="#3A10E5"
                     onClick={() => navigate(-1)}
                  >
                     GO BACK
                  </Button>
                  <Button
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     variant="contained"
                     onClick={handleSave}
                  >
                     SAVE
                  </Button>
               </div>
            </form>
         </div>
      </Container>
   )
}
const Error = styled('p')({
   color: 'red',
})
const InputTextAnswer = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '1rem',
   lineHeight: '1rem',
   color: '#4C4859',
   marginBottom: '0.6rem',
}))
const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   fontfamily: 'Poppins',
   marginTop: '1.5rem',
   '.Box': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
   },
   '.StatementBlock': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%',
   },
   '.ButtonBlock': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginTop: '2rem',
      fontfamily: 'Poppins',
   },
}))
export default StatementInput
