import { Button, styled } from '@mui/material'
import React from 'react'
import toBeginButtonIcon from '../../../assets/icons/button.svg'
import toBeginButtonHoverIcon from '../../../assets/icons/button-hover.svg'

export const ToBeginButton = ({ children }) => {
   return <ToBeginButtonStyled>{children}</ToBeginButtonStyled>
}
const ToBeginButtonStyled = styled(Button)(() => ({
   backgroundImage: `url(${toBeginButtonIcon})`,
   backgroundColor: '#ffffff1a',
   width: '200px',
   height: '60px',
   color: 'white',
   textAlign: 'center',
   fontFamily: 'Poppins',
   fontSize: '14px',
   fontStyle: 'normal',
   fontWeight: '700',
   lineHeight: 'normal',
   letterSpacing: '0.7px',
   textTransform: 'capitalize',
   '&:hover': {
      backgroundImage: `url(${toBeginButtonHoverIcon})`,
      backgroundColor: '#ffffff1a',
   },
}))
