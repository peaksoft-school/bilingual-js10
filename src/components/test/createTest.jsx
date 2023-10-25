import React from 'react'
import { styled } from '@mui/material'
import { useFormik } from 'formik'
import { Background } from '../../layout/Background'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'

export const CreateTest = ({ onClickSave, onClickGoBack }) => {
   const formik = useFormik({
      initialValues: {
         title: '',
         description: '',
      },
      validate: (values) => {
         const errors = {}

         if (!values.title) {
            errors.title = 'Заголовок обязателен'
         }

         if (!values.description) {
            errors.description = 'Краткое описание обязательно'
         }

         return errors
      },
      onSubmit: (values) => {
         onClickSave(values)
      },
   })

   return (
      <TestStyle>
         <Background>
            <form onSubmit={formik.handleSubmit}>
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
                     onClick={onClickGoBack}
                  >
                     GO BACK
                  </Button>
                  <Button
                     type="submit"
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     variant="contained"
                  >
                     SAVE
                  </Button>
               </div>
            </form>
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
