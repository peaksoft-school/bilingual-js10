/* eslint-disable max-len */

import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProgressBar from '../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../components/UI/progressBar/useProgressBar'
import { Background } from '../../layout/Background'
import { axiosInstance } from '../../config/axiosInstance'
import Button from '../../components/UI/Buttons/Button'

import { UserTypeWhatYouHear } from '../../components/clientTest/typeWUHear/UserTypeWhatYouHear'
import { UserRespondInAtleastNwords } from '../../components/clientTest/RespondInAtleastNwords/UserRespondInAtleastNwords'
import { ListenSelectEnglish } from '../../components/clientTest/ListenSelect_User/ListenSelectEnglish'
import { UserRealEnglishWord } from '../../components/clientTest/UserRealEnglishWord/UserRealEnglishWord'
import { SelectTheBestTitle } from '../../components/clientTest/SelectTheBest/SelectTheBestTitle'
import HighLightAnswerUser from '../../components/clientTest/highlightAns/HighLightAnswerUser'
import DescrbImgUsr from '../../components/clientTest/describeImg/DescrbImgUsr'
import Recording from '../../components/clientTest/recording/Recording'
import { UserMainIdea } from '../../components/clientTest/mainIdea/UserMainIdea'
import { SendTheResults } from '../../components/clientTest/sendTheResults/SendTheResults'

export const PassTest = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { testID } = useSelector((state) => state.typeTest.testID)
   const [currentComponent, setCurrentComponent] = useState(1)

   const getQuestionTest = async () => {
      try {
         const response = await axiosInstance.get(
            `/tests/getAllQuestionsByTestId?testId=${testID}`
         )
         dispatch(typeTest.actions.addTestsArr(response.data))
      } catch (error) {
         console.log(error.message)
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
   //!

   const nextComponent = () => {
      setCurrentComponent((prevComponent) => prevComponent + 1)
   }

   let currentComponentElement
   switch (currentComponent) {
      case 1:
         currentComponentElement = <UserTypeWhatYouHear />
         break
      case 2:
         currentComponentElement = <UserRespondInAtleastNwords />
         break
      case 3:
         currentComponentElement = <ListenSelectEnglish />
         break
      case 4:
         currentComponentElement = <UserRealEnglishWord />
         break
      case 5:
         currentComponentElement = <SelectTheBestTitle />
         break
      case 6:
         currentComponentElement = <HighLightAnswerUser />
         break
      case 7:
         currentComponentElement = <DescrbImgUsr />
         break
      case 8:
         currentComponentElement = <Recording />
         break
      case 9:
         currentComponentElement = <UserMainIdea />
         break
      default:
         currentComponentElement = <SendTheResults />
   }

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
            <Button onClick={nextComponent}>next</Button>
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
