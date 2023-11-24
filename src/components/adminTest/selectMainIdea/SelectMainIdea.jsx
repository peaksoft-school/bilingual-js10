import { Formik, useFormik } from 'formik'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import { Delete } from '../../../assets'
import TextArea from '../../UI/textarea/TextArea'
import { validationPassage } from '../../../utils/helpers/validate/authValidate'
import { SelectBestModal } from '../SelectTheBestTitle/SelectBestModal'
import { axiosInstance } from '../../../config/axiosInstance'
import Notify from '../../UI/Notifay'

export const SelectMainIdea = () => {
   const { testID } = useSelector((state) => state.createTestSlice)
   const { title, questionDuration } = useSelector((state) => state.questions)
   const navigate = useNavigate()

   const formik = useFormik({
      initialValues: {
         passage: '',
         titleValues: '',
         options: [],
         checkboxValue: false,
         openModal: false,
      },
      validationSchema: validationPassage,
      onSubmit: async (values) => {
         try {
            Notify(
               {
                  sucessTitle: 'These offers have been saved!',
                  successMessage: 'Successfully these offers have been saved!',
                  errorTitle: 'Error',
               },
               axiosInstance.post(
                  `/questions?testId=${testID}&questionType=SELECT_THE_MAIN_IDEA`,
                  {
                     passage: values.passage,
                     title,
                     questionDuration,
                     options: values.options.map((el) => {
                        return {
                           title: el.title,
                           isTrue: el.checked,
                        }
                     }),
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
      const Url = new URL(window.location)
      Url.searchParams.set('modal', 'true')
      window.history.pushState({}, '', Url)
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
   const removeElement = (id) => {
      formik.setFieldValue(
         'options',
         formik.values.options.filter((option) => option.id !== id)
      )
   }

   const handleClose = () => {
      formik.setFieldValue('openModal', false)
      const Url = new URL(window.location)
      Url.searchParams.delete('modal')
      window.history.pushState({}, '', Url)
   }
   const handleSave = async (e) => {
      e.preventDefault()
      const newOption = {
         id: Math.random(),
         title: formik.values.titleValues,
         checked: formik.values.checkboxValue,
      }

      formik.setFieldValue('titleValues', '')
      formik.setFieldValue('options', [...formik.values.options, newOption])
      formik.setFieldValue('checkboxValue', false)
      handleClose()
   }

   return (
      <Formik onSubmit={formik.handleSubmit}>
         {() => (
            <Container>
               <WidthContainer>
                  <div className="ContainTextArea">
                     <span className="ContainSpan">Passage</span>
                     <TextArea
                        name="passage"
                        value={formik.values.passage}
                        onChange={formik.handleChange}
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
                        onClick={handleOpenModal}
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
                                 checkedSwitch={el.checked}
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
                           onClick={formik.handleSubmit}
                           type="submit"
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
