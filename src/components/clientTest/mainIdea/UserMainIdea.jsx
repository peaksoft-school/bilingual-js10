import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'

export const UserMainIdea = () => {
   const [selectedRadio, setSelectedRadio] = useState(null)
   const navigate = useNavigate()

   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )
   const dispatch = useDispatch()
   const formik = useFormik({
      initialValues: {
         options: [],
      },
      onSubmit: () => {},
   })

   const handleRadioChange = (id) => {
      formik.setFieldValue(
         'options',
         testComponent.optionList.map((el) => el.id === id)
      )
      setSelectedRadio(id)
   }
   const isNextButtonDisabled = !selectedRadio

   const handleNextButtonClick = () => {
      const selectedOption = testComponent.optionList.find(
         (el) => el.id === selectedRadio
      )
      dispatch(
         addTest({
            questionId: testComponent.id,
            optionsId: [selectedOption.id],
         })
      )
      if (questions.length === currentComponent + 1) {
         navigate('/user/test-list/send-the-results')
      } else {
         dispatch(globalTestSlice.actions.addCurrentComponent(1))
      }
   }

   function handleTimeUp() {}
   const { duration } = testComponent
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   useEffect(() => {
      if (+timeObject.minute === 0) {
         if (+timeObject.seconds === 0) {
            dispatch(globalTestSlice.actions.addCurrentComponent(1))
         }
      }
   }, [+timeObject.seconds])

   return (
      <form onSubmit={formik.handleSubmit}>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
         <ContainerSelectTest>
            <ContainerUserTest>
               <ContainerTextArea>
                  <div className="containerPassage">
                     <span>PASSAGE</span>
                  </div>
                  <div className="ContainerParagraf">
                     <p>{testComponent.passage}</p>
                  </div>
               </ContainerTextArea>
               <ContainerSelectRadio>
                  <p className="passageMainIdea">
                     Select the main idea for the passage
                  </p>
                  {testComponent.optionList.map((el) => (
                     <div key={el.id} className="ContainerCreateUserTest">
                        <div
                           className="ContainCreatTest"
                           style={{
                              border:
                                 selectedRadio === el.id
                                    ? '2px solid #3A10E5'
                                    : '1px solid #D4D0D0',
                              background:
                                 selectedRadio === el.id
                                    ? '#EAF4FF'
                                    : 'transparent',
                           }}
                        >
                           <div className="ContainerRadio">
                              <InputRadio
                                 variant="RADIO"
                                 checkedSwitch={selectedRadio === el.id}
                                 onChange={() => handleRadioChange(el.id)}
                              />
                              <p style={{ color: '#4C4859' }}>{el.title}</p>
                           </div>
                        </div>
                     </div>
                  ))}
                  <Button
                     disabled={isNextButtonDisabled}
                     defaultStyle="#3A10E5"
                     hoverStyle="#4E28E8"
                     className="nextButton"
                     variant="contained"
                     type="submit"
                     onClick={handleNextButtonClick}
                  >
                     NEXT
                  </Button>
               </ContainerSelectRadio>
            </ContainerUserTest>
         </ContainerSelectTest>
      </form>
   )
}
const ContainerUserTest = styled('div')({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '2.5rem',
   marginTop: '3.12rem',
   button: {
      width: '9rem',
      height: '2.62rem',
      marginTop: '1.8rem',
   },
})
const ContainerSelectTest = styled('div')({
   '.ContainCreatTest': {
      display: 'flex',
      alignItems: 'start',
      borderRadius: '0.5rem',
      border: '1px solid #D4D0D0',
      background: '#fff',
      padding: '0.88rem',
      width: '25.68rem',
      height: '100%',
      '.ContainerRadio': {
         display: 'flex',
         alignItems: 'center',
         gap: '1rem',
      },
   },
})
const ContainerTextArea = styled('div')({
   border: '1px solid #D4D0D0',
   borderRadius: '0.5rem',
   background: '#F7F7F7',
   width: '34.68rem',
   height: '26.43rem',
   '.ContainerParagraf': {
      padding: '2.9rem 3.13rem 3rem 1.06rem',
      width: '100%',
      height: '100%',
      color: '#4C4859',
      fontSize: '1rem',
      fontWeight: '400',
   },
   '.containerPassage': {
      borderBottom: '1px solid #D4D0D0',
      padding: '1rem 29rem 1rem 1.13rem',
      color: ' #4C4859',
      fontSize: '0.95rem',
      fontWeight: 500,
   },
})
const ContainerSelectRadio = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.88rem',
   justifyContent: 'center',
   alignItems: 'end',
   '.passageMainIdea': {
      color: '#4C4859',
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: '3.63rem',
      width: '26rem',
   },
})
