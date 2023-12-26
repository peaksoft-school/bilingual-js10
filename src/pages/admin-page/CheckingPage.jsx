import React from 'react'
import { useSelector } from 'react-redux'
import SelectTheBestTitle from '../../components/adminCheckingUserTest/SelectTheBestTitle'
import SelectRealEnglishWords from '../../components/adminCheckingUserTest/SelectRealEnglishWords'
import DescribeImage from '../../components/adminCheckingUserTest/DescribeImage'
import HighlightedAnswerCheck from '../../components/adminCheckingUserTest/HighlightedAnswerCheck'
import RecordStatementCheck from '../../components/adminCheckingUserTest/RecordStatementCheck'
import { TypeWhatYouHear } from '../../components/adminCheckingUserTest/TypeWhatYouHear'
import RespondleastUserTest from '../../components/adminCheckingUserTest/RespondleastUserTest'
import ListenAndSelectEnglishWord from '../../components/adminCheckingUserTest/ListenAndSelectEnglishWord'
import SelectTheMainIdea from '../../components/adminCheckingUserTest/SelectTheMainIdea'

const questionsPages = {
   SELECT_REAL_ENGLISH_WORD: <SelectRealEnglishWords />,
   LISTEN_AND_SELECT_ENGLISH_WORDS: <ListenAndSelectEnglishWord />,
   TYPE_WHAT_YOU_HEAR: <TypeWhatYouHear />,
   DESCRIBE_IMAGE: <DescribeImage />,
   RECORD_SAYING_STATEMENT: <RecordStatementCheck />,
   SELECT_THE_BEST_TITLE: <SelectTheBestTitle />,
   RESPOND_AT_LEAST_N_WORDS: <RespondleastUserTest />,
   HIGHLIGHT_THE_ANSWER: <HighlightedAnswerCheck />,
   SELECT_THE_MAIN_IDEA: <SelectTheMainIdea />,
}

export const CheckingPage = () => {
   const { questionType } = useSelector((state) => state.answer)
   return <div>{questionsPages[questionType]}</div>
}
