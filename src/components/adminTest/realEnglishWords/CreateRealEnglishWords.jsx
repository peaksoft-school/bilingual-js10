import React from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import OptionModal from './AddOptionModal'
import { InputRadio } from '../../UI/InputRadio'
import { DeleteRealEnglishWord } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import { axiosInstance } from '../../../config/axiosInstance'
import Notify from '../../UI/Notifay'

export const AdminCreateRealEnglishWord = () => {
   const { testID } = useSelector((state) => state.createTestSlice)
   const { title, questionDuration } = useSelector((state) => state.questions)
   const navigate = useNavigate()
   const formik = useFormik({
      initialValues: {
         titleValues: '',
         options: [],
         checkboxValue: true,
         openModal: false,
      },
      onSubmit: async (values) => {
         try {
            Notify(
               {
                  sucessTitle: 'The words have been preserved!',
                  successMessage: 'Successfully these words were saved!',
                  errorTitle: 'Error',
               },
               axiosInstance.post(
                  `/questions?testId=${testID}&questionType=SELECT_REAL_ENGLISH_WORD`,
                  {
                     title,
                     questionDuration,
                     options: values.options.map((el) => ({
                        title: el.title,
                        isTrue: el.checked,
                     })),
                  }
               )
            )
            navigate('/admin/QuestionsPage')
         } catch (error) {
            setError(error)
         }
      },
   })
   const handleOpenModal = () => {
      formik.setFieldValue('openModal', true)
   }

   const handleCloseModal = () => {
      formik.setFieldValue('openModal', false)
   }
   const handleSaveOption = (title, checked) => {
      const newOption = {
         id: Math.random(),
         title,
         checked,
      }
      formik.setFieldValue('titleValues', title)
      formik.setFieldValue('options', [...formik.values.options, newOption])
      formik.setFieldValue('checkboxValue', checked)
   }

   const handleCheckboxChange = (id) => {
      const updatedOptions = formik.values.options.map((option) => {
         if (option.id === id) {
            return {
               ...option,
               checked: !option.checked,
            }
         }
         return {
            ...option,
            checked: false,
         }
      })
      formik.setFieldValue('options', updatedOptions)
      const anyChecked = updatedOptions.some((option) => option.checked)
      formik.setFieldValue('checkboxValue', anyChecked)
   }

   const handleDeleteOption = (id) => {
      formik.setFieldValue(
         'options',
         formik.values.options.filter((option) => option.id !== id)
      )
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
               {formik.values?.options.map((option, index) => (
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
                           checkedSwitch={option.checked}
                           onChange={() => handleCheckboxChange(option.id)}
                        />
                        <DeleteIcon
                           onClick={() => handleDeleteOption(option.id)}
                        />
                     </div>
                  </CreateTest>
               ))}
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
                  onClick={formik.handleSubmit}
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
      p: {
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
