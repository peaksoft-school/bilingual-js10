import { styled } from '@mui/material'
import React from 'react'
import { developers } from '../../utils/helpers/developers'

const borderRadiuses = [
   '0px 0px 0px 40px',
   '40px 0px 40px 0px',
   '0px 0px 40px 0px',
   '40px 0px 0px 0px',
   '40px 0px 40px 0px',
   '0px 40px 40px 0px',
   '0px 40px 0px 0px',
   '0px 0px 40px 0px',
]

export const OurTeam = () => {
   return (
      <MainTeamContainer>
         <h1>Our Team</h1>
         <div className="ImageContainer">
            {developers.map((developer, index) => (
               <div className="nameAndImageDiv" key={developer.id}>
                  <div
                     className="imageDiv"
                     style={{
                        borderRadius: borderRadiuses[index],
                     }}
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
const MainTeamContainer = styled('div')(() => {
   return {
      '& img': {
         width: '11.25rem',
         height: '11.25rem',
         transition: 'transform 0.5s ease-in-out',
         cursor: 'pointer',
      },
      '& .imageDiv': {
         overflow: 'hidden',
         '&:hover img': {
            transform: 'scale(0.90)',
         },
      },
      '& h1': {
         textAlign: 'center',
         marginBottom: '47px',
         color: ' #3752B4',
         fontFamily: 'Gilroy',
      },
      '& b': {
         color: ' #3A10E5',
         fontFamily: 'Poppins',
      },
      '& p': {
         fontFamily: 'Poppins',
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
   }
})
