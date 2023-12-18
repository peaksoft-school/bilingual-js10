import { styled } from '@mui/material'
import React, { useState } from 'react'
import {
   FiveStars,
   RoundRight,
   RoundLeft,
   StickBlue,
   StickPink,
   Kamchy,
   Aziat,
   Avaz,
   Ulan,
   Aijan,
   RoundLeftBlue,
   RoundRightBlue,
} from '../../assets'

export const FeedbackFromPeople = () => {
   const [currentIndex, setCurrentIndex] = useState(0)
   const [clickeds, setClickeds] = useState(false)
   const [clickedLeft, setClickedsLeft] = useState(false)

   const feedbackData = [
      {
         id: '1',
         name: 'Kamchy',
         image: Kamchy,
         text: 'Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.',
      },
      {
         id: '2',
         name: 'Aziat',
         image: Aziat,
         text: 'Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.',
      },
      {
         id: '3',
         name: 'Ulan',
         image: Ulan,
         text: 'Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.',
      },
      {
         id: '4',
         name: 'Aijan',
         image: Aijan,
         text: 'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
      },
      {
         id: '5',
         name: 'Avaz',
         image: Avaz,
         text: 'I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.',
      },
   ]

   const duplicatedFeedbackData = [
      feedbackData[feedbackData.length - 1],
      ...feedbackData,
      feedbackData[0],
   ]

   const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length)
   }

   const handlePrev = () => {
      setCurrentIndex(
         (prevIndex) =>
            (prevIndex - 1 + feedbackData.length) % feedbackData.length
      )
   }

   return (
      <GobalContainer>
         <h1>Why people love Bilingual</h1>
         <Container>
            <div
               className={`arrow-container ${clickedLeft ? 'clicked' : ''}`}
               onClick={() => setClickedsLeft((clickState) => !clickState)}
            >
               {clickedLeft ? (
                  <RoundRightBlue onClick={handlePrev} />
               ) : (
                  <RoundLeft onClick={handlePrev} />
               )}
            </div>
            {duplicatedFeedbackData.map((data, index) => (
               <MainContainer
                  key={data.name}
                  className={`MainContainer ${
                     index >= currentIndex && index < currentIndex + 3
                        ? 'visible'
                        : 'hidden'
                  } ${index === currentIndex + 1 ? 'selected' : ''}`}
               >
                  <img src={data.image} alt="" />
                  <p className={index === currentIndex + 1 ? 'white-text' : ''}>
                     {data.text}
                  </p>
                  <h2
                     className={index === currentIndex + 1 ? 'white-text' : ''}
                  >
                     {data.name}
                  </h2>
                  <FiveStars />
               </MainContainer>
            ))}
            <div
               className={`arrow-container ${clickeds ? 'clicked' : ''}`}
               onClick={() => setClickeds((clickState) => !clickState)}
            >
               {clickeds ? (
                  <RoundLeftBlue
                     onClick={handleNext}
                     style={{ cursor: 'pointer' }}
                  />
               ) : (
                  <RoundRight
                     onClick={handleNext}
                     style={{ cursor: 'pointer' }}
                  />
               )}
            </div>
         </Container>
         <div className="stick-container">
            {[0, 1, 2, 3, 4].map((index) =>
               index === currentIndex ? (
                  <StickBlue key={index} />
               ) : (
                  <StickPink key={index} />
               )
            )}
         </div>
      </GobalContainer>
   )
}

const MainContainer = styled('div')`
   width: 20rem;
   height: 29rem;
   border-radius: 2.5rem;
   background: #e5e5e5;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 2rem;
   padding: 0px 30px 0px 30px;

   img {
      width: 8rem;
      height: 8rem;
      border-radius: 16rem;
   }

   &.MainContainer {
      transition-duration: 1s;
   }

   &.visible {
      display: flex;
   }

   &.hidden {
      display: none;
   }

   &.selected {
      background: #666ca7;
      height: 33rem;
      width: 20rem;
   }

   .white-text {
      color: #fff;
   }
   .rotate-arrow {
      transform: rotate(180deg);
   }
`
const GobalContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 3rem;
   h1 {
      color: #3752b4;
      font-family: Gilroy;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
   }
   .ikonContainer {
      display: flex;
      gap: 1rem;
   }
   .stick-container {
      display: flex;
      align-items: center;
      gap: 0.6rem;
   }
`

const Container = styled('div')`
   display: flex;
   flex-wrap: nowrap;
   align-items: center;
   justify-content: space-around;
   gap: 1rem;
   overflow-x: auto;
   h2 {
      color: #3a10e5;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
   }
   p {
      color: rgba(35, 33, 42, 0.8);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   @media screen and (max-width: 600px) {
      flex-direction: column;
   }
`
