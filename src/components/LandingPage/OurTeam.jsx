import { styled } from '@mui/material'
import React from 'react'
import Dastan from '../../assets/images/dastan.png'
import Rinat from '../../assets/images/rinat.jpg'
import Bael from '../../assets/images/bael.png'
import Gulaiym from '../../assets/images/gulaiym.png'
import Ayzada from '../../assets/images/ayzada.png'
import Nurlan from '../../assets/images/nurlan.jpg'
import Daniel from '../../assets/images/daniel.png'

export const OurTeam = () => {
   return (
      <MainTeamContainer>
         <h1>Our Team</h1>
         <div className="ImageContainer">
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Dastan} alt="Dastan" />
               </div>
               <b>Дастан Дулатбеков</b>
               <p>Frontend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Gulaiym} alt="Gulaiym" />
               </div>
               <b>Гулайым Едилбаева</b>
               <p>Frontend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Rinat} alt="Rinat" />
               </div>
               <b>Ринат Кундузов</b>
               <p>Frontend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Bael} alt="Bael" />
               </div>
               <b>Байэл Сапаралиев</b>
               <p>Backend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Ayzada} alt="Ayzada" />
               </div>
               <b>Айзада Абдыразакова</b>
               <p>Backend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Daniel} alt="Daniel" />
               </div>
               <b>Даниел Гафуров </b>
               <p>Backend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Nurlan} alt="Nurlan" />
               </div>
               <b>Нурлан Абдуллаев</b>
               <p>Frontend Dev</p>
            </div>
         </div>
      </MainTeamContainer>
   )
}

const MainTeamContainer = styled('div')({
   padding: '120px 104px',
   '& img': {
      width: '180px',
      height: '180px',
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
   },
})
