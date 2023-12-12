import React from 'react'
import { styled } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Background } from '../../layout/Background'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'
import { createTestActions } from '../../store/admin/createTestSlice'
import Notify from '../UI/Notifay'

export const CreateTest = () => {
   const navigate = useNavigate()
   const { tests, updatedTestId } = useSelector(
      (state) => state.createTestSlice
   )
   const dispatch = useDispatch()
   const params = useParams()
   const obj = Object.values(params)
   const testId = tests.find((test) => test.id === updatedTestId)

   const formik = useFormik({
      initialValues: {
         title: obj[0] === 'tests/update-test' ? testId.title : '',
         description: obj[0] === 'tests/update-test' ? testId.description : '',
         enable: false,
      },
      validate: (values) => {
         const errors = {}

         if (!values.title) {
            errors.title = 'The title is required!'
         }

         if (!values.description) {
            errors.description = 'A brief description is required!'
         }

         return errors
      },
   })
   const saveHandler = async (e) => {
      e.preventDefault()
      if (formik.values.title && formik.values.description) {
         if (obj[0] === 'tests/create-test') {
            Notify(
               {
                  sucessTitle: 'Test saved ',
                  successMessage: 'Successfully saved',
                  errorTitle: 'Error',
               },
               axiosInstance.post('/tests', {
                  title: formik.values.title,
                  description: formik.values.description,
               })
            )
         } else {
            Notify(
               {
                  sucessTitle: 'Test updated ',
                  successMessage: 'Successfully updated',
                  errorTitle: 'Error',
               },
               axiosInstance.put(`/tests?testId=${testId.id}`, {
                  title: formik.values.title,
                  description: formik.values.description,
                  enable: formik.values.enable,
               })
            )
         }
         navigate('/admin/tests')
      }
   }

   const addQuestionHandler = async (e) => {
      e.preventDefault()
      if (formik.values.title && formik.values.description) {
         axiosInstance
            .post('/tests', {
               title: formik.values.title,
               description: formik.values.description,
            })
            .then((response) => {
               const { message } = response.data
               const regex = /id: (\d+)/
               const match = regex.exec(message)
               const id = match[1]
               dispatch(createTestActions.testID(Number(id)))
            })
         navigate('/admin/tests/create-question')
      }
   }

   return (
      <TestStyle>
         <Background>
            <div>
               <p>Title</p>
               <Input
                  className="testInput"
                  type="text"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
               />
               {formik.errors.title && (
                  <div className="error">{formik.errors.title}</div>
               )}
            </div>
            <div>
               <p className="twoP">Short Description</p>
               <Input
                  className="testInput"
                  type="text"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
               />
               {formik.errors.description && (
                  <div className="error">{formik.errors.description}</div>
               )}
            </div>
            <div className="testButtonContainer">
               <Button
                  defaultStyle="white"
                  hoverStyle="#3A10E5"
                  variant="outlined"
                  onClick={() => navigate(-1)}
               >
                  GO BACK
               </Button>
               <Button
                  defaultStyle="#2AB930"
                  hoverStyle="#31CF38"
                  type="submit"
                  variant="contained"
                  onClick={(e) => saveHandler(e)}
               >
                  SAVE
               </Button>
               {obj[0] === 'tests/create-test' ? (
                  <Button
                     defaultStyle="#3A10E5"
                     hoverStyle="#3A10E5E5"
                     variant="contained"
                     className="addNewTestButton"
                     type="submit"
                     onClick={(e) => addQuestionHandler(e)}
                  >
                     add questions
                  </Button>
               ) : null}
            </div>
         </Background>
      </TestStyle>
   )
}

const TestStyle = styled('div')(() => ({
   '.testInput': {
      width: '53.94vw',
      maxWidth: '820px',
      marginTop: '12px',
   },
   '.twoP': {
      marginTop: '28px',
   },
   p: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
   },
   '.testButtonContainer': {
      marginTop: '32px',
      display: 'flex',
      justifyContent: 'end',
      gap: '16px',
   },
   '.error': {
      color: 'red',
      fontSize: '14px',
   },
}))
