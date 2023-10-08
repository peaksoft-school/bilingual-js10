import { styled } from '@mui/material'
import React from 'react'
import Dastan from '../../assets/images/dastan.png'
import Rinat from '../../assets/images/rinat.jpg'
import Bael from '../../assets/images/bael.png'
import Gulaiym from '../../assets/images/gulaiym.png'
import Ayzada from '../../assets/images/ayzada.png'

export const OurTeam = () => {
   return (
      <MainTeamContainer>
         <h1>Our Team</h1>
         <div className="ImageContainer">
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Dastan} alt="" />
               </div>
               <b>Дастан Дулатбеков</b>
               <p>Frontend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Gulaiym} alt="" />
               </div>
               <b>Гулайым Едилбаева</b>
               <p>Frontend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Rinat} alt="" />
               </div>
               <b>Ринат Кундузов</b>
               <p>Frontend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Bael} alt="" />
               </div>
               <b>Байэл Сапаралиев</b>
               <p>Backend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img src={Ayzada} alt="" />
               </div>
               <b>Айзада Абдыразакова</b>
               <p>Backend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img
                     src="https://i.guim.co.uk/img/media/20bff8b944ac1d441b4922ec361838d2df90b62a/7_926_4793_2876/master/4793.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b37987ab930d1d6f12beb5732111a843"
                     alt=""
                  />
               </div>
               <b>Даниел Гафуров </b>
               <p>Backend Dev</p>
            </div>
            <div className="nameAndImageDiv">
               <div className="imageDiv">
                  <img
                     src="https://i.guim.co.uk/img/media/20bff8b944ac1d441b4922ec361838d2df90b62a/7_926_4793_2876/master/4793.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b37987ab930d1d6f12beb5732111a843"
                     alt=""
                  />
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
