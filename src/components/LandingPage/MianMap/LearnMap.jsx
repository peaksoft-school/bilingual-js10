import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Road from '../../../assets/images/VectorIcon.png'
import Planet from '../../../assets/images/globe.svg'
import Сhemistry from '../../../assets/images/Chemistry.svg'
import Nonsense from '../../../assets/images/Nonsense.svg'
import Access from '../../../assets/images/Access.svg'
import Adaptive from '../../../assets/images/Adaptive.svg'
import Button from '../../../assets/images/button.svg'
import { ToBeginButton } from '../../UI/Buttons/ToBeginButton'

export const LearnMap = () => {
   const navigate = useNavigate()
   const handleToBeginClick = () => {
      navigate('/signin')
   }
   return (
      <Main>
         <h1>Learn more</h1>
         <Sections>
            <Cards>
               <div>
                  <h2>Expand your applicant pool</h2>
                  <p>
                     Tap into a diverse pool of candidates from 210+ countries
                     and <br /> territories of origin, who have taken the
                     Bilingual English Test <br /> because of its radical
                     accessibility.
                  </p>
               </div>
               <img src={Planet} alt="Planet" />
            </Cards>

            <Cards2 style={{ paddingTop: '9rem' }}>
               <img src={Сhemistry} alt="Сhemistry" />
               <div>
                  <h2>Built on the latest assessment science</h2>
                  <p>
                     The Bilingual English Test is a computer adaptive test
                     backed
                     <br />
                     by rigorous research, with results that are highly
                     correlated
                     <br />
                     with other major assessments such as the TOEFL and the
                     IELTS.
                  </p>
               </div>
            </Cards2>

            <Cards3 style={{ paddingBottom: 'rem' }}>
               <div>
                  <h2>Innovative test security</h2>
                  <p>
                     Industry-leading security protocols, individual test
                     <br />
                     proctoring, and computer adaptive technology help prevent
                     <br />
                     fraud and cheating and ensure results you can trust.
                  </p>
               </div>
               <img src={Nonsense} alt="Nonsense" />
            </Cards3>

            <Right>
               <Cards4 style={{ paddingBottom: '8.5rem' }}>
                  <img src={Access} alt="Access" />
                  <div>
                     <h2>Convenient results dashboard</h2>
                     <p>
                        Access candidates certificates, video interviews, and
                        writing
                        <br />
                        samples through a free and secure dashboard. Quickly
                        <br />
                        easily view applicant data with filtering tools.
                     </p>
                  </div>
               </Cards4>
               <Cards5 style={{ paddingBottom: '5rem' }}>
                  <div>
                     <h2>Secure Design</h2>
                     <p>
                        Adaptive test engine dynamically administers test
                        questions
                        <br />
                        from a database of hundreds of thousands of items.
                        Someone
                        <br />
                        would have to take the test more than 1,000 times to see
                        a
                        <br />
                        question repeated.
                     </p>
                  </div>
                  <img src={Adaptive} alt="Adaptive" />
               </Cards5>
            </Right>
         </Sections>
         <ToBeginButton className="Buttons" onClick={handleToBeginClick}>
            GET STARTED
         </ToBeginButton>
      </Main>
   )
}
const Main = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 3rem;
   background-image: url(${Road});
   background-position: center;
   background-repeat: no-repeat;
   h1 {
      display: flex;
      justify-content: center;
      color: #3752b4;
   }
   button {
      margin-left: 46%;
      margin-bottom: 1rem;
      width: 200px;
      height: 60px;
      color: white;
      background-image: url(${Button});
      border: none;
      border-radius: 2rem;
   }
`
const Sections = styled('section')`
   display: flex;
   flex-direction: column;
   gap: 7.3rem;
`
const Right = styled('div')`
   display: flex;
   flex-direction: column;
`
const Cards = styled('div')`
   display: flex;
   gap: 3rem;
   justify-content: center;
   margin-right: 26.5rem;
`
const Cards2 = styled('div')`
   display: flex;
   gap: 12rem;
   justify-content: center;
   margin-left: 8rem;
`
const Cards3 = styled('div')`
   display: flex;
   gap: 14rem;
   justify-content: center;
   margin-right: 20rem;
`
const Cards4 = styled('div')`
   display: flex;
   gap: 12.5rem;
   justify-content: center;
   margin-left: 6rem;
`

const Cards5 = styled('div')`
   display: flex;
   gap: 12.5rem;
   justify-content: center;
   margin-right: 16.5rem;
`
