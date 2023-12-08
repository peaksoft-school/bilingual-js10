/* eslint-disable import/named */
/* eslint-disable max-len */
// import { styled } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../components/UI/progressBar/useProgressBar'
import { Background } from '../../layout/Background'
import { axiosInstance } from '../../config/axiosInstance'
import Button from '../../components/UI/Buttons/Button'
import { typeTest } from '../../store/userTest/typeTesrtSlice'
import {
   ComponentMapping,
   QuestionTypes,
} from '../../utils/helpers/passTest/passTest'

export const PassTest = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [error, setError] = useState(null)
   const { testID } = useSelector((state) => state.typeTest)

   const getQuestionTest = async () => {
      try {
         const response = await axiosInstance.get(
            `/tests/getAllQuestionsByTestId?testId=${testID}`
         )
         dispatch(typeTest.actions.addTestsArr(response.data))
      } catch (error) {
         setError(error.message)
      }
   }

   useEffect(() => {
      getQuestionTest()
   }, [])

   function handleTimeUp() {
      // setTimeout(() => {}, 10000)
   }
   const duration = 60
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   const currentComponentElement = ComponentMapping[QuestionTypes]

   return (
      <div>
         <ButtonContainer>
            <Button
               className="logOutButton"
               variant="outlined"
               defaultStyle="white"
               hoverStyle="blue"
               onClick={() => navigate(-2)}
            >
               QUIT TEST
            </Button>
         </ButtonContainer>
         <Background>
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
            {currentComponentElement}
            <Button
               variant="outlined"
               defaultStyle="white"
               hoverStyle="blue"
               onClick={ComponentMapping.next}
            >
               next
            </Button>
            {error && (
               <div style={{ color: 'red', marginTop: '1rem' }}>
                  An error occurred:
               </div>
            )}
         </Background>
      </div>
   )
}
const ButtonContainer = styled('div')`
   display: flex;
   justify-content: end;
   margin-top: 2rem;
   margin-right: 2rem;
`
