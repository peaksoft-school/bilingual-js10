import { useCallback, useEffect, useState } from 'react'

export const useProgressBar = (duration, onTimeUp) => {
   const [chartPercent, setChartPercent] = useState(0)
   const [time, setTime] = useState(duration)

   const calculatePercentage = useCallback(() => {
      const percent = (1 - time / duration) * 100
      setChartPercent(percent)
   }, [duration, time])

   useEffect(() => {
      calculatePercentage()
   }, [calculatePercentage])

   const timeTicking = useCallback(() => {
      if (time === 0 || time <= 0) {
         return onTimeUp()
      }
      return setTime((prevTime) => prevTime - 0.1)
   }, [time, onTimeUp])

   useEffect(() => {
      const timer = setInterval(() => {
         timeTicking()
      }, 100)

      return () => {
         clearInterval(timer)
      }
   }, [timeTicking])

   useEffect(() => {
      if (time === 0 || time <= 0) {
         onTimeUp() // Call       onTimeUp when time reaches zero
      }
   }, [time, onTimeUp])

   const minutes = Math.trunc(time / 60)
   const seconds = Math.trunc(time % 60)

   const timeObject = {
      minute: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
   }

   return {
      timeObject,
      chartPercent,
      setTime,
   }
}
