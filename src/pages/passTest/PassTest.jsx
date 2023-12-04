/* eslint-disable max-len */
import React from 'react'
import ProgressBar from '../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../components/UI/progressBar/useProgressBar'
import { Background } from '../../layout/Background'
import { ListenSelectEnglish } from '../../components/clientTest/ListenSelect_User/ListenSelectEnglish'
// import { UserRealEnglishWord } from '../../components/clientTest/UserRealEnglishWord/UserRealEnglishWord'
// import { SelectTheBestTitle } from '../../components/clientTest/SelectTheBest/SelectTheBestTitle'
// import HighLightAnswerUser from '../../components/clientTest/highlightAns/HighLightAnswerUser'
// import DescrbImgUsr from '../../components/clientTest/describeImg/DescrbImgUsr'
// import Recording from '../../components/clientTest/recording/Recording'
// import { UserMainIdea } from '../../components/clientTest/mainIdea/UserMainIdea'

export const PassTest = () => {
   const duration = 5

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
            <ListenSelectEnglish />
            {/* <UserRealEnglishWord /> */}
            {/* <SelectTheBestTitle /> */}
            {/* <HighLightAnswerUser /> */}
            {/* <DescrbImgUsr /> */}
            {/* <Recording /> */}
            {/* <UserMainIdea /> */}
         </Background>
      </div>
   )
}
