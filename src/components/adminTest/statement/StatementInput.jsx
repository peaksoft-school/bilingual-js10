import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { InputLabel, styled } from '@mui/material'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Button from '../../UI/Buttons/Button'
import Input from '../../UI/Input'
import { axiosInstance } from '../../../config/axiosInstance'

const StatementInput = ({ handleClose }) => {
   const dispatch = useDispatch()
   const postStatement = createAsyncThunk(
      'post/statement',
      async (_, { getState, rejectWithValue }) => {
         try {
            const { values } = getState()
            const response = await axiosInstance.post(
               '/questions?testId=1&questionType=RECORD_SAYING_STATEMENT',
               {
                  statement: values,
               }
            )
            return response.data
         } catch (error) {
            return rejectWithValue(error)
         }
      }
   )

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
         dispatch(postStatement(values))
         console.log('Form submitted with values:', values)
      },
   })
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
