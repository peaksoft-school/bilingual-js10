import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Questions } from '../../../pages/admin-page/Questions'

const QuestionsPage = () => {
   const [curtest, setCurTEst] = useState([])
   const { tests, testID } = useSelector((state) => state.createTestSlice)
   useEffect(() => {
      const currentTest = tests.find((test) => test.id === testID)
      setCurTEst([currentTest])
   }, [])
   return (
      <div>
         {curtest.map((test) => {
            return (
               <div key={test.id}>
                  <h2>title: {test.title}</h2>
                  <i>description: {test.description}</i>
               </div>
            )
         })}
         <Questions testID={testID} />
      </div>
   )
}

export default QuestionsPage
