import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

export const SelectTheBestTitle = () => {
   const [selectedRadio, setSelectedRadio] = useState(null)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )

   const formik = useFormik({
      initialValues: {
         options: [],
      },
   })

   const SendingToTheServer = () => {
      const newTest = testComponent.optionList.map((el) => ({
         id: el.id,
         title: el.title,
         isTrue: el.isTrue,
      }))
      const answer = newTest.find((el) => el.isTrue === true)
      dispatch(
         addTest({
            questionId: testComponent.id,
            optionsId: [answer.id],
         })
      )

      if (questions.length === currentComponent + 1) {
         navigate('/user/test-list/send-the-results')
      } else {
         dispatch(globalTestSlice.actions.addCurrentComponent(1))
      }
   }

   const handleRadioChange = (id) => {
      formik.setFieldValue(
         'options',
         testComponent.optionList.map((el) => el.id === id)
      )
      setSelectedRadio(id)
   }
   const isNextButtonDisabled = !selectedRadio

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
         <ContainerSelectTest>
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
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
                  <p className="passageBestTitle">
                     Select the best title for the passage
                  </p>
                  <div className="ContainerCreateUserTest">
                     {testComponent.optionList &&
                        testComponent.optionList.map((el) => (
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
                                    <p className="NameTitle">{el.title}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                  </div>
                  <Button
                     disabled={isNextButtonDisabled}
                     defaultStyle="#3A10E5"
                     hoverStyle="#4E28E8"
                     className="nextButton"
                     variant="contained"
                     type="submit"
                     padding="0.81rem 3.5rem"
                     onClick={SendingToTheServer}
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
   marginTop: '3.15rem',
   '.NextButton': {
      width: '9rem',
      height: '2.62rem',
      marginTop: '2rem',
   },
   '.ContainerCreateUserTest': {
      marginTop: '10px',
      '& > div': {
         marginTop: '11px',
      },
   },
   button: {
      marginTop: '2rem',
   },
})
const ContainerSelectTest = styled('div')({
   '.ContainerBackground': {
      padding: '2.69rem',
   },
   '.ContainCreatTest': {
      display: 'flex',
      alignItems: 'start',
      borderRadius: '0.5rem',
      border: '1px solid #D4D0D0',
      background: '#fff',
      padding: '0.88rem',
      width: '24.68rem',
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
   '.ContainerParagraf': {
      padding: '2.9rem 3.13rem 3rem 1.06rem',
      width: '34.68rem',
      height: '22.37rem',
      color: '#4C4859',
      fontSize: '1rem',
      fontWeight: '400',
   },
   '.containerPassage': {
      borderBottom: '1px solid #D4D0D0',
      padding: '1rem 29rem 1rem 1.13rem',
      color: ' #4C4859',
      fontSize: '1.1rem',
      fontWeight: 500,
   },
})
const ContainerSelectRadio = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.88rem',
   justifyContent: 'center',
   alignItems: 'end',
   '.passageBestTitle': {
      color: '#4C4859',
      fontSize: '1.45rem',
      fontWeight: 400,
      lineHeight: '2.63rem',
   },
})
