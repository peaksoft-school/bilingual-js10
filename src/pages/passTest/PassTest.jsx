import React from 'react'
import ProgressBar from '../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../components/UI/progressBar/useProgressBar'
import { Background } from '../../layout/Background'
import HighLightAnswerUser from '../../components/clientTest/highlightAns/HighLightAnswerUser'

export const PassTest = () => {
   const duration = 60

   function handleTimeUp() {
      // setTimeout(() => {
      //    console.log('nextPage')
      // }, 10000)
   }

   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   return (
      <div>
         <Background>
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
            <HighLightAnswerUser />
         </Background>
      </div>
   )
}
