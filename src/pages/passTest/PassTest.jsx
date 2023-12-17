import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Background } from '../../layout/Background'
import Button from '../../components/UI/Buttons/Button'
import { axiosInstance } from '../../config/axiosInstance'
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

export const PassTest = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [ques, setQues] = useState(null)
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
         dispatch(globalTestSlice.actions.addQuestions(response.data))
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
      DESCRIBE_IMAGE: <DescrbImgUsr />,
      RESPOND_AT_LEAST_N_WORDS: <UserRespondInAtleastNwords />,
      HIGHLIGHT_THE_ANSWER: <HighLightAnswerUser />,
      SELECT_THE_MAIN_IDEA: <UserMainIdea />,
      SELECT_THE_BEST_TITLE: <SelectTheBestTitle />,
      RECORD_SAYING_STATEMENT: <Recording />,
      TYPE_WHAT_YOU_HEAR: <UserTypeWhatYouHear />,
   }
   const QuestionComponent = questions[ques]

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
            <div>{QuestionComponent}</div>

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
