import { Box, styled } from '@mui/material'
import React from 'react'

export const Background = ({ children }) => {
   return (
      <Box>
         <StyleBackground>{children}</StyleBackground>
      </Box>
   )
}

const StyleBackground = styled('div')(() => {
   return {
      maxWidth: '1060px',
      padding: '50px 80px',
      borderRadius: '25px',
      boxShadow: '0px 4px 39px rgba(196, 196, 196, 0.60)',
   }
})
