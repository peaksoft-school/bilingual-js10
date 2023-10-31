import { styled } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import Button from '../../UI/Buttons/Button'
import OptionModal from '../addOptionModal/AddOptionModal'
import { InputRadio } from '../../UI/InputRadio'
import { DeleteRealEnglishWord } from '../../../assets'
import TextArea from '../../UI/textarea/TextArea'

export const CreateSelectMainIdea = () => {
   const formik = useFormik({
      initialValues: {
         isModalOpen: false,
         options: [],
         text: '',
      },
      onSubmit: (values) => {
         const dataArray = [{ Passage: values.text }, ...values.options]
         console.log(dataArray)
      },
   })

   const handleOpenModal = () => {
      formik.setFieldValue('isModalOpen', true)
      const url = new URL(window.location)
      url.searchParams.set('modal', 'true')
      window.history.pushState({}, '', url)
   }

   const handleCloseModal = () => {
      formik.setFieldValue('isModalOpen', false)
      const url = new URL(window.location)
      url.searchParams.delete('modal')
      window.history.pushState({}, '', url)
   }

   const handleSaveOption = (newOption, isTrue) => {
      const { options } = formik.values
      if (!options.some((option) => option.text === newOption)) {
         const optionId = Math.random()
         const option = { id: optionId, text: newOption, isTrue }
         if (options.length < 6) {
            formik.setFieldValue('options', [...options, option])
         }
      }
      handleCloseModal()
   }
   const handleSave = (event) => {
      event.preventDefault()
      const dataArray = [
         { Passage: formik.values.text },
         ...formik.values.options,
      ]
      console.log(dataArray)
   }
   const handleCheckboxChange = (index) => {
      const { options } = formik.values
      const updatedOptions = [...options]
      updatedOptions[index].isTrue = !updatedOptions[index].isTrue
      formik.setFieldValue('options', updatedOptions)
   }

   const handleDeleteOption = (optionId) => {
      const { options } = formik.values
      const updatedOptions = options.filter((option) => option.id !== optionId)
      formik.setFieldValue('options', updatedOptions)
   }

   return (
      <form onSubmit={formik.handleSubmit}>
         <Container>
            <Text>Passage</Text>
            <TextAreaStyled
               name="text"
               value={formik.values.text}
               onChange={formik.handleChange}
               fullWidth
               multiline
            />

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
            {formik.values.isModalOpen && (
               <OptionModal
                  open={formik.values.isModalOpen}
                  handleCloseModal={handleCloseModal}
                  onSaveOption={handleSaveOption}
                  titleInput="Select the main idea"
               />
            )}
            <ContainerCreateTest>
               {formik.values.options.map((option, index) => (
                  <CreateTest key={option.id}>
                     <div style={{ width: '1rem' }}>
                        <MainContainer>
                           <span className="Number-Words">{index + 1}</span>
                           <div className="NumberText">
                              <OptionText>{option.text}</OptionText>
                           </div>
                        </MainContainer>
                     </div>
                     <div className="InputDelete">
                        <InputRadio
                           variant="RADIO"
                           checked={option.isTrue}
                           onChange={() => handleCheckboxChange(index)}
                        />
                        <DeleteIcon
                           onClick={() => handleDeleteOption(option.id)}
                        />
                     </div>
                  </CreateTest>
               ))}
            </ContainerCreateTest>
            {formik.values.options.length > 0 && (
               <ContainerButtons>
                  <Button
                     variant="outlined"
                     hoverStyle="#3A10E5"
                     onClick={handleCloseModal}
                  >
                     GO BACK
                  </Button>
                  <Button
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     type="submit"
                     onClick={handleSave}
                  >
                     Save
                  </Button>
               </ContainerButtons>
            )}
         </Container>
      </form>
   )
}

const Text = styled('span')(() => ({
   color: '#4C4859',
   fontfamily: 'DINNextRoundedLTW04-Medium',
   fontSize: '1rem',
   fontWeight: '500',
   lineHeight: '1rem',
}))
const OptionText = styled('span')(() => ({
   wordBreak: 'break-word',
   width: '42rem',
}))
const TextAreaStyled = styled(TextArea)(() => ({
   marginTop: '1rem',
}))
const MiniContainerButton = styled('div')(() => ({
   marginTop: '2rem',
   display: 'flex',
   justifyContent: 'end',
}))

const Container = styled('div')(() => ({
   marginTop: '1.7rem',
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
   width: '100%',
   borderRadius: '0.5rem',
   padding: '0.88rem 1rem 0.81rem 1rem ',
   '.NumberText': {
      display: 'flex',
      span: {
         color: '#4C4859',
      },
   },
   '.InputDelete': {
      gap: '1rem',
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

const ContainerButtons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'end',
   marginTop: '1rem',
   gap: '1rem',
}))
