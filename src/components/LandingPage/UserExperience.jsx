import React from 'react'
import { styled } from '@mui/material'
import EnglishBook from '../../assets/images/EnglishBook.svg'
import accessibleIcon from '../../assets/icons/accessibleIcon.svg'
import extensiveIcon from '../../assets/icons/extensiveIcon.svg'
import speechIcon from '../../assets/icons/speechIcon.svg'
import tutoringIcon from '../../assets/icons/tutoringIcon.svg'

export const UserExperience = () => {
   return (
      <div>
         <MainContainer>
            <AllDescriptionContainer>
               <div>
                  <h1>Unparalleled user experience</h1>
                  <p className="description">
                     The most effective way to perfect a language is by
                     immersing yourself in it. Rosetta Stone for Enterprise
                     delivers an effective end-to-end experience, founded on a
                     wealth of carefully structured content. Each learner has
                     the opportunity to balance independent study with optional
                     online tutoring in a way that fits their schedule and
                     language learning goals
                  </p>
               </div>
               <ExperiencesCotainer>
                  <div>
                     <img src={accessibleIcon} alt="accessibleIcon" />
                     <p>Accessible anytime, anywhere</p>
                  </div>
                  <div>
                     <img src={extensiveIcon} alt="extensiveIcon" />
                     <p>Extensive business content</p>
                  </div>
                  <div>
                     <img src={speechIcon} alt="speechIcon" />
                     <p>Leading speech recognition</p>
                  </div>
                  <div>
                     <img src={tutoringIcon} alt="tutoringIcon" />
                     <p>Unlimited live tutoring</p>
                  </div>
               </ExperiencesCotainer>
            </AllDescriptionContainer>
            <div>
               <img src={EnglishBook} alt="EnglishBookImage" />
            </div>
         </MainContainer>
      </div>
   )
}

const MainContainer = styled('div')({
   display: 'flex',
   padding: '10px 9.375rem 0 5rem',
   justifyContent: 'space-between',
   flexWrap: 'wrap',
})
const AllDescriptionContainer = styled('div')({
   '& h1': {
      width: '20.5rem',
      marginBottom: '34px',
      color: '#3752B4',
   },
   '& .description': {
      width: '40rem',
   },
})
const ExperiencesCotainer = styled('div')({
   marginTop: '43px',
   display: 'grid',
   gridTemplateColumns: 'repeat(2, 1fr)',
   gridTemplateRows: 'repeat(2, 1fr)',
   rowGap: '47px',
   '& > div': {
      display: 'flex',
      width: '15.125rem',
      gap: '26px',
   },
})
