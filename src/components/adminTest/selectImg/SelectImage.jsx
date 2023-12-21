import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputLabel, styled } from '@mui/material'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import UpploadFile from './UpploadFile'
import Input from '../../UI/Input'
import Button from '../../UI/Buttons/Button'
import { updateQuestion } from '../../../store/questions/questionsThunk'
import { postDescribeImage } from '../../../store/s3file/thunk'
import { questionsSlice } from '../../../store/questions/questionsSlice'

const SelectImage = () => {
   const { pathname } = useLocation()
   const updateUrl = pathname === '/admin/tests/update-question/describe-image'

   const [selectedImage, setSelectedImage] = useState(null)
   const { title, questionDuration, question } = useSelector(
      (state) => state.questions
   )
   const { testID } = useSelector((state) => state.createTestSlice)
   const dispatch = useDispatch()
   const navigate = useNavigate()

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
                  statement: 'string',
                  correctAnswer: formik.values.inputValue,
                  duration: questionDuration * 60,
                  attempts: 0,
                  fileUrl: selectedImage,
                  passage: 'string',
               })
            )
         } else {
            const data = {
               title,
               duration: questionDuration * 60,
               correctAnswer: formik.values.inputValue,
            }
            await dispatch(postDescribeImage({ selectedImage, data, testID }))
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
         setSelectedImage(question.fileUrl)
         formik.setFieldValue('inputValue', question.correctAnswer)
      }
   }, [question])

   return (
      <Container>
         <div className="Box">
            <UpploadFile
               inputFile={formik.values.inputFile}
               name="inputFile"
               selectedImage={selectedImage}
               setSelectedImage={setSelectedImage}
            />
            <div className="AnswerBlock">
               <InputTextAnswer>Correct Answer</InputTextAnswer>
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
                  <Boxerror>{formik.errors.inputValue}</Boxerror>
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
         </div>
      </Container>
   )
}
const Boxerror = styled('span')({
   color: 'red',
})
const InputTextAnswer = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4C4859',
   marginBottom: '0.6rem',
}))
const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   fontfamily: 'Poppins',
   '.Box': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
   },
   '.AnswerBlock': {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
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
export default SelectImage
