// /* eslint-disable react/self-closing-comp */
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
//       if (minutes === 0 && seconds === 0) {
//          document.querySelector('h1').textContent = '0:00'
//       }
//    }, [minutes, seconds])

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
//    text-align: center;
//    h1 {
//       width: 6rem;
//    }
//    .progress-bar2.animation-start {
//       animation: progressAnimation 6s;
//    }
//    .progress2 {
//       padding: 6px;
//       border-radius: 2rem;
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
//       transition: 0.4s linear;
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
import React from 'react'

const GridStyle = styled('div')(() => ({
   width: '100%',
   // height: '540px',
   // margin: '0 auto',
   paddingTop: '1px',
}))

const DivProgressBar = styled('div')(() => ({
   width: '100%',
   height: '52px',
}))
const Time = styled('h3')(() => ({
   width: '61px',
   height: '24px',
   marginBottom: '20px',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '32px',
   lineHeight: '24px',
}))

const ProgressLine = styled('progress')(() => ({
   height: '15px',
   width: '100%',
   accentColor: ' #3909fa',
}))

const ProgressBar = ({ timeObject, timeProgress }) => {
   return (
      <div>
         <GridStyle>
            <DivProgressBar>
               <Time>
                  {timeObject.minute}:{timeObject.seconds}
               </Time>
               <ProgressLine value={100 - timeProgress} max="100" />
            </DivProgressBar>
         </GridStyle>
      </div>
   )
}

export default React.memo(ProgressBar)
