/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
// import { useProgressBar } from '../../UI/progressBar/useProgressBar'
// import ProgressBar from '../../UI/progressBar/ProgressBar'
// import { Background } from '../../../layout/Background'
import { MultiplySelect } from '../../UI/MultiplySelect/MultiplySelect'
import Button from '../../UI/Buttons/Button'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'

export const ListenSelectEnglish = () => {
   // const [isButtonDisabled, setIsButtonDisabled] = useState(true)
   const { testComponent, handleNextClick } = useSelector(
      (state) => state.globalTestSlice
   )
   const [selectedWords, setSelectedWords] = useState(testComponent.optionList)
   const [answer, setAnswer] = useState([])

   const dispatch = useDispatch()
   const handleOptionSelect = (selectedWordId) => {
      setSelectedWords((prevWords) =>
         prevWords.map((word) =>
            word.id === selectedWordId ? { ...word } : word
         )
      )
   }

   // const duration = 240

   // const handleTimeUp = () => {
   // setIsButtonDisabled(true)
   // }

   const handleNextButtonClick = () => {
      const data = answer.map((el) => {
         return el.id
      })
      dispatch(addTest({ options: data }))
      handleNextClick()
   }

   // const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   return (
      <ContainerTest>
         {/* <Background> */}
         {/* <ProgressBar timeObject={timeObject} timeProgress={chartPercent} /> */}
         <h2>Select the Real English words in this list</h2>
         <ContainerMultiplySelect>
            <MultiplySelect
               words={selectedWords}
               answer={answer}
               setAnswer={setAnswer}
               onSelect={handleOptionSelect}
               // setIsButtonDisabled={setIsButtonDisabled}
            />
         </ContainerMultiplySelect>
         <hr className="ContainerHr" />
         <ContainerButton>
            <Button
               className="nextButton"
               defaultStyle="#3A10E5"
               hoverStyle="#4E28E8"
               // disabled={isButtonDisabled}
               onClick={() => {
                  handleNextButtonClick()
                  dispatch(globalTestSlice.actions.addCurrentComponent(1))
               }}
            >
               NEXT
            </Button>
         </ContainerButton>
         {/* </Background> */}
      </ContainerTest>
   )
}

const ContainerTest = styled('div')({
   // background: 'white',
   // width: '100vw',
   // height: '100vh',
   h2: {
      marginTop: '3.12rem',
      textAlign: 'center',
      color: '#4C4859',
      fontSize: ' 1.75rem',
   },
   '& .ContainerHr': {
      marginTop: '3.75rem',
      background: '#D4D0D0;',
      border: '1px solid #D4D0D0',
   },
})
const ContainerMultiplySelect = styled('div')({
   marginTop: '3.12rem',
})
const ContainerButton = styled('div')({
   display: 'flex',
   justifyContent: 'end',
   marginTop: '2rem',
   button: {
      width: '9rem',
      height: '2.6rem',
   },
})
