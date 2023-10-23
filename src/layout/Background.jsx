import { Box, styled } from '@mui/material'
import React from 'react'

export const Background = ({ children }) => {
   return (
      <BackgroundBox>
         <StyleBackground>{children}</StyleBackground>
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

const StyleBackground = styled('div')(() => {
   return {
      marginTop: '55px',
      maxWidth: '1060px',
      padding: '3.125rem 5rem',
      backgroundColor: '#fff',
      borderRadius: '25px',
      boxShadow: '0px 4px 39px rgba(196, 196, 196, 0.60)',
   }
})
