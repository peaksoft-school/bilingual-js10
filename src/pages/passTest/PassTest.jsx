import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Background } from '../../layout/Background'
import Button from '../../components/UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'
import ProgressBar from '../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../components/UI/progressBar/useProgressBar'
import UserRealEnglishWord from '../../components/clientTest/UserRealEnglishWord/UserRealEnglishWord'
import { ListenSelectEnglish } from '../../components/clientTest/ListenSelect_User/ListenSelectEnglish'
import { UserRespondInAtleastNwords } from '../../components/clientTest/RespondInAtleastNwords/UserRespondInAtleastNwords'
import { SelectTheBestTitle } from '../../components/clientTest/SelectTheBest/SelectTheBestTitle'
import DescrbImgUsr from '../../components/clientTest/describeImg/DescrbImgUsr'
import { UserMainIdea } from '../../components/clientTest/mainIdea/UserMainIdea'
import Recording from '../../components/clientTest/recording/Recording'
import { UserTypeWhatYouHear } from '../../components/clientTest/typeWUHear/UserTypeWhatYouHear'
import { globalTestSlice } from '../../store/userTest/global-test-slice'
import HighLightAnswerUser from '../../components/clientTest/highlightAns/HighLightAnswerUser'

export const PassTest = ({ children }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [ques, setQues] = useState(null)
   const [quesDuration, setQuesDuration] = useState(null)
   const [error, setError] = useState(null)
   const { testID } = useSelector((state) => state.typeTest)
   const { currentComponent } = useSelector((state) => state.globalTestSlice)

   const getQuestionTest = async () => {
      try {
         const response = await axiosInstance.get(
            `/tests/getAllQuestionsByTestId?testId=${testID}`
         )
         dispatch(
            globalTestSlice.actions.addTestComponent(
               response.data[currentComponent]
            )
         )
         setQues(response.data[currentComponent].questionType)
         setQuesDuration(response.data[currentComponent].duration)
      } catch (error) {
         setError(error.message)
      }
   }

   useEffect(() => {
      getQuestionTest()
   }, [currentComponent])

   const questions = {
      SELECT_REAL_ENGLISH_WORD: <UserRealEnglishWord />,
      LISTEN_AND_SELECT_ENGLISH_WORDS: <ListenSelectEnglish />,
      TYPE_WHAT_YOU_HEAR: <UserTypeWhatYouHear />,
      DESCRIBE_IMAGE: <DescrbImgUsr />,
      SELECT_THE_MAIN_IDEA: <UserMainIdea />,
      LISTEN_AND_SELECT_ENGLISH_WORD: <ListenSelectEnglish />,
      RECORD_SAYING_STATEMENT: <Recording />,
      RESPOND_AT_LEAST_N_WORDS: <UserRespondInAtleastNwords />,
      SELECT_THE_BEST_TITLE: <SelectTheBestTitle />,
      HIGHLIGHT_THE_ANSWER: <HighLightAnswerUser />,
   }

   const childrenAsFunc =
      typeof children === 'function' ? children(isEnded) : children

   const handleNextClick = () => {
      setQues((prev) => {
         if (prev < questions.length) {
            return prev + 1
         }
         return prev
      })
   }

   function handleTimeUp() {
      handleNextClick()
      dispatch(questions.clearOptionsIds())
   }

   // const duration = 200
   const QuestionComponent = questions[ques]
   const duration = quesDuration
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

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
            <div>{QuestionComponent}</div>
            <div>
               {childrenAsFunc &&
                  React.cloneElement(childrenAsFunc, {
                     handleNextClick,
                     handleTimeUp,
                  })}
            </div>
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
