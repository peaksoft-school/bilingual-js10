import React from 'react'
import { FeedbackFromPeople } from '../components/LandingPage/FeedbackFromPeople'
import ReaderCounter from '../components/readerCounter/ ReaderCounter'
import { OurTeam } from '../components/LandingPage/OurTeam'

const LandingPage = () => {
   return (
      <div>
         <ReaderCounter />
         <OurTeam />
         <FeedbackFromPeople />
      </div>
   )
}

export default LandingPage
