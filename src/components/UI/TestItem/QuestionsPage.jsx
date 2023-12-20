import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { Questions } from '../../../pages/admin-page/Questions'
import { Background } from '../../../layout/Background'

const QuestionsPage = () => {
   const [curtest, setCurTEst] = useState([])
   const { tests, testID } = useSelector((state) => state.createTestSlice)
   const { questions } = useSelector((state) => state.questionSlice)

   useEffect(() => {
      const currentTest = tests.find((test) => test.id === testID)
      setCurTEst([currentTest])
   }, [])

   return (
      <div>
         <Background maxWidth="1200px">
            {curtest.map((test) => {
               return (
                  <Title key={test?.id}>
                     <Typography>
                        <span className="title">Title: </span>
                        <span> {test?.title}</span>
                     </Typography>
                     <Typography>
                        <span className="Description">Short Description: </span>
                        <span>{test?.description}</span>
                     </Typography>
                     <Typography>
                        <span className="Duration">Duration: </span>
                        <span>
                           {questions[0] &&
                           questions[0].testDuration !== undefined
                              ? `${String(
                                   Math.floor(questions[0].testDuration / 60)
                                ).padStart(2, '0')}:${String(
                                   Math.round(questions[0].testDuration % 60)
                                ).padStart(2, '0')}`
                              : 'N/A'}
                        </span>
                     </Typography>
                  </Title>
               )
            })}
            <Questions testID={testID} />
         </Background>
      </div>
   )
}

export default QuestionsPage
const Title = styled('div')`
   & .title {
      color: #3752b4;
      font-weight: 500;
      font-size: 16px;
   }
   & .title + span {
      color: #4c4859;
   }
   & .Description {
      color: #3752b4;
      font-weight: 500;
      font-size: 16px;
   }
   & .Description + span {
      color: #4c4859;
   }
   & .Duration {
      color: #3752b4;
      font-weight: 500;
      font-size: 16px;
   }
   & .Duration + span {
      color: #4c4859;
   }
`
