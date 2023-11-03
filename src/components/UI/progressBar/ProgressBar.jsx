import { styled } from '@mui/material'
import React from 'react'

const GridStyle = styled('div')(() => ({
   width: '100%',
   paddingTop: '1px',
}))

const DivProgressBar = styled('div')({
   width: '100%',
   height: '3.25rem',
})

const Time = styled('h3')(() => ({
   width: '3.8125rem',
   height: '1.5rem',
   marginBottom: '1.25rem',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '2rem',
   lineHeight: '1.5rem',
}))

const ProgressLine = styled('progress')(() => ({
   height: '0.9375rem',
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
