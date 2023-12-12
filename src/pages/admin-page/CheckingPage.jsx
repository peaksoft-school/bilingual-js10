import React from 'react'
import { useSelector } from 'react-redux'
import SelectTheBestTitle from '../../components/adminCheckingUserTest/SelectTheBestTitle'
import SelectTheMainIdea from '../../components/adminCheckingUserTest/SelectTheMainIdea'
import DescribeImage from '../../components/adminCheckingUserTest/DescribeImage'
import HighlightedAnswerCheck from '../../components/adminCheckingUserTest/HighlightedAnswerCheck'
import RecordStatementCheck from '../../components/adminCheckingUserTest/RecordStatementCheck'

const questionsPages = {
   SELECT_REAL_ENGLISH_WORD: <div>SELECT_REAL_ENGLISH_WORD</div>,
   LISTEN_AND_SELECT_ENGLISH_WORDS: <div>LISTEN_AND_SELECT_ENGLISH_WORDS</div>,
   TYPE_WHAT_YOU_HEAR: <div>TYPE_WHAT_YOU_HEAR</div>,
   DESCRIBE_IMAGE: <DescribeImage />,
   RECORD_SAYING_STATEMENT: <RecordStatementCheck />,
   RESPOND_AT_LEAST_N_WORDS: <div>RESPOND_AT_LEAST_N_WORDS</div>,
   SELECT_THE_BEST_TITLE: <SelectTheBestTitle />,
   HIGHLIGHT_THE_ANSWER: <HighlightedAnswerCheck />,
   SELECT_THE_MAIN_IDEA: <SelectTheMainIdea />,
}

export const CheckingPage = () => {
   const { questionType } = useSelector((state) => state.answer)
   return <div>{questionsPages[questionType]}</div>
}
