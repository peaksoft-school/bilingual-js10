import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import Button from '../../UI/Buttons/Button'
import { InputRadio } from '../../UI/InputRadio'
import { addTest } from '../../../store/userTest/global-test-slice'

export const SelectTheBestTitle = () => {
   const passage = ` Sed ut perspiciatis unde omnis iste natus error sit
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
         title: 'nurlan',
      },
      {
         id: 2,
         title: 'renat',
      },
      {
         id: 3,
         title: 'dasi012',
      },
      {
         id: 4,
         title: 'gul',
      },
   ]

   const [selectedRadio, setSelectedRadio] = useState(null)
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         options: [],
      },
      onSubmit: (values) => {
         console.log(values)
      },
   })

   const SendingToTheServer = () => {
      const newTest = arr.map((el) => ({
         passage,
         title: el.title,
         isTrue: formik.values.options[el.id - 1],
      }))
      const answer = newTest.find((el) => el.isTrue === true)
      dispatch(addTest(answer))
   }

   const handleRadioChange = (id) => {
      formik.setFieldValue(
         'options',
         arr.map((el) => el.id === id)
      )
      setSelectedRadio(id)
   }
   const isNextButtonDisabled = !selectedRadio

   return (
      <form onSubmit={formik.handleSubmit}>
         <ContainerSelectTest>
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
                  <p className="passageBestTitle">
                     Select the best title for the passage
                  </p>
                  <div className="ContainerCreateUserTest">
                     {arr.map((el) => (
                        <div key={el.id}>
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
                     onClick={() => {
                        SendingToTheServer()
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
      width: '25.68rem',
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
      lineHeight: '1.63rem',
   },
})
