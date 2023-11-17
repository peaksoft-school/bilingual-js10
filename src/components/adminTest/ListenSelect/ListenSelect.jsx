import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Form, FormikProvider, useFormik } from 'formik'
import React, { useRef } from 'react'
import { postListenSelect } from '../../../store/ListenSelect/listenSelectThunk'
import { Delete, VolumeForEnglishWord } from '../../../assets'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import { ListenModal } from './ListenModal'
// import { axiosFile } from '../../../config/axiosfile'

export const ListenSelect = () => {
   const dispatch = useDispatch()
   const SaveFile = (values) => {
      dispatch(
         postListenSelect({
            values: values.titleValues,
            file: values.fileUrl,
            isTrue: values.isTrue,
         })
      )
   }

   const formik = useFormik({
      initialValues: {
         titleValues: '',
         selectedFile: '',
         isModalOpen: false,
         options: [],
         fileUrl: '',
         audioPlaying: null,
         isTrue: (value) => {
            console.log(value)
         },
      },
      onSubmit: (values) => {
         console.log('Dastan', values)
         SaveFile(values)
      },
   })

   // const getFiles = createAsyncThunk('files/getFiles', async () => {
   //    try {
   //       const response = await axiosFile.get(
   //          '/api/questions/getOptionsByQuestionId?questionId=97'
   //       )
   //       setOptions(response.data)
   //    } catch (error) {
   //       console.error(error)
   //    }
   // })

   const addedOptionsModal = () => {
      formik.setFieldValue('isModalOpen', true)
      const Url = new URL(window.location)
      Url.searchParams.set('modal', 'true')
      window.history.pushState({}, '', Url)
   }
   const handleClose = () => {
      formik.setFieldValue('isModalOpen', false)
      const Url = new URL(window.location)
      Url.searchParams.delete('modal')
      window.history.pushState({}, '', Url)
   }
   const handleSave = () => {
      const newOption = {
         id: new Date(),
         audioUrl: formik.values.fileUrl,
         title: formik.values.titleValues,
         isTrue: false,
      }
      if (formik.values) {
         formik.setValues({
            ...formik.values,
            options: [...formik.values.options, newOption],
            titleValues: '',
            selectedFile: '',
         })
         handleClose()
      }
   }
   const fileInputRef = useRef(null)
   const handleClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click()
      }
   }
   const handleFile = (event) => {
      const file = event.target.files[0]
      if (file) {
         formik.setValues({
            ...formik.values,
            fileUrl: file,
         })
      }
   }
   const handlePlayAudio = (id) => {
      const audioFile = formik.values.fileUrl
      if (audioFile) {
         if (
            formik.values.audioPlaying ||
            (formik.values.audioPlaying && formik.values.audioPlaying.id !== id)
         ) {
            formik.values.audioPlaying.audio.pause()
            formik.setValues({ ...formik.values, audioPlaying: null })
            if (
               formik.values.audioPlaying &&
               formik.values.audioPlaying.id === id
            ) {
               return
            }
         }
         const audio = new Audio(URL.createObjectURL(audioFile))
         audio.play()
         audio.addEventListener('ended', () => {
            formik.setValues({ ...formik.values, audioPlaying: null })
         })
         formik.setValues({ ...formik.values, audioPlaying: { audio, id } })
      }
   }
   const removeElement = (id) => {
      const newOption = formik.values.options.filter(
         (option) => option.id !== id
      )
      formik.setValues({ ...formik.values, options: newOption })
   }

   return (
      <FormikProvider value={formik}>
         <Form onSubmit={formik.handleSubmit}>
            <Container>
               <div className="ContainButton">
                  <Button
                     hoverStyle="#3A10E5E5"
                     defaultStyle="#3A10E5"
                     className="addNewTestButton"
                     variant="contained"
                     onClick={addedOptionsModal}
                  >
                     ADD OPTIONS
                  </Button>
               </div>
               <div className="CreatTests">
                  {formik.values.options?.map((el, index) => (
                     <div key={el.id} className="CreatTest">
                        <AudioContainer>
                           <p>{index + 1}</p>
                           <VolumeForEnglishWord
                              onClick={() => handlePlayAudio(el.id)}
                              style={{
                                 fill:
                                    formik.values.audioPlaying?.id === el.id
                                       ? '#3A10E5 '
                                       : '#655F5F ',
                              }}
                           />
                           <p>{el.title}</p>
                        </AudioContainer>
                        <ContainDeleteChek>
                           <InputRadio
                              variant="CHECKBOX"
                              onChange={(e) =>
                                 formik.setValues({
                                    ...formik.values,
                                    isTrue: e.target.value === 'true',
                                 })
                              }
                           />
                           <Delete
                              onClick={() => removeElement(el.id)}
                              className="DeleteIcon"
                           />
                        </ContainDeleteChek>
                     </div>
                  ))}
               </div>
               {formik.values.options.length > 0 ? (
                  <div className="ControlButton">
                     <Button
                        variant="outlined"
                        hoverStyle="#3A10E5"
                        className="Button"
                        onClick={handleClose}
                     >
                        GO BACK
                     </Button>
                     <Button
                        defaultStyle="#2AB930"
                        hoverStyle="#31CF38"
                        className="saveButton"
                        variant="contained"
                        type="submit"
                     >
                        SAVE
                     </Button>
                  </div>
               ) : null}
               {formik.values.isModalOpen && (
                  <ListenModal
                     open={formik.values.isModalOpen}
                     handleClose={handleClose}
                     handleClick={handleClick}
                     handleFile={handleFile}
                     formik={formik}
                     handleSave={handleSave}
                     fileInputRef={fileInputRef}
                  />
               )}
            </Container>
         </Form>
      </FormikProvider>
   )
}

const Container = styled('div')(() => ({
   p: {
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '500',
      color: ' #4B4759',
      fontFamly: 'Poppins',
   },
   '.DeleteIcon': {
      width: '1.25rem',
      height: '1.25rem',
   },
   '.ContainButton': {
      display: 'flex',
      justifyContent: 'end',
      marginTop: '2rem',
      fontFamly: 'Poppins',
      fontWeight: '800',
      marginRight: '0.3rem',
   },
   '.CreatTests': {
      display: 'flex',
      justifyContent: 'center',
      rowGap: '1.12rem',
      columnGap: '1.12rem',
      flexWrap: 'wrap',
      marginTop: '2rem',
      fontFamly: 'Poppins',
      ul: {
         fontSize: '16px',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: 'normal',
         color: '#4C4859',
      },
   },
   '.CreatTest': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      border: '1.53px solid #D4D0D0',
      width: '15rem',
      height: '3rem',
      borderRadius: '0.5rem',
      padding: '0.80rem 0.85rem 0.80rem 0.85rem',
      fontFamly: 'Poppins',
   },
   '.ControlButton': {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '2.5rem',
      fontFamly: 'Poppins',
      marginRight: '0.3rem',
   },
}))
const ContainDeleteChek = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '4px',
   cursor: 'pointer',
}))
const AudioContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '15px',
   cursor: 'pointer',
}))
