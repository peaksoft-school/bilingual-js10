import { styled } from '@mui/material'
import React from 'react'

export const MultiplySelect = ({
   text,
   isChecked,
   handleCheckClick,
   CheckIcon,
   VolumeUp,
}) => {
   return (
      <Container>
         <div className={`ContainerMultiply ${isChecked ? 'checked' : ''}`}>
            <div className="textCon">
               {VolumeUp}
               <p>{text}</p>
            </div>
            <div className="InputCheckBox">
               <button
                  className={`IconValue ${isChecked ? 'checked' : ''}`}
                  onClick={handleCheckClick}
               >
                  {CheckIcon}
               </button>
            </div>
         </div>
      </Container>
   )
}

const Container = styled('div')(() => ({
   '.ContainerMultiply': {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1.5px solid #D4D0D0',
      borderRadius: '0.5rem',
      width: '12.3rem',
      height: '2.6rem',
      paddingLeft: '10px',
      color: '#4C4859',
      lineHeight: '1rem',
   },
   ' .textCon': {
      display: 'flex',
      justifyContent: 'spase-between',
      gap: '0.7rem',
      alignItems: 'center',
   },
   ' .InputCheckBox': {
      display: 'flex',
      width: '3rem',
      height: '2.6rem',
      justifyContent: 'center',
      alignItems: 'center',
   },
   ' .checked': {
      width: '12.4rem',
      color: '#4C4859',
      border: ' 2px solid #3A10E5',
   },
   ' .IconValue': {
      width: '3.3rem',
      height: '2.6rem',
      border: '1.5px solid #D4D0D0',
      borderRadius: '0rem 0.5rem 0.5rem 0rem',
      borderRight: 'none',
      color: '#D4D0D0',
      background: 'white',
   },
   ' .IconValue.checked': {
      color: 'white',
      background: '#3A10E5',
      border: ' 1.5px solid #3A10E5',
   },
}))
