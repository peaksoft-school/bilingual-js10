import { styled } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import Input from '../../UI/Input'
import Button from '../../UI/Buttons/Button'
import TextArea from '../../UI/textarea/TextArea'
import { postHighlightAnswer } from '../../../store/question/questionsThunk'
import { schemaHighlight } from '../../../utils/helpers/validate/authValidate'

export const HighlightTheAnswer = () => {
   const [answerValue, setAnswerValue] = useState('')
   const { title, questionDuration } = useSelector((state) => state.questions)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleSave = async (result) => {
      await dispatch(postHighlightAnswer(result))
      navigate(-1)
   }

   const formik = useFormik({
      initialValues: {
         question: '',
         text: '',
      },
      validationSchema: schemaHighlight,
      onSubmit: (values) => {
         if (title && questionDuration) {
            const result = {
               title,
               duration: questionDuration,
               statement: values.question,
               passage: values.text,
               correctAnswer: answerValue,
            }
            handleSave(result)
         }
      },
   })

   return (
      <div>
         <MainPassageContainer onSubmit={formik.handleSubmit}>
            <span>Questions to the Passage</span>
            {formik.errors.question ? (
               <div className="error">{formik.errors.question}</div>
            ) : null}
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
               {formik.errors.text ? (
                  <div className="error">{formik.errors.text}</div>
               ) : null}
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
            <ButtonContainer>
               <Button
                  onClick={() => navigate('/admin/')}
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
                  type="submit"
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

const MainPassageContainer = styled('form')(() => ({
   '& > span': {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '16px',
      color: '#4C4859',
      marginBottom: '12px',
   },
   '& > .input, .textarea': {
      marginBottom: '24px',
      marginTop: '12px',
   },
   '.error': {
      color: '#ff0000',
      fontWeight: '700',
      fontSize: '13px',
      lineHeight: '9px',
      letterSpacing: '1px',
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
