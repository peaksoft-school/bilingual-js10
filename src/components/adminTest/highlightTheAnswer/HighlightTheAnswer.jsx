import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import Input from '../../UI/Input'
import Button from '../../UI/Buttons/Button'
import TextArea from '../../UI/textarea/TextArea'
import { postHighlightAnswer } from '../../../store/question/questionsThunk'
import { schemaHighlight } from '../../../utils/helpers/validate/authValidate'
import { questionsSlice } from '../../../store/questions/questionsSlice'
import { updateQuestion } from '../../../store/questions/questionsThunk'

export const HighlightTheAnswer = () => {
   const [answerValue, setAnswerValue] = useState('')
   const { title, questionDuration, question } = useSelector(
      (state) => state.questions
   )
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { pathname } = useLocation()
   const updateUrl =
      pathname === '/admin/tests/update-question/highlight-the-answer'

   const formik = useFormik({
      initialValues: {
         question: '',
         text: '',
      },
      validationSchema: schemaHighlight,
   })

   const handleSave = async () => {
      if (title && questionDuration && answerValue) {
         const result = {
            title,
            duration: questionDuration * 60,
            statement: formik.values.question,
            passage: formik.values.text,
            correctAnswer: answerValue,
            attempts: 0,
            fileUrl: 'string',
         }
         if (updateUrl) {
            const data = result
            await dispatch(updateQuestion(data))
         } else {
            await dispatch(postHighlightAnswer(result))
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
         formik.setFieldValue('question', question.statement)
         formik.setFieldValue('text', question.passage)
         setAnswerValue(question.correctAnswer)
      }
   }, [question])

   return (
      <div>
         <MainPassageContainer onSubmit={formik.handleSubmit}>
            <span>Questions to the Passage</span>
            <Input
               border=" 1.53px solid #D4D0D0"
               className="input"
               padding="10px 16px"
               fullWidth
               name="question"
               value={formik.values.question}
               onChange={formik.handleChange}
            />
            <span>Passage</span>
            <TextFieldStyle>
               <TextArea
                  multiline
                  name="text"
                  value={formik.values.text}
                  onChange={formik.handleChange}
                  fullWidth
                  className="textarea"
               />
            </TextFieldStyle>
            <span>Highlight correct answer:</span>

            <CorrectAnswerBlock>
               <Pstyle
                  onMouseUp={() =>
                     setAnswerValue(window.getSelection().toString())
                  }
               >
                  {formik.values.text}
               </Pstyle>
            </CorrectAnswerBlock>
            {formik.errors.text ? (
               <div className="error">{formik.errors.text}</div>
            ) : null}
            <ButtonContainer>
               <Button
                  onClick={() => navigate(-1)}
                  variant="outlined"
                  hoverStyle="#3A10E5"
               >
                  go back
               </Button>
               <Button
                  hoverStyle="#31CF38"
                  variant="contained"
                  defaultStyle="#2AB930"
                  className="saveButton"
                  onClick={handleSave}
               >
                  save
               </Button>
            </ButtonContainer>
         </MainPassageContainer>
      </div>
   )
}

const Pstyle = styled('p')(() => ({
   color: '#4C4859',
   marginBottom: '25px',
   '::selection': {
      color: '#3A10E5',
      textDecoration: 'underline',
   },
}))

const TextFieldStyle = styled('div')(() => ({
   '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
      border: ' 2.3px solid #D4D0D0',
      outline: 'none',
   },
   '& :hover fieldset': {
      border: ' 1.59px solid #3A10E5 !important',
   },
}))

const MainPassageContainer = styled('div')(() => ({
   '& > span': {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '16px',
      color: '#4C4859',
      marginBottom: '6px',
   },
   '& > .input, .textarea': {
      marginBottom: '24px',
      marginTop: '12px',
   },
   '.error': {
      color: 'red',
      fontWeight: '400',
      fontSize: '15px',
   },
}))

const ButtonContainer = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'center',
   gap: '16px',
})

const CorrectAnswerBlock = styled('div')({
   width: '820px',
   wordBreak: 'break-word',
   minHeight: '40px',
})
