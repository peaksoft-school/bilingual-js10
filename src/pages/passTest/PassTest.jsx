/* eslint-disable max-len */
import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'

// import ProgressBar from '../../components/UI/progressBar/ProgressBar'
// import { useProgressBar } from '../../components/UI/progressBar/useProgressBar'
// import { Background } from '../../layout/Background'

// import { axiosInstance } from '../../config/axiosInstance'
// import { UserTypeWhatYouHear } from '../../components/clientTest/typeWUHear/UserTypeWhatYouHear'
// import { UserRespondInAtleastNwords } from '../../components/clientTest/RespondInAtleastNwords/UserRespondInAtleastNwords'
// import { ListenSelectEnglish } from '../../components/clientTest/ListenSelect_User/ListenSelectEnglish'
// import { UserRealEnglishWord } from '../../components/clientTest/UserRealEnglishWord/UserRealEnglishWord'
// import { SelectTheBestTitle } from '../../components/clientTest/SelectTheBest/SelectTheBestTitle'
// import HighLightAnswerUser from '../../components/clientTest/highlightAns/HighLightAnswerUser'
// import DescrbImgUsr from '../../components/clientTest/describeImg/DescrbImgUsr'
// import Recording from '../../components/clientTest/recording/Recording'
// import { UserMainIdea } from '../../components/clientTest/mainIdea/UserMainIdea'

export const PassTest = () => {
   const test = useSelector((state) => state.typeTest.test)

   // const [responseTest, setResponseTest] = useState([])
   // const [testGetId, setTestGetId] = useState(null)

   // const getQuestionTest = async () => {
   //    try {
   //       const response = await axiosInstance.get('/tests/getById?testId=10')
   // setResponseTest(response)
   //       console.log(response)
   //    } catch (error) {
   //       console.log(error)
   //    }
   // }

   // useEffect(() => {
   //    getQuestionTest()
   // }, [])

   // console.log(responseTest)

   const [activeStep, setActiveStep] = React.useState(0)
   const [skipped, setSkipped] = React.useState(new Set())

   const isStepSkipped = (step) => {
      return skipped.has(step)
   }

   const handleNext = () => {
      const newSkipped = skipped

      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setSkipped(newSkipped)
   }

   // function handleTimeUp() {
   //    // setTimeout(() => {}, 10000)
   // }

   // const duration = 60
   // const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)

   return (
      <div>
         {/* <Background>
            <ProgressBar timeObject={timeObject} timeProgress={chartPercent} /> */}

         <Box>
            <Stepper activeStep={activeStep}>
               {test.map((label, index) => {
                  const stepProps = {}
                  const labelProps = {}

                  if (isStepSkipped(index)) {
                     stepProps.completed = false
                  }
                  return (
                     <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                     </Step>
                  )
               })}
            </Stepper>
            <Button onClick={handleNext}>Next</Button>
         </Box>
         {/* <UserTypeWhatYouHear /> */}
         {/* <UserRespondInAtleastNwords /> */}
         {/* <ListenSelectEnglish /> */}
         {/* <UserRealEnglishWord /> */}
         {/* <SelectTheBestTitle /> */}
         {/* <HighLightAnswerUser /> */}
         {/* <DescrbImgUsr /> */}
         {/* <Recording /> */}
         {/* <UserMainIdea /> */}
         {/* </Background> */}
      </div>
   )
}
