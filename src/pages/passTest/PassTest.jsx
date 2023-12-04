/* eslint-disable max-len */
import React from 'react'
import ProgressBar from '../../components/UI/progressBar/ProgressBar'
import { useProgressBar } from '../../components/UI/progressBar/useProgressBar'
import { Background } from '../../layout/Background'
// import { axiosInstance } from '../../config/axiosInstance'
// import { ListenSelectEnglish } from '../../components/clientTest/ListenSelect_User/ListenSelectEnglish'
// import { UserRealEnglishWord } from '../../components/clientTest/UserRealEnglishWord/UserRealEnglishWord'
// import { SelectTheBestTitle } from '../../components/clientTest/SelectTheBest/SelectTheBestTitle'
// import HighLightAnswerUser from '../../components/clientTest/highlightAns/HighLightAnswerUser'
// import DescrbImgUsr from '../../components/clientTest/describeImg/DescrbImgUsr'
// import Recording from '../../components/clientTest/recording/Recording'
// import { UserMainIdea } from '../../components/clientTest/mainIdea/UserMainIdea'

export const PassTest = () => {
   // const [responseTest, setResponseTest] = useState([])
   // const [testGetId, setTestGetId] = useState(null)

   // const getQuestionTest = async () => {
   //    try {
   //       const response = await axiosInstance.get('/tests/getById?testId=10')
   //       // setResponseTest(response)
   //       console.log(response)
   //    } catch (error) {
   //       console.log(error)
   //    }
   // }

   // useEffect(() => {
   //    getQuestionTest()
   // }, [])

   // console.log(responseTest)

   function handleTimeUp() {
      // setTimeout(() => {}, 10000)
   }

   const duration = 60
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   return (
      <div>
         <Background>
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
            {/* <ListenSelectEnglish /> */}
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
