/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
// import { styled } from '@mui/material'
// import React, { useState, useEffect } from 'react'

// export const ProgressBar = () => {
//    const [minutes, setMinutes] = useState(0)
//    const [seconds, setSeconds] = useState(0)
//    const [isRunning, setIsRunning] = useState(false)

//    const formatTime = (time) => (time < 10 ? `0${time}` : time)

//    const updateTimer = (input) => {
//       const totalMinutes = parseInt(input, 10)
//       if (!Number.isNaN(totalMinutes) && totalMinutes >= 0) {
//          setMinutes(totalMinutes)
//          setSeconds(0)
//          setIsRunning(true)
//       }
//    }

//    useEffect(() => {
//       const interval = setInterval(() => {
//          if (isRunning) {
//             if (minutes === 0 && seconds === 0) {
//                clearInterval(interval)
//                setIsRunning(false)
//             } else if (seconds === 0) {
//                setMinutes(minutes - 1)
//                setSeconds(59)
//             } else {
//                setSeconds(seconds - 1)
//             }
//          }
//       }, 1000)

//       return () => {
//          clearInterval(interval)
//       }
//    }, [minutes, seconds, isRunning])

//    useEffect(() => {
//       if (seconds === 0) {
//          document.querySelector('h1').textContent = '0:00'
//       }
//    }, [seconds])

//    useEffect(() => {
//       if (isRunning) {
//          document
//             .querySelector('.progress-bar2')
//             .classList.add('animation-start')
//       } else {
//          document
//             .querySelector('.progress-bar2')
//             .classList.remove('animation-start')
//       }
//    }, [isRunning])

//    return (
//       <div>
//          <Container>
//             <h1
//                contentEditable
//                onBlur={(e) => {
//                   const inputText = e.target.textContent
//                   updateTimer(inputText)
//                }}
//             >
//                {`${formatTime(minutes)}:${formatTime(seconds)}`}
//             </h1>
//             <MoveStyle>
//                <div className="progress2 progress-moved">
//                   <div className="progress-bar2"></div>
//                </div>
//             </MoveStyle>
//          </Container>
//       </div>
//    )
// }

// const MoveStyle = styled('div')(({ seconds }) => ({
//    '& .progress-moved .progress-bar2': {
//       width: '0%',
//       background: 'linear-gradient(270deg, #3a10e5 29.37%, #6746ef 84.8%)',
//       animation: `progressAnimation ${seconds}s`,
//    },
// }))

// const Container = styled('div')`
//    margin: 6.25rem auto;
//    width: 50.87506rem;
//    height: 0.5rem;
//    text-align: center;
//    h1 {
//       width: 6rem;
//       color: #4c4859;
//    }
//    .progress-bar2.animation-start {
//       animation: progressAnimation 60s;
//    }
//    .progress2 {
//       height: 0.5rem;
//       border-radius: 0.5rem;
//       background: rgba(0, 0, 0, 0.25);
//       box-shadow:
//          inset 0 1px 2px rgba(0, 0, 0, 0.25),
//          0 1px rgba(255, 255, 255, 0.08);
//    }
//    .progress-bar2 {
//       height: 0.5rem;
//       border-radius: 2rem;
//       background-image: linear-gradient(
//          to bottom,
//          rgba(255, 255, 255, 0.3),
//          rgba(255, 255, 255, 0.05)
//       );
//       transition: 2s linear;
//       transition-property: width, background-color;
//    }

//    @keyframes progressAnimation {
//       0% {
//          width: 100%;
//          background-color: #d4d0d0;
//       }
//       100% {
//          width: 0%;
//          background: linear-gradient(270deg, #3a10e5 29.37%, #6746ef 84.8%);
//       }
//    }
// `
import { styled } from '@mui/material'
import { useState } from 'react'

const ProgressBar = () => {
   const [progressWidth, setProgressWidth] = useState(100)
   const [interval, setInterval] = useState(10)

   const handleStartClick = () => {
      const startTimer = () => {
         const countDown = setInterval(() => {
            setInterval(interval - 1)

            setProgressWidth((prevWidth) => (interval / 10) * 100)

            if (interval <= 1) {
               clearInterval(countDown)
               setProgressWidth(0)
            }
         }, 1000)
      }
   }

   return (
      <Container>
         <h1>counter timeer</h1>
         <p>
            timer left: <span className="timer">{interval}s</span>
         </p>
         <div className="progres">
            <div
               className="progres-inner"
               style={{ width: `${progressWidth}%` }}
            ></div>
         </div>
         <button className="btn-start" onClick={handleStartClick}>
            start
         </button>
      </Container>
   )
}

export default ProgressBar

const Container = styled('div')`
   width: 100%;
   background-color: blueviolet;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   h1 {
      font-size: 50px;
      font-weight: bold;
      margin-bottom: 50px;
   }
   p {
      font-size: 20px;
      margin-bottom: 50px;
      font-weight: bold;
   }
   .progres {
      width: 400px;
      height: 50px;
      background-color: azure;
      padding: 20px;
      margin-bottom: 50px;
      position: relative;
   }

   .progres-inner {
      background: green;
      position: absolute;
      width: 10%;
      /* height: 10%; */
   }
   .btn-start {
      padding: 20px;
      width: 100px;
      background-color: aqua;
      font-size: 20px;
   }
`
