import React from 'react'
import { styled } from '@mui/material'
import { Background } from '../../../layout/Background'
import ProgressBar from '../../UI/progressBar/ProgressBar'
import { useProgressBar } from '../../UI/progressBar/useProgressBar'

export const UserRealEnglishWord = () => {
   const duration = 40
   function handleTimeUp() {}
   const { timeObject, chartPercent } = useProgressBar(duration, handleTimeUp)
   return (
      <StyledBackground>
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
         <h2>select the real English words in this list</h2>
      </StyledBackground>
   )
}

const StyledBackground = styled(Background)(() => ({
   width: '56.25rem',
   height: '43rem',
}))
