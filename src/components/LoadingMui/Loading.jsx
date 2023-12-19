import React from 'react'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'
import styled from 'styled-components'

export const Loading = () => {
   return (
      <Stack
         sx={{ width: '50%', color: 'grey.600', marginLeft: '30rem' }}
         spacing={2}
      >
         <Container className="StrokaClass">
            <span className="stroka">
               <h1>B</h1>
            </span>
            <span className="stroka">
               <h2>i</h2>
            </span>
            <span className="stroka">
               <h2>l</h2>
            </span>
            <span className="stroka">
               <h2>i</h2>
            </span>
            <span className="stroka">
               <h2>n</h2>
            </span>
            <span className="stroka">
               <h2>g</h2>
            </span>
            <span className="stroka">
               <h2>u</h2>
            </span>
            <span className="stroka">
               <h2>a</h2>
            </span>
            <span className="stroka">
               <h2>l</h2>
            </span>
         </Container>
         <LinearProgress color="secondary" />
         <LinearProgress color="success" />
         <LinearProgress color="inherit" />
      </Stack>
   )
}

const Container = styled('div')`
   display: flex;
   gap: 1rem;
   align-items: center;
   height: 4rem;
   font-weight: 700;
   font-family: Poppins;
   position: absolute;
   top: 24rem;
   left: 50rem;
   // z-index: 1;
   .stroka {
      display: block;
      position: relative;
      color: #3a10e5;
      font-size: 1.5rem;
      height: 100%;
      width: 20px;
      border-radius: 3.1rem;
      margin: 0 1px;
      animation: animate 1.6s linear infinite;
      boxshadow: '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 8px 20px rgba(0, 0, 0, 0.2)';
   }
   @keyframes animate {
      50% {
         height: 30%;
      }
      100% {
         height: 100%;
      }
   }
   .stroka:nth-child(1) {
      animation-delay: 0s;
   }
   .stroka:nth-child(2) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(3) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(4) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(5) {
      animation-delay: 0.8s;
   }
   .stroka:nth-child(6) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(7) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(8) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(9) {
      animation-delay: 0s;
   }
   .stroka:nth-child(10) {
      animation-delay: 0.2s;
   }
   .stroka:nth-child(11) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(12) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(13) {
      animation-delay: 0.8s;
   }
   .stroka:nth-child(14) {
      animation-delay: 0.6s;
   }
   .stroka:nth-child(15) {
      animation-delay: 0.4s;
   }
   .stroka:nth-child(16) {
      animation-delay: 0.2s;
   }
`
