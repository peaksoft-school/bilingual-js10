/* eslint-disable no-use-before-define */
import { useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import { Delete } from '../../../assets'
import TextArea from '../../UI/textarea/TextArea'
import { validationPassage } from '../../../utils/helpers/validate/authValidate'
import { SelectBestModal } from '../SelectTheBestTitle/SelectBestModal'
import { postQuestion } from '../../../api/postQuestionApi'
import { questionsSlice } from '../../../store/questions/questionsSlice'
import {
   deleteOption,
   optionEnable,
   postOption,
   updateQuestion,
} from '../../../store/questions/questionsThunk'

export const SelectMainIdea = () => {
   const { title, questionDuration, question, options } = useSelector(
      (state) => state.questions
   )

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { pathname } = useLocation()
   const updateUrl =
      pathname === '/admin/tests/update-question/select-the-main-idea'

   const formik = useFormik({
      initialValues: {
         passage: '',
         titleValues: '',
         options: [],
         checkboxValue: false,
         openModal: false,
      },
      validationSchema: validationPassage,
   })

   const saveBtn = async () => {
      if (title && questionDuration) {
         if (!updateUrl) {
            const data = {
               title,
               duration: questionDuration * 60,
               passage: formik.values.passage,
               options: formik.values.options.map((el) => {
                  return {
                     title: el.title,
                     isTrue: el.isTrue,
                  }
               }),
            }
            await dispatch(postQuestion(data))
         } else {
            const data = {
               title,
               duration: questionDuration * 60,
               passage: formik.values.passage,
               statement: 'string',
               correctAnswer: 'string',
               attempts: 0,
               fileUrl: 'string',
            }
            await dispatch(updateQuestion(data))
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
         formik.setFieldValue('passage', question.passage)
         formik.setFieldValue('options', options)
      }
   }, [question, options])

   // const handleOpenModal = () => {
   //    formik.setFieldValue('openModal', true)
   //    const Url = new URL(window.location)
   //    Url.searchParams.set('modal', 'true')
   //    window.history.pushState({}, '', Url)
   // }
   const optionsModal = () => {
      formik.setFieldValue('openModal', true)
   }

   const handleCheckboxChange = async (id) => {
      const updatedOptions = formik.values.options.map((option) => {
         if (option.id === id) {
            return {
               ...option,
               isTrue: !option.isTrue,
            }
         }
         return {
            ...option,
            isTrue: false,
         }
      })

      formik.setFieldValue('options', updatedOptions)
      const anyChecked = updatedOptions.some((option) => option.isTrue)
      formik.setFieldValue('checkboxValue', anyChecked)

      if (updateUrl) {
         const trueElement = formik.values.options.find(
            (option) => option.id === id
         )
         const trueID = trueElement ? trueElement.id : null

         if (trueID !== null) {
            await dispatch(optionEnable({ id: trueID, boolean: true }))
         }

         const falseElements = formik.values.options.filter(
            (option) => option.id !== id
         )
         const id1 = falseElements.length > 0 ? falseElements[0].id : null
         const id2 = falseElements.length > 1 ? falseElements[1].id : null
         const id3 = falseElements.length > 2 ? falseElements[2].id : null

         if (id1 !== null) {
            await dispatch(optionEnable({ id: id1, boolean: false }))
         }

         if (id2 !== null) {
            await dispatch(optionEnable({ id: id2, boolean: false }))
         }

         if (id3 !== null) {
            await dispatch(optionEnable({ id: id3, boolean: false }))
         }
      }
   }

   const removeElement = (id) => {
      formik.setFieldValue(
         'options',
         formik.values.options.filter((option) => option.id !== id)
      )
      if (updateUrl) {
         dispatch(deleteOption(id))
      }
   }

   // const handleClose = () => {
   //    formik.setFieldValue('openModal', false)
   //    const Url = new URL(window.location)
   //    Url.searchParams.delete('modal')
   //    window.history.pushState({}, '', Url)
   // }
   const handleClose = () => {
      formik.setFieldValue('openModal', false)
   }
   const handleSave = async (e) => {
      e.preventDefault()
      const newOption = {
         id: Math.random(),
         title: formik.values.titleValues,
         isTrue: formik.values.checkboxValue,
      }

      formik.setFieldValue('titleValues', '')
      formik.setFieldValue('options', [...formik.values.options, newOption])
      formik.setFieldValue('checkboxValue', false)
      if (updateUrl) {
         const option = {
            title: formik.values.titleValues,
            isTrue: formik.values.checkboxValue,
         }
         await dispatch(postOption(option))
      }
      handleClose()
   }

   return (
      <Formik>
         {() => (
            <Container>
               <WidthContainer>
                  <div className="ContainTextArea">
                     <span className="ContainSpan">Passage</span>
                     <TextArea
                        name="passage"
                        onChange={formik.handleChange}
                        value={formik.values.passage}
                        className="TextArea"
                        variant="outlined"
                        multiline
                        fullWidth
                        error={
                           formik.touched.passage &&
                           Boolean(formik.errors.passage)
                        }
                        helperText={
                           formik.touched.passage && formik.errors.passage
                        }
                     />
                  </div>

                  <div className="ContainButton">
                     <Button
                        hoverStyle="#3A10E5E5"
                        defaultStyle="#3A10E5"
                        className="addNewTestButton"
                        variant="contained"
                        onClick={optionsModal}
                        type="button"
                     >
                        ADD OPTIONS
                     </Button>
                  </div>
                  <div className="ContainerCreateTests">
                     {formik.values?.options.map((el, index) => (
                        <div
                           key={el.id}
                           style={{ width: '51.25rem' }}
                           className="ContainCreatTest"
                        >
                           <p className="Number">{index + 1}</p>
                           <p>{el.title}</p>
                           <div className="RadioDelete">
                              <CheckedRadio
                                 variant="RADIO"
                                 checkedSwitch={el.isTrue}
                                 onChange={() => handleCheckboxChange(el.id)}
                              />
                              <Delete
                                 onClick={() => removeElement(el.id)}
                                 className="DeleteIcon"
                              />
                           </div>
                        </div>
                     ))}
                  </div>
                  {formik.values.options.length > 0 ? (
                     <div className="ControlButton">
                        <Button
                           variant="outlined"
                           hoverStyle="#3A10E5"
                           className="Button"
                           onClick={() => navigate(-1)}
                        >
                           GO BACK
                        </Button>
                        <Button
                           defaultStyle="#2AB930"
                           hoverStyle="#31CF38"
                           className="saveButton"
                           variant="contained"
                           onClick={() => saveBtn()}
                        >
                           SAVE
                        </Button>
                     </div>
                  ) : null}
                  {formik.values.openModal && (
                     <SelectBestModal
                        titlePlaceholder="Select Main Idea"
                        handleClose={handleClose}
                        openModal={formik.values.openModal}
                        titleValues={formik.values.titleValues}
                        setTitleValues={(value) =>
                           formik.setFieldValue('titleValues', value)
                        }
                        handleSave={handleSave}
                        checkboxValue={formik.values.checkboxValue}
                        setCheckboxValue={(value) =>
                           formik.setFieldValue('checkboxValue', value)
                        }
                        options={formik.values.options}
                     />
                  )}
               </WidthContainer>
            </Container>
         )}
      </Formik>
   )
}
const CheckedRadio = styled(InputRadio)({
   cursor: 'pointer',
})
const WidthContainer = styled('div')({
   width: '50rem',
   color: '#4C4859',
})
const Container = styled('div')(() => ({
   '.DeleteIcon': {
      width: '1.25rem',
      height: '1.25rem',
   },
   '.ContainButton': {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '2rem',
      fontFamly: 'Poppins',
      fontWeight: '800',
   },
   '.ControlButton': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '2rem',
      fontFamly: 'Poppins',
   },
   '.ContainCreatTest': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      borderRadius: '0.5rem',
      border: '1.53px solid #D4D0D0',
      background: '#fff',
      columnGap: '2rem',
      padding: '0.88rem',
      widht: '100%',
   },
   '.ContainerCreateTests': {
      display: 'flex',
      justifyContent: '',
      rowGap: '1rem',
      flexWrap: 'wrap',
      marginTop: '1.35rem',
      fontFamly: 'Poppins',
      wordBreak: 'break-word',
      ul: {
         fontSize: '16px',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: 'normal',
         color: '#4C4859',
      },
   },
   '.ContainTextArea': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '1rem',
      marginTop: '1.5rem',
   },
   '.Number': { paddingBottom: '1.3rem', cursor: 'pointer' },
   '.RadioDelete': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '1.3rem',
      cursor: 'pointer',
   },
   '.ContainSpan': { fontSize: '1rem', fontWeight: '500' },
}))
