import React from 'react'
import { useFormik } from 'formik'
import { InputLabel, styled } from '@mui/material'
import Button from '../../UI/Buttons/Button'
import Input from '../../UI/Input'

const StatementInput = ({ handleClose }) => {
   const formik = useFormik({
      initialValues: {
         inputValue: '',
      },
      validate: (values) => {
         const errors = {}
         if (!values.inputValue) {
            errors.inputValue = 'Required'
         } else if (values.inputValue.length > 40) {
            errors.inputValue = 'Must be 30 characters or less'
         }
         return errors
      },
      onSubmit: (values) => {
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
               </div>
               <div className="ButtonBlock">
                  <Button
                     variant="outlined"
                     hoverStyle="#3A10E5"
                     onClick={handleClose}
                  >
                     GO BACK
                  </Button>
                  {formik.touched.inputValue && formik.errors.inputValue ? (
                     <div style={{ color: 'red' }}>
                        {formik.errors.inputValue}
                     </div>
                  ) : null}
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
export default StatementInput
