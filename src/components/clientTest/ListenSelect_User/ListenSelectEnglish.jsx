/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MultiplySelect } from '../../UI/MultiplySelect/MultiplySelect'
import Button from '../../UI/Buttons/Button'
import {
   addTest,
   globalTestSlice,
} from '../../../store/userTest/global-test-slice'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

export const ListenSelectEnglish = () => {
   const [isButtonDisabled, setIsButtonDisabled] = useState(true)
   const [answer, setAnswer] = useState([])
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { testComponent, questions, currentComponent } = useSelector(
      (state) => state.globalTestSlice
   )
   const [selectedWords, setSelectedWords] = useState([
      ...testComponent.optionList,
   ])

   const handleOptionSelect = (selectedWordId) => {
      setSelectedWords((prevWords) =>
         prevWords.map((word) =>
            word.id === selectedWordId ? { ...word } : word
         )
      )
   }

   const handleNextButtonClick = () => {
      const data = answer.map((el) => {
         return el.id
      })
      dispatch(
         addTest({
            questionId: testComponent.id,
            optionsId: data,
         })
      )
      if (questions.length === currentComponent + 1) {
         navigate('/user/test-list/send-the-results')
      } else {
         dispatch(globalTestSlice.actions.addCurrentComponent(1))
      }
   }

   function handleTimeUp() {
      setIsButtonDisabled(true)
   }
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
      <ContainerTest>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
         <p className="RealEnglish">
            Select the Real English words in this list
         </p>
         <ContainerMultiplySelect>
            <MultiplySelect
               words={selectedWords}
               answer={answer}
               setAnswer={setAnswer}
               onSelect={handleOptionSelect}
               setIsButtonDisabled={setIsButtonDisabled}
            />
         </ContainerMultiplySelect>
         <hr className="ContainerHr" />
         <ContainerButton>
            <Button
               className="nextButton"
               defaultStyle="#3A10E5"
               hoverStyle="#4E28E8"
               disabled={isButtonDisabled}
               onClick={handleNextButtonClick}
            >
               NEXT
            </Button>
         </ContainerButton>
      </ContainerTest>
   )
}

const ContainerTest = styled('div')({
   '.RealEnglish': {
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
