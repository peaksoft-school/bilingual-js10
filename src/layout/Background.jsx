import { Box, styled } from '@mui/material'
import React from 'react'

export const Background = ({ children, marginTop, ...rest }) => {
   return (
      <BackgroundBox>
         <StyleBackground marginTop={marginTop} {...rest}>
            {children}
         </StyleBackground>
      </BackgroundBox>
   )
}

const BackgroundBox = styled(Box)(() => {
   return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   }
})

const StyleBackground = styled('div')(({ marginTop, maxWidth }) => {
   return {
      marginTop: `${marginTop}`,
      maxWidth: `${maxWidth || '1200px'}`,
      padding: '3.125rem 5rem',
      backgroundColor: '#fff',
      borderRadius: '25px',
      background: 'white',
      boxShadow: '0px 4px 39px rgba(196, 196, 196, 0.60)',
      minWidth: '970px',
   }
})
