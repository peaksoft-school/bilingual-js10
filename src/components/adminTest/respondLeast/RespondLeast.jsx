import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../UI/Buttons/Button'
import Input from '../../UI/Input'
import { validationAuthSignUp } from '../../../utils/helpers/validate/validation'
import { postQuestion } from '../../../api/postQuestionApi'
import { questionsSlice } from '../../../store/questions/questionsSlice'
import { updateQuestion } from '../../../store/questions/questionsThunk'

export const RespondLeast = () => {
   const { title, questionDuration, question } = useSelector(
      (state) => state.questions
   )

   const { pathname } = useLocation()
   const updateUrl =
      pathname === '/admin/tests/update-question/respond-in-at-least-n-words'

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const formik = useFormik({
      initialValues: {
         questionStatement: '',
         numberReplays: '',
      },
      validationSchema: validationAuthSignUp,
   })

   const saveBtn = async () => {
      if (title && questionDuration) {
         const data = {
            title,
            duration: questionDuration * 60,
            statement: formik.values.questionStatement,
            attempts: formik.values.numberReplays,
            correctAnswer: 'string',
            fileUrl: 'string',
            passage: 'string',
         }
         if (updateUrl) {
            await dispatch(updateQuestion(data))
         } else {
            await dispatch(postQuestion(data))
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
         formik.setFieldValue('questionStatement', question.statement)
         formik.setFieldValue('numberReplays', question.attempts)
      }
   }, [question])

   return (
      <>
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
               <p className="LabelTop">Number of</p>
               <p className="LabelBottom">Words</p>
               <Input
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
               variant="contained"
               defaultStyle="#2AB930"
               hoverStyle="#31CF38"
               onClick={saveBtn}
            >
               Save
            </Button>
         </Buttons>
      </>
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
