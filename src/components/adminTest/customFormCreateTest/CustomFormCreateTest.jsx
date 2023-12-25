import React, { useEffect } from 'react'
import { InputLabel, styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
// import { TimeField } from '@mui/x-date-pickers/TimeField'
import { useDispatch, useSelector } from 'react-redux'
import Select from '../../UI/select/Select'
import Input from '../../UI/Input'
import { AdminCreateRealEnglishWord } from '../realEnglishWords/CreateRealEnglishWords'
import { Background } from '../../../layout/Background'
import { HighlightTheAnswer } from '../highlightTheAnswer/HighlightTheAnswer'
import { RespondLeast } from '../respondLeast/RespondLeast'
import { ListenSelect } from '../ListenSelect/ListenSelect'
import { TypeWhatYouHear } from '../TypeWhatYouHear'
import { SelectBestTitle } from '../SelectTheBestTitle/SelectBestTitle'
import StatementInput from '../statement/StatementInput'
import SelectImage from '../selectImg/SelectImage'
import { SelectMainIdea } from '../selectMainIdea/SelectMainIdea'
import { questionsSlice } from '../../../store/questions/questionsSlice'

const renderedContent = {
   'Select real English words': {
      placeholder: 'Select real English words',
      content: <AdminCreateRealEnglishWord />,
   },
   'Listen and select English word': {
      placeholder: 'Listen and select English word',
      content: <ListenSelect />,
   },
   'Type what you hear': {
      placeholder: 'Take a free practice test and estimate your score',
      content: <TypeWhatYouHear />,
   },
   'Record saying statement': {
      placeholder: 'My uncle is at work',
      content: <StatementInput />,
   },
   'Respond in at least N words': {
      placeholder: 'Respond in at least N words',
      content: <RespondLeast />,
   },
   'Describe image': {
      placeholder: 'Take a free practice test and estimate your score',
      content: <SelectImage />,
   },
   'Highlight the answer': {
      placeholder: 'Highlight the answer',
      content: <HighlightTheAnswer />,
   },
   'Select the main idea': {
      placeholder: 'Select the main idea',
      content: <SelectMainIdea />,
   },
   'Select the best title': {
      placeholder: 'Select the best title',
      content: <SelectBestTitle />,
   },
}

const CustomFormCreateTest = ({ selectLabel, formStyles, labelStyles }) => {
   const dispatch = useDispatch()
   const { pathname } = useLocation()
   const { selectedOption } = useSelector((state) => state.questions)

   const { questionDuration, title, titleValidate } = useSelector(
      (state) => state.questions
   )
   const handleChange = (event) => {
      dispatch(questionsSlice.actions.selectedOption(event.target.value))
   }

   useEffect(() => {
      if ((title, questionDuration)) {
         dispatch(questionsSlice.actions.titleValidate(false))
         dispatch(questionsSlice.actions.durationValidate(false))
      }
   }, [title, questionDuration])

   return (
      <Background>
         <FormSubmit style={formStyles}>
            <ContainerTitleInput>
               <Container>
                  <TextTitle style={labelStyles}>Title</TextTitle>
                  <StyledInput
                     border="solid 1.53px #D4D0D0"
                     padding="0.6rem 1rem"
                     placeholder={renderedContent[selectedOption]?.placeholder}
                     name="title"
                     onChange={(event) =>
                        dispatch(
                           questionsSlice.actions.addTitle(event.target.value)
                        )
                     }
                     value={title}
                  />
               </Container>
               <ContainerTimerInput>
                  <TimeText htmlFor="timeInput">
                     Duration
                     <span>(in minutes)</span>
                  </TimeText>
                  <FieldTime
                     placeholder="00:00"
                     type="number"
                     min="0"
                     onChange={(event) => {
                        return dispatch(
                           questionsSlice.actions.addTime(event.target.value)
                        )
                     }}
                     value={questionDuration}
                  />
               </ContainerTimerInput>
            </ContainerTitleInput>
            <div style={{ textAlign: 'center', color: 'red' }}>
               {titleValidate ? (
                  <p>Title and Duration fields are required</p>
               ) : null}
            </div>
            {pathname.startsWith('/admin/update-question') ? null : (
               <ContainerInputSecond>
                  <InputLabelTextType>{selectLabel}Type</InputLabelTextType>
                  <Select
                     selectedOption={selectedOption}
                     handleChange={handleChange}
                     fullWidth
                  />
               </ContainerInputSecond>
            )}
            {renderedContent[selectedOption]?.content}
         </FormSubmit>
      </Background>
   )
}

export default CustomFormCreateTest

const FormSubmit = styled('div')(() => ({
   width: '50rem',
   marginTop: '30px',
   display: 'flex',
   gap: '30px',
   flexDirection: 'column',
}))
const ContainerTitleInput = styled('div')(() => ({
   display: 'flex',
   gap: '16px',
   alignItems: 'end',
}))
const Container = styled('div')(() => ({
   height: '76px',
   paddingTop: '4px',
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
}))
const StyledInput = styled(Input)(() => ({
   width: '43rem',
   '& ::placeholder': {
      color: '#D4D0D0',
      fontWeight: 400,
   },
}))
const TextTitle = styled('h1')(() => ({
   fontfamily: 'DINNextRoundedLTW04-Medium',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '1rem',
   lineHeight: '18px',
   color: '#4B4759',
}))
const TimeText = styled('label')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '0.9rem',
   display: 'flex',
   color: '#4B4759',
   flexDirection: 'column',
   width: '110px',
   '& input': {
      alignItems: 'center',
   },
}))

const ContainerTimerInput = styled('div')(() => ({
   width: '120px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'start',
}))

const ContainerInputSecond = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '13px',
}))

const FieldTime = styled('input')(() => ({
   width: '6rem',
   height: '43px',
   padding: '9.5px 0 5px 25px',
   borderRadius: '8px',
   outline: 'none',
   marginBottom: '1.3px',
   border: '1.53px solid #D4D0D0',
   color: '#4C4859',
   fontSize: '18px',
   '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
   },
   '&[type=number]': {
      '-moz-appearance': 'textfield',
   },
   '&:focus': {
      border: '1.53px solid rgba(196, 196, 196, 0.60)',
   },
   '&::placeholder': {
      color: '#c2c0c0',
      fontWeight: '500',
      fontSize: '18px',
   },
}))

const InputLabelTextType = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4C4859',
}))
