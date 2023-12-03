import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputLabel, styled } from '@mui/material'
import { useFormik } from 'formik'
import Button from '../../components/UI/Buttons/Button'
import Input from '../../components/UI/Input'
import UpploadFile from './UpploadFile'
import { postDescribeImage } from '../../store/s3file/thunk'

const SelectImage = ({ handleClose }) => {
   const [selectedImage, setSelectedImage] = useState(null)
   const { title, questionDuration } = useSelector((state) => state.questions)
   const dispatch = useDispatch()

   const handleSave = (data) => {
      dispatch(postDescribeImage({ selectedImage, data }))
   }

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
      onSubmit: (values) => {
         const data = {
            title,
            duration: questionDuration,
            correctAnswer: values.inputValue,
         }
         handleSave(data)
      },
   })

   return (
      <Container>
         <div className="Box">
            <form onSubmit={formik.handleSubmit}>
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
                     onClick={handleClose}
                  >
                     GO BACK
                  </Button>
                  <Button
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     variant="contained"
                     type="submit"
                  >
                     SAVE
                  </Button>
               </div>
            </form>
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
