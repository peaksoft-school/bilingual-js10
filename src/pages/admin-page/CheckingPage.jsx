import React from 'react'
import { useSelector } from 'react-redux'
import SelectTheMainIdea from '../../components/adminCheckingUserTest/SelectTheMainIdea'
import DescribeImage from '../../components/adminCheckingUserTest/DescribeImage'
import HighlightedAnswerCheck from '../../components/adminCheckingUserTest/HighlightedAnswerCheck'

const questionsPages = {
   SELECT_REAL_ENGLISH_WORD: <div>SELECT_REAL_ENGLISH_WORD</div>,
   LISTEN_AND_SELECT_ENGLISH_WORDS: <div>LISTEN_AND_SELECT_ENGLISH_WORDS</div>,
   TYPE_WHAT_YOU_HEAR: <div>TYPE_WHAT_YOU_HEAR</div>,
   DESCRIBE_IMAGE: <DescribeImage />,
   RECORD_SAYING_STATEMENT: <div>RECORD_SAYING_STATEMENT</div>,
   RESPOND_AT_LEAST_N_WORDS: <div>RESPOND_AT_LEAST_N_WORDS</div>,
   HIGHLIGHT_THE_ANSWER: <HighlightedAnswerCheck />,
   SELECT_THE_MAIN_IDEA: <SelectTheMainIdea />,
   SELECT_THE_BEST_TITLE: <div>SELECT_THE_BEST_TITLE</div>,
}

export const CheckingPage = () => {
   const { questionType } = useSelector((state) => state.answer)
   return <div>{questionsPages[questionType]}</div>
}
