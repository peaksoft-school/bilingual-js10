import React from 'react'
import { useSelector } from 'react-redux'
import SelectRealEnglishWords from '../../components/adminCheckingUserTest/SelectRealEnglishWords'

const questionsPages = {
   SELECT_REAL_ENGLISH_WORD: <SelectRealEnglishWords />,
   LISTEN_AND_SELECT_ENGLISH_WORDS: <div>LISTEN_AND_SELECT_ENGLISH_WORDS</div>,
   TYPE_WHAT_YOU_HEAR: <div>TYPE_WHAT_YOU_HEAR</div>,
   DESCRIBE_IMAGE: <div>DESCRIBE_IMAGE</div>,
   RECORD_SAYING_STATEMENT: <div>RECORD_SAYING_STATEMENT</div>,
   RESPOND_AT_LEAST_N_WORDS: <div>RESPOND_AT_LEAST_N_WORDS</div>,
   HIGHLIGHT_THE_ANSWER: <div>HIGHLIGHT_THE_ANSWER</div>,
   SELECT_THE_MAIN_IDEA: <div>SELECT_THE_MAIN_IDEA</div>,
   SELECT_THE_BEST_TITLE: <div>SELECT_THE_BEST_TITLE</div>,
}

export const CheckingPage = () => {
   const { questionType } = useSelector((state) => state.answer)
   return <div>{questionsPages[questionType]}</div>
}
