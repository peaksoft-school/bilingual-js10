import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { Zero, Dolar } from '../../assets'
import Jet from '../../assets/icons/Jet.svg'
import Pig from '../../assets/icons/Pig.svg'
import Earth from '../../assets/icons/Earth.svg'

const ReaderCounter = () => {
   const [jetCounter, setJetCounter] = useState(0)
   const [earthCounter, setEarthCounter] = useState(0)

   useEffect(() => {
      let jetIntervalId
      let earthIntervalId

      const resetCounters = () => {
         setJetCounter(0)
         setEarthCounter(0)
      }

      const startCounters = () => {
         if (jetCounter < 10000) {
            jetIntervalId = setInterval(() => {
               setJetCounter((prevCounter) => {
                  const newCounter = prevCounter + 2
                  return newCounter >= 10000 ? 10000 : newCounter
               })
            }, 100)
         }

         if (earthCounter < 200) {
            earthIntervalId = setInterval(() => {
               setEarthCounter((prevCounter) => {
                  const newCounter = prevCounter + 1
                  return newCounter >= 200 ? 200 : newCounter
               })
            }, 100)
         }
      }

      startCounters()

      const resetIntervalId = setInterval(() => {
         resetCounters()
         startCounters()
      }, 6000)

      const isComponentVisible = () => {
         const rect = document
            .getElementById('mainCounter')
            .getBoundingClientRect()
         return rect.top >= 0 && rect.bottom <= window.innerHeight
      }

      const handleScroll = () => {
         if (isComponentVisible()) {
            startCounters()
         } else {
            resetCounters()
         }
      }

      window.addEventListener('scroll', handleScroll)

      handleScroll()

      return () => {
         clearInterval(jetIntervalId)
         clearInterval(earthIntervalId)
         clearInterval(resetIntervalId)
         window.removeEventListener('scroll', handleScroll)
      }
   }, [jetCounter, earthCounter])

   return (
      <Container id="mainCounter">
         <JetContainer>
            <JetDiv>
               <h1>{jetCounter}+</h1>
            </JetDiv>
            <p>Over 10,000 fee waivers for the</p>
            <p>Bilingual English Test are offered annually.</p>
         </JetContainer>
         <EarthContainer>
            <EarthDiv>
               <h1>{earthCounter}+</h1>
            </EarthDiv>
            <p>Students from over 200</p>
            <p>countries and territories have benefitted.</p>
         </EarthContainer>
         <PigContainer>
            <PigDiv>
               <Dolar className="Dolar" />
               <Zero className="Zero" />
            </PigDiv>
            <p>Eligible students can take the .</p>
            <p>test with absolutely zero cost to them</p>
         </PigContainer>
      </Container>
   )
}

export default ReaderCounter

const Container = styled('div')`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   p {
      margin: 0;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
   }
   h1 {
      color: #4c4c4c;
   }
`

const JetContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   div {
      margin-bottom: 1.5rem;
   }
`

const JetDiv = styled('div')(() => ({
   backgroundImage: `url(${Jet})`,
   width: '18.75rem',
   height: '10.625rem',
   backgroundRepeat: 'no-repeat',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const EarthContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   div {
      margin-bottom: 1.5rem;
   }
`

const EarthDiv = styled('div')(() => ({
   backgroundImage: `url(${Earth})`,
   width: '16.25rem',
   height: '10.625rem',
   backgroundRepeat: 'no-repeat',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const PigContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   div {
      margin-bottom: 1.5rem;
   }
   .Dolar {
      height: 2.8vh;
      margin-top: -0.9rem;
   }
   .Zero {
      height: 4.4vh;
   }
`

const PigDiv = styled('div')(() => ({
   backgroundImage: `url(${Pig})`,
   width: '18.75rem',
   height: '10.625rem',
   backgroundRepeat: 'no-repeat',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   margin: '0',
   padding: '0',
}))
