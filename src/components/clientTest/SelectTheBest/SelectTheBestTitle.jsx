import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'

export const SelectTheBestTitle = () => {
   const [selectedRadio, setSelectedRadio] = useState(null)
   const dispatch = useDispatch()
   const { testComponent, handleNextClick } = useSelector(
      (state) => state.globalTestSlice
   )

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
      dispatch(addTest({ options: [selectedOption.id] }))
      handleNextClick()
   }

   return (
      <form onSubmit={formik.handleSubmit}>
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
                     Select the best title for the passage
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
                     onClick={() => {
                        handleNextButtonClick()
                        dispatch(globalTestSlice.actions.addCurrentComponent(1))
                     }}
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
   button: {
      alignSelf: 'flex-end',
      width: '9rem',
      marginTop: '2rem',
   },
   '.ContainerInputRadio': {
      paddingTop: '20px',
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
      width: '26.68rem',
      '.ContainerRadio': {
         display: 'flex',
         alignItems: 'start',
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
      width: '100%',
      height: '23.2rem',
      color: '#4C4859',
      fontSize: '1rem',
      fontWeight: '400',
   },
   '.containerPassage': {
      borderBottom: '1px solid #D4D0D0',
      padding: '1rem 29rem 1rem 1.13rem',
      color: ' #4C4859',
      fontSize: '0.90rem',
      fontWeight: 500,
      lineHeight: '1.24rem',
   },
})
const ContainerSelectRadio = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   '.passageMainIdea': {
      color: '#4C4859',
      fontSize: '1.3rem',
      fontWeight: 420,
      lineHeight: '3.63rem',
   },
})
