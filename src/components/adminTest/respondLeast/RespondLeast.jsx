import React from 'react'
import { useFormik } from 'formik'
import { Typography, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Buttons/Button'
import Input from '../../UI/Input'
import { validationAuthSignUp } from '../../../helpers/validation'
import { axiosInstance } from '../../../config/axiosInstance'

export const RespondLeast = () => {
   const { testID } = useSelector((state) => state.createTestSlice)
   const navigate = useNavigate()
   const formik = useFormik({
      initialValues: {
         questionStatement: '',
         numberReplays: '',
      },
      validationSchema: validationAuthSignUp,
      onSubmit: async (values) => {
         try {
            const response = await axiosInstance.post(
               `questions?testId=${testID}&questionType=RESPOND_AT_LEAST_N_WORDS`,
               {
                  statement: values.questionStatement,
                  attempts: values.numberReplays,
                  options: [{}],
               }
            )
            console.log(response.data)
         } catch (error) {
            console.error('Error:', error)
         }
      },
   })

   return (
      <form onSubmit={formik.handleSubmit}>
         <Container>
            <label htmlFor="questionStatement">Question statement</label>
            <Input
               className="Input replaceInput"
               id="questionStatement"
               type="questionStatement"
               name="questionStatement"
               value={formik.values.questionStatement}
               onChange={formik.handleChange}
               placeholder="“describe a time you were surprised. what happened?”"
            />
            {formik.errors.questionStatement && (
               <ErrorMessage>{formik.errors.questionStatement}</ErrorMessage>
            )}
         </Container>
         <AudioContainer>
            <div>
               <p className="LabelTop">numberReplays of</p>
               <p className="LabelBottom">Replays</p>
               <Input
                  type="number"
                  id="numberReplays"
                  name="numberReplays"
                  value={formik.values.numberReplays}
                  onChange={formik.handleChange}
                  min="0"
               />
               {formik.errors.numberReplays && (
                  <ErrorMessagesesaa>
                     {formik.errors.numberReplays}
                  </ErrorMessagesesaa>
               )}
            </div>
         </AudioContainer>
         <Buttons>
            <Button
               onClick={() => navigate('/admin')}
               variant="outlined"
               hoverStyle="#3A10E5"
            >
               Go back
            </Button>
            <Button
               type="submit"
               variant="contained"
               defaultStyle="#2AB930"
               hoverStyle="#31CF38"
            >
               Save
            </Button>
         </Buttons>
      </form>
   )
}
const ErrorMessage = styled(Typography)(() => ({
   color: 'red',
}))
const ErrorMessagesesaa = styled(Typography)(() => ({
   color: 'red',
}))
const Container = styled('div')`
   display: flex;
   align-items: start;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;

   label {
      margin-top: 1rem;
      color: var(--4C4859, #4c4859);
   }
   Input {
      width: 47rem;
      height: 1rem;
   }
`
const Buttons = styled('div')`
   display: flex;
   gap: 1rem;
   justify-content: end;
   margin-right: 3.5rem;
`
const AudioContainer = styled('div')`
   display: flex;
   align-items: end;
   .LabelTop {
      margin-top: 1rem;
   }
   .LabelBottom {
      margin-bottom: 1rem;
   }
   .css-1m9tnob-MuiFormControl-root-MuiTextField-root .MuiInputBase-input {
      width: 2.5rem;
      height: 1.5rem;
   }
   .MuiInputBase-input {
      padding: 1rem 0rem 1rem 1rem;
   }
`
