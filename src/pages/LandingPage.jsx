import React from 'react'
import styled from 'styled-components'
import { FeedbackFromPeople } from '../components/LandingPage/FeedbackFromPeople'
import ReaderCounter from '../components/readerCounter/ ReaderCounter'
import { OurTeam } from '../components/LandingPage/OurTeam'
import { UserExperience } from '../components/LandingPage/UserExperience'
import StepperPage from '../components/LandingPage/StepperPage'
import UserFulVideo from '../components/LandingPage/UsefulVideo'
import SliderPartner from '../components/LandingPage/SliderPartner'
import { LearnMap } from '../components/LandingPage/MianMap/LearnMap'
import { FooterAccordions } from '../components/LandingPage/Footer/Footer'
import { ProveYourEnglish } from '../components/LandingPage/ProveYourEnglish'

const LandingPage = () => {
   return (
      <div>
         <Bg>
            <ProveYourEnglish />
            <ReaderCounter />
            <UserExperience />
            <OurTeam />
            <StepperPage />
            <UserFulVideo />
            <LearnMap />
            <FeedbackFromPeople />
            <SliderPartner />
         </Bg>
         <FooterAccordions />
      </div>
   )
}

export default LandingPage

const Bg = styled('div')`
   background-color: #fef5e8;
   display: flex;
   flex-direction: column;
   row-gap: 120px;
   overflow: hidden;
`
