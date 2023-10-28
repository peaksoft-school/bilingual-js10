import { Button, styled } from '@mui/material'
import React from 'react'
import toBeginButtonIcon from '../../../assets/icons/toBeginButtonIcon.png'
import toBeginButtonHoverIcon from '../../../assets/icons/toBeginHoverIcon.png'

export const ToBeginButton = ({ children, ...rest }) => {
   return <ToBeginButtonStyled {...rest}>{children}</ToBeginButtonStyled>
}
const ToBeginButtonStyled = styled(Button)(() => ({
   backgroundImage: `url(${toBeginButtonIcon})`,
   backgroundColor: '#ffffff1a',
   paddingBottom: '15px',
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
