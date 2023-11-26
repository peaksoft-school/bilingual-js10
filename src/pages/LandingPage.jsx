import React from 'react'
import styled from 'styled-components'
import { FeedbackFromPeople } from '../components/landingPage/FeedbackFromPeople'
import ReaderCounter from '../components/readerCounter/ ReaderCounter'
import { OurTeam } from '../components/landingPage/OurTeam'
import { UserExperience } from '../components/landingPage/UserExperience'
import StepperPage from '../components/landingPage/StepperPage'
import UserFulVideo from '../components/landingPage/UsefulVideo'
import SliderPartner from '../components/landingPage/SliderPartner'
import { LearnMap } from '../components/landingPage/MianMap/LearnMap'
import { FooterAccordions } from '../components/landingPage/Footer/Footer'
import { ProveYourEnglish } from '../components/landingPage/ProveYourEnglish'

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
