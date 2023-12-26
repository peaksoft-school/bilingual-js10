import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import OptionModal from './AddOptionModal'
import { InputRadio } from '../../UI/InputRadio'
import { DeleteRealEnglishWord } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import { postQuestion } from '../../../api/postQuestionApi'
import {
   deleteOption,
   getOptionByQuestionId,
   optionEnable,
   updateQuestion,
} from '../../../store/questions/questionsThunk'
import { questionsSlice } from '../../../store/questions/questionsSlice'

export const AdminCreateRealEnglishWord = () => {
   const { title, questionDuration, options, isLoading, question } =
      useSelector((state) => state.questions)

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { pathname } = useLocation()

   const formik = useFormik({
      initialValues: {
         titleValues: '',
         options: [],
         checkboxValue: true,
      },
   })

   useEffect(() => {
      if (
         pathname === '/admin/tests/update-question/select-real-english-words'
      ) {
         formik.setFieldValue('options', options)
         dispatch(questionsSlice.actions.addTime(question.duration))
         dispatch(questionsSlice.actions.addTitle(question.title))
      }
   }, [options, question])

   const handleSave = async () => {
      if (title && questionDuration) {
         if (
            pathname ===
            '/admin/tests/update-question/select-real-english-words'
         ) {
            await dispatch(
               updateQuestion({
                  title,
                  statement: 'string',
                  correctAnswer: 'string',
                  duration: questionDuration * 60,
                  attempts: 0,
                  fileUrl: 'string',
                  passage: 'string',
               })
            )
         } else {
            const data = {
               title,
               duration: questionDuration * 60,
               options: formik.values.options.map((el) => ({
                  title: el.title,
                  isTrue: el.isTrue,
               })),
            }
            await dispatch(postQuestion(data))
         }
         navigate(-1)
      } else {
         dispatch(questionsSlice.actions.titleValidate(true))
         dispatch(questionsSlice.actions.durationValidate(true))
      }
   }

   const handleOpenModal = () => {
      formik.setFieldValue('openModal', true)
   }

   const handleCloseModal = () => {
      formik.setFieldValue('openModal', false)
   }
   const handleSaveOption = (title, isTrue) => {
      const newOption = {
         id: Math.random(),
         title,
         isTrue,
      }
      formik.setFieldValue('titleValues', title)
      formik.setFieldValue('options', [...formik.values.options, newOption])
      formik.setFieldValue('checkboxValue', isTrue)
   }

   const handleCheckboxChange = (id, e) => {
      const updatedOptions = formik.values.options.map((option) => {
         if (option.id === id) {
            return {
               ...option,
               isTrue: !option.isTrue,
            }
         }
         return option
      })
      formik.setFieldValue('options', updatedOptions)
      const anyChecked = updatedOptions.some((option) => option.isTrue)
      formik.setFieldValue('checkboxValue', anyChecked)
      if (
         pathname === '/admin/tests/update-question/select-real-english-words'
      ) {
         dispatch(optionEnable({ e, id }))
         setTimeout(() => {
            dispatch(getOptionByQuestionId())
         }, 400)
      }
   }

   const handleDeleteOption = (id) => {
      formik.setFieldValue(
         'options',
         formik.values.options.filter((option) => option.id !== id)
      )
      dispatch(deleteOption(id))
   }

   return (
      <>
         <Container>
            <MiniContainerButton>
               <Button
                  defaultStyle="#3A10E5"
                  className="addNewTestButton"
                  hoverStyle="#3A10E5E5"
                  variant="contained"
                  onClick={handleOpenModal}
               >
                  add options
               </Button>
            </MiniContainerButton>
            <ContainerCreateTest>
               {isLoading ? (
                  <h3 style={{ color: '#6d6b71' }}>Loading...</h3>
               ) : (
                  formik.values?.options.map((option, index) => (
                     <CreateTest key={option.id}>
                        <div style={{ width: '1rem' }}>
                           <MainContainer>
                              <p className="Number-Words">{index + 1}</p>
                              <div className="NumberText">
                                 <span>{option.title}</span>
                              </div>
                           </MainContainer>
                        </div>
                        <div className="InputDelete">
                           <InputRadio
                              variant="CHECKBOX"
                              checkedSwitch={option.isTrue}
                              onChange={(e) =>
                                 handleCheckboxChange(option.id, e)
                              }
                           />
                           <DeleteIcon
                              onClick={() => handleDeleteOption(option.id)}
                           />
                        </div>
                     </CreateTest>
                  ))
               )}
            </ContainerCreateTest>
         </Container>
         {formik.values.openModal && (
            <OptionModal
               open={formik.values.openModal}
               titleValues={formik.values.titleValues}
               setTitleValues={(value) =>
                  formik.setFieldValue('titleValues', value)
               }
               handleCloseModal={handleCloseModal}
               handleSaveOption={handleSaveOption}
               title="Select real English words"
               options={formik.values.options}
               formik={formik}
            />
         )}
         {formik.values.options.length > 0 && (
            <ContainerButtons>
               <Button
                  variant="outlined"
                  hoverStyle="#3A10E5"
                  onClick={() => navigate(-1)}
               >
                  GO BACK
               </Button>
               <Button
                  defaultStyle="#2AB930"
                  hoverStyle="#31CF38"
                  onClick={handleSave}
               >
                  Save
               </Button>
            </ContainerButtons>
         )}
      </>
   )
}

const Container = styled('div')(() => ({
   width: '50rem',
}))
const DeleteIcon = styled(DeleteRealEnglishWord)(() => ({
   cursor: 'pointer',
}))
const ContainerCreateTest = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '10px',
   marginTop: '9px',
   flexWrap: 'wrap',
   paddingTop: '20px',
}))

const CreateTest = styled('div')(() => ({
   border: 'solid 1.53px #D4D0D0',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '14.5rem',
   height: '2.8rem',
   borderRadius: '0.5rem',
   p: { color: 'grey' },
   padding: '0.88rem 1rem 0.81rem 1rem ',
   '.NumberText': {
      display: 'flex',
      justifyContent: 'start',
      span: {
         color: '#4C4859',
      },
   },
   '.InputDelete': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
}))
const MainContainer = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   '.Number-Words': {
      color: '#4C4859',
   },
}))
const MiniContainerButton = styled('div')(() => ({
   marginTop: '2rem',
   display: 'flex',
   justifyContent: 'end',
}))
const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   marginTop: '2rem',
   gap: '1rem',
}))
