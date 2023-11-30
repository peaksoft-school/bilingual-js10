import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'
import { Background } from '../../../layout/Background'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import { addTest } from '../../../store/userTest/global-test-slice'

export const UserMainIdea = () => {
   const passage = `Sed ut perspiciatis unde omnis iste natus error sit
                           voluptatem accusantium doloremque laudantium, totam
                           rem aperiam, eaque ipsa quae ab illo inventore
                           veritatis et quasi architecto beatae vitae dicta sunt
                           explicabo. Nemo enim ipsam voluptatem quia voluptas
                           sit aspernatur aut odit aut fugit, sed quia
                           consequuntur magni dolores eos qui ratione voluptatem
                           sequi nesciunt. Neque porro quisquam est, qui dolorem
                           ipsum quia dolor sit amet, consectetur, adipisci
                           velit, sed quia non numquam eius modi tempora
                           incidunt ut labore et dolore magnam aliquam quaerat
                           voluptatem`
   const arr = [
      {
         id: 1,
         title: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
      },
      {
         id: 2,
         title: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
      },
      {
         id: 3,
         title: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
      },
      {
         id: 4,
         title: 'There are many variations of passages of Lorem Ipsum available, but the majority have.',
      },
   ]

   const [selectedRadio, setSelectedRadio] = useState(null)
   const dispatch = useDispatch()
   const formik = useFormik({
      initialValues: {
         options: [],
      },
      onSubmit: (values) => {
         console.log(values.options)
      },
   })

   const duration = 120
   function handleTimeUp() {
      // setTimeout(() => {
      //    console.log('nextPage')
      // }, 10000)
   }
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)
   const handleRadioChange = (id) => {
      formik.setFieldValue(
         'options',
         arr.map((el) => el.id === id)
      )
      setSelectedRadio(id)
   }
   const isNextButtonDisabled = !selectedRadio

   const handleNextButtonClick = () => {
      const selectedOption = arr.find((el) => el.id === selectedRadio)
      dispatch(addTest({ options: [{ id: selectedOption.id }] }))
   }

   return (
      <form onSubmit={formik.handleSubmit}>
         <ContainerSelectTest>
            <Background className="ContainerBackground">
               <ProgressBar
                  timeObject={timeObject}
                  timeProgress={chartPercent}
               />
               <ContainerUserTest>
                  <ContainerTextArea>
                     <div className="containerPassage">
                        <span>PASSAGE</span>
                     </div>
                     <div className="ContainerParagraf">
                        <p>{passage}</p>
                     </div>
                  </ContainerTextArea>
                  <ContainerSelectRadio>
                     <p className="passageMainIdea">
                        Select the main idea for the passage
                     </p>
                     {arr.map((el) => (
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
                                    className="ContainerInputRadio"
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
                        variant="contained"
                        type="submit"
                        className="nextButton"
                        onClick={() => {
                           handleNextButtonClick()
                        }}
                     >
                        NEXT
                     </Button>
                  </ContainerSelectRadio>
               </ContainerUserTest>
            </Background>
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
   '.nextButton': {
      alignSelf: 'flex-end',
      width: '9rem',
      marginTop: '2rem',
   },
   button: {
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
      height: '28rem',
      color: '#4C4859',
      fontSize: '1rem',
      fontWeight: '400',
   },
   '.containerPassage': {
      borderBottom: '1px solid #D4D0D0',
      padding: '1rem 29rem 1rem 1.13rem',
      color: ' #4C4859',
      fontSize: '1rem',
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
      lineHeight: '2.63rem',
   },
})
