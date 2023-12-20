import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import PauseIcon from '@mui/icons-material/Pause'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import Input from '../UI/Input'
import Button from '../UI/Buttons/Button'
import { ReactComponent as PlayAudioIcon } from '../../assets/icons/playAudioIcon.svg'
import {
   postFileThunk,
   updateQuestion,
} from '../../store/questions/questionsThunk'
import { questionsSlice } from '../../store/questions/questionsSlice'
import Notify from '../UI/Notifay'
import { axiosInstance } from '../../config/axiosInstance'

export const TypeWhatYouHear = () => {
   const { pathname } = useLocation()
   const updateUrl =
      pathname === '/admin/tests/update-question/type-what-you-hear'

   const { title, questionDuration, question } = useSelector(
      (state) => state.questions
   )
   const [audioFile, setAudioFile] = useState(null)
   const [isAudioTrue, setIsAudioTrue] = useState(false)
   const [audio, setAudio] = useState(null)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { testID } = useSelector((state) => state.createTestSlice)

   const formik = useFormik({
      initialValues: {
         quantityInputValue: 0,
         correctAnswer: '',
      },
   })

   const saveHandler = async () => {
      if (title && questionDuration) {
         if (updateUrl) {
            await dispatch(
               updateQuestion({
                  title,
                  statement: 'string',
                  correctAnswer: formik.values.correctAnswer,
                  duration: questionDuration * 60,
                  attempts: formik.values.quantityInputValue,
                  fileUrl: audioFile,
                  passage: 'string',
               })
            )
         } else {
            const data = {
               title,
               duration: questionDuration * 60,
               numberOffReplays: formik.values.quantityInputValue,
               correctAnswer: formik.values.correctAnswer,
               audioFile,
               testID,
            }
            const fileUrl = await dispatch(
               postFileThunk({ file: data.audioFile })
            )
            Notify(
               {
                  sucessTitle: 'Question saved ',
                  successMessage: 'Successfully saved',
                  errorTitle: 'Error',
               },
               axiosInstance.post(
                  `/questions?testId=${data.testID}&questionType=TYPE_WHAT_YOU_HEAR`,
                  {
                     title: data.title,
                     duration: data.duration,
                     attempts: data.numberOffReplays,
                     correctAnswer: data.correctAnswer,
                     fileUrl: fileUrl.payload.data.link,
                  }
               )
            )
         }
         navigate(-1)
      } else {
         dispatch(questionsSlice.actions.titleValidate(true))
         dispatch(questionsSlice.actions.durationValidate(true))
      }
   }

   const playAudio = () => {
      setIsAudioTrue((prev) => !prev)
   }

   useEffect(() => {
      if (updateUrl) {
         dispatch(questionsSlice.actions.addTitle(question.title))
         dispatch(questionsSlice.actions.addTime(question.duration))
         setAudioFile(question.fileUrl)
         formik.setFieldValue('quantityInputValue', question.attempts)
         formik.setFieldValue('correctAnswer', question.correctAnswer)
         if (isAudioTrue) {
            const audio = new Audio(audioFile)
            audio.play()
            setAudio(audio)
            audio.onended = () => {
               setIsAudioTrue(false)
               setAudioFile(null)
            }
         } else if (audio) {
            audio.pause()
            setAudio(null)
         }
      } else if (!updateUrl && audioFile) {
         if (isAudioTrue) {
            const audio = new Audio(URL.createObjectURL(audioFile))
            audio.play()
            setAudio(audio)
         } else if (audio) {
            audio.pause()
            setAudio(null)
         }
      }
   }, [isAudioTrue, question, audioFile])

   return (
      <MainContainer>
         <formik>
            <div className="widthContainer">
               <div className="audioContainer">
                  <div>
                     <label htmlFor="quantity">
                        <p>Number off</p>
                        <p>Replays</p>
                     </label>
                     <input
                        id="quantity"
                        className="Input replaceInput"
                        min="0"
                        type="number"
                        name="quantityInputValue"
                        value={formik.values.quantityInputValue}
                        onChange={formik.handleChange}
                     />
                  </div>
                  <div className="uploadContainer">
                     <Button
                        variant="contained"
                        className="goBackButton"
                        hoverStyle="#4E28E8"
                     >
                        <label htmlFor="fileInput">uppload</label>
                     </Button>
                     <input
                        id="fileInput"
                        type="file"
                        onChange={(e) => setAudioFile(e.target.files[0])}
                     />
                     <Button
                        variant="contained"
                        className="playButton"
                        hoverStyle="#4E28E8"
                        onClick={playAudio}
                     >
                        {isAudioTrue && audioFile ? (
                           <PauseIcon />
                        ) : (
                           <PlayAudioIcon />
                        )}
                     </Button>
                     <label htmlFor="fileInput">
                        {audioFile ? audioFile?.name : 'Выберите аудиофайл'}
                     </label>
                  </div>
               </div>
               <div>
                  <p>Correct Answer</p>
                  <Input
                     border="2.2px solid #D4D0D0"
                     fullWidth
                     name="correctAnswer"
                     className="Input"
                     padding="0.710rem 1.4rem"
                     onChange={formik.handleChange}
                     value={formik.values.correctAnswer}
                  />
               </div>
               <div className="buttons">
                  <Button
                     variant="outlined"
                     className="goBackButton"
                     hoverStyle="#3A10E5"
                     onClick={() => navigate(-1)}
                  >
                     Go back
                  </Button>
                  <Button
                     variant="contained"
                     className="saveButton"
                     defaultStyle="#2AB930"
                     hoverStyle="#31CF38"
                     onClick={() => saveHandler()}
                  >
                     Save
                  </Button>
               </div>
            </div>
         </formik>
      </MainContainer>
   )
}

const MainContainer = styled('div')(() => ({
   '.widthContainer': {
      width: '50rem',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '24px',
      marginTop: '24px',
      '.buttons': {
         display: 'flex',
         justifyContent: 'end',
         gap: '16px',
      },
      '.audioContainer': {
         display: 'flex',
         alignItems: 'end',
         '.replaceInput': {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'textfield',
            width: '49px',
            marginTop: '10px',
            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
               '-webkit-appearance': 'none',
               margin: 0,
            },
         },

         '.uploadContainer': {
            display: 'flex',
            columnGap: '15px',
            alignItems: 'center',
            input: {
               display: 'none',
            },
         },
         input: {
            height: '42px',
            border: '2.2px solid #D4D0D0',
            borderRadius: '8px',
            outline: 'none',
            width: '100%',
            paddingLeft: '22px',
         },
      },
   },
}))
