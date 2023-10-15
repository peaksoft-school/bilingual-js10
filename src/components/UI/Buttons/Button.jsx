import { Button as MuiButton, styled } from '@mui/material'
import { AddIcon } from '@mui/icons-material/Add'
import React from 'react'

const Button = ({
   defaultStyle,
   hoverStyle,
   activeStyle,
   children,
   disabled,
   variant = 'contained',
   className,
   fullWidth,
   onClick,
}) => {
   return (
      <ButtonStyled
         variant={variant}
         fullWidth={fullWidth}
         disabled={disabled}
         className={className}
         startIcon={className === 'addNewTestButton' ? <AddIcon /> : null}
         defaultStyle={defaultStyle}
         hoverStyle={hoverStyle}
         activeStyle={activeStyle}
         onClick={onClick}
      >
         {children}
      </ButtonStyled>
   )
}

const colors = {
   contained: '#fff',
   outlined: '#3A10E5',
   grey: '#4C4C4C',
}

const ButtonStyled = styled(MuiButton)(({
   className,
   variant,
   defaultStyle,
   hoverStyle,
   disabled,
   activeStyle,
}) => {
   return {
      backgroundColor: `${defaultStyle}`,
      padding: '0.55rem 1.5rem',
      height: '42px',
      fontFamily: 'DINNextRoundedLTPro-Bold',
      borderRadius: '8px',
      color: `${
         className === 'registerButton' || className === 'logOutButton'
            ? '#4C4C4C'
            : `${variant === 'contained' ? 'white' : '#3A10E5'}`
      }`,
      boxShadow: `${
         className === 'registerButton'
            ? ' 0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)'
            : 'none'
      }`,
      border: `${
         variant === 'contained'
            ? 'null'
            : `3px solid ${
                 colors[className === 'logOutButton' ? 'grey' : variant]
              }`
      }`,

      '&:hover': {
         backgroundColor: `${hoverStyle}`,
         boxShadow: `${
            className === 'registerButton'
               ? ' 0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)'
               : 'none'
         }`,
         color: `${
            className === 'registerButton' || className === 'logOutButton'
               ? `${className === 'registerButton' ? '#4C4C4C' : '#fff'}`
               : `${hoverStyle === '#3A10E5' ? 'white' : '#fff'}`
         }`,
         border: `${
            variant === 'contained'
               ? 'none'
               : `3px solid ${
                    colors[className === 'logOutButton' ? 'outlined' : variant]
                 }`
         }`,
      },
      '&:active': {
         backgroundColor: `${activeStyle}`,
      },
      '&:disabled': {
         backgroundColor: disabled,
         border: `3px solid #C4C4C4`,
         color: `${className === 'nextButton' ? '#fff' : '#C4C4C4'}`,
      },
   }
})
export default Button
