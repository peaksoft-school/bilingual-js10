import { Button as MuiButton, styled } from '@mui/material'
import React from 'react'
import { PlusIcon } from '../../../assets'

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
   type = 'submit',
   ...rest
}) => {
   return (
      <ButtonStyled
         disabled={disabled}
         variant={variant}
         fullWidth={fullWidth}
         className={className}
         startIcon={className === 'addNewTestButton' ? <PlusIcon /> : null}
         defaultStyle={defaultStyle}
         hoverStyle={hoverStyle}
         activeStyle={activeStyle}
         onClick={onClick}
         type={type}
         {...rest}
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
   activeStyle,
   padding,
}) => {
   return {
      backgroundColor: `${defaultStyle}`,
      padding: `${padding || '0.55rem 1.5rem'}`,
      height: '42px',
      fontFamily: 'Poppins',
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
               ? `${
                    className === 'registerButton'
                       ? '#4C4C4C'
                       : `${variant === 'grey' ? '#4C4C4C' : '#fff'}`
                 }`
               : `${
                    hoverStyle === '#3A10E5' ||
                    hoverStyle === '#3A10E5E5' ||
                    hoverStyle === '#31CF38' ||
                    hoverStyle === '#4E28E8'
                       ? 'white'
                       : '#4C4C4C'
                 }`
         }`,
         border: `${
            variant === 'contained'
               ? 'none'
               : `3px solid ${
                    colors[
                       className === 'logOutButton'
                          ? `${variant === 'grey' ? 'grey' : 'outlined'}`
                          : variant
                    ]
                 }`
         }`,
      },
      '&:active': {
         backgroundColor: `${activeStyle}`,
      },

      '&:disabled': {
         backgroundColor: `${className === 'nextButton' ? '#C4C4C4' : 'white'}`,
         border: `${className === 'nextButton' ? 'none' : '3px solid #C4C4C4'}`,
         color: `${className === 'nextButton' ? '#fff' : '#C4C4C4'}`,
      },
   }
})
export default Button
