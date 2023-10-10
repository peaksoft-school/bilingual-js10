import { styled } from '@mui/material'
import React from 'react'
import { developers } from '../../utils/helpers/Developers'

export const OurTeam = () => {
   return (
      <MainTeamContainer>
         <h1>Our Team</h1>
         <div className="ImageContainer">
            {developers.map((developer) => (
               <div className="nameAndImageDiv" key={developer.id}>
                  <div
                     className={`imageDiv ${developer.name}`}
                     style={{ borderRadius: `${developer.borderRadius}` }}
                  >
                     <img src={developer.image} alt={developer.name} />
                  </div>
                  <b>{developer.name}</b>
                  <p>{developer.profession}</p>
               </div>
            ))}
         </div>
      </MainTeamContainer>
   )
}
const MainTeamContainer = styled('div')({
   padding: '7.5rem 6.4rem',
   '& img': {
      width: '11.25rem',
      height: '11.25rem',
   },
   '& .imageDiv': {
      overflow: 'hidden',
   },
   '& h1': {
      textAlign: 'center',
      marginBottom: '47px',
      color: ' #3752B4',
   },
   '& b': {
      color: ' #3A10E5',
   },
   '& .nameAndImageDiv': {
      textAlign: 'center',
   },
   '& > .ImageContainer': {
      display: 'flex',
      columnGap: '8.5px',
      flexWrap: 'wrap',
      justifyContent: 'center',
   },
})
