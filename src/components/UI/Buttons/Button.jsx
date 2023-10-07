import { Button as MuiButton, styled } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import toBeginButton from '../../../assets/icons/button.svg'
import toBeginHoverButton from '../../../assets/icons/button-hover.svg'

const Button = ({
   children,
   disabled,
   variant = 'contained',
   className,
   fullWidth,
}) => {
   return (
      <ButtonStyled
         variant={variant}
         fullWidth={fullWidth}
         disabled={disabled}
         className={className}
         startIcon={className === 'addNewTestButton' ? <AddIcon /> : null}
      >
         {children}
      </ButtonStyled>
   )
}

const backgroundColors = {
   addNewTestButton: {
      default: '#3A10E5',
      hover: 'rgba(58, 16, 229, 0.90);',
      active: '#3007DA',
      disabled: '#ffffff',
   },
   signInButton: {
      default: '#3A10E5',
      hover: 'rgba(58, 16, 229, 0.90);',
      active: '#3007DA',
   },
   toComeInButton: {
      default: '#3A10E5',
      hover: 'rgba(58, 16, 229, 0.90);',
      active: '#3007DA',
      disabled: '#ffffff',
   },
   cancelButton: {
      default: '#fff',
      hover: '#3A10E5',
      active: '#3007DA',
      disabled: '#ffffff',
   },
   goBackButton: {
      default: '#fff',
      hover: '#3A10E5',
      active: '#3007DA',
      disabled: '#ffffff',
   },
   nextButton: {
      default: '#3A10E5',
      hover: 'rgba(58, 16, 229, 0.90);',
      active: '#3007DA',
      disabled: '#C4C4C4',
   },
   practiceTestButton: {
      default: '#fff',
      hover: '#3A10E5',
      active: '#3007DA',
   },
   saveButton: {
      default: '#2AB930',
      hover: '#31CF38',
      active: '#31CF38',
      disabled: '#ffffff',
   },
   toBeginButton: {
      default: '#ffffff14',
      hover: '#ffffff14',
      // active: '#CB4080',
      // disabled: '#ffffff',
   },
   registerButton: {
      default: '#FFF',
      hover: '#F0EDED',
      active: '#EBE6E6',
      disabled: '#ffffff',
   },
   logOutButton: {
      default: '#FFF',
      hover: '#3A10E5',
      active: '#3A10E5',
   },
}

const colors = {
   contained: '#fff',
   outlined: '#3A10E5',
   grey: '#4C4C4C',
}

const ButtonStyled = styled(MuiButton)(({ className, variant, children }) => {
   const bgColors = backgroundColors[className]
   return {
      backgroundColor: `${bgColors.default}`,
      padding: `${
         className === 'toBeginButton'
            ? '16px 51px 23px 51px'
            : '0.55rem 1.5rem'
      }`,
      color: `${
         className === 'registerButton' || className === 'logOutButton'
            ? '#4C4C4C'
            : `${variant === 'contained' ? 'white' : '#3A10E5'}`
      }`,
      backgroundImage: `url(${
         className === 'toBeginButton' ? toBeginButton : ''
      })`,
      boxShadow: `${
         className === 'registerButton'
            ? ' 0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)'
            : 'none'
      }`,

      display: 'flex',
      justifyContent: 'center',
      backgroundRepeat: 'no-repeat',
      '&.MuiButton-root': {
         border: `${
            variant === 'contained'
               ? 'null'
               : `3px solid ${
                    colors[className === 'logOutButton' ? 'grey' : variant]
                 }`
         }`,
      },
      borderRadius: `${className === 'toBeginButton' ? 'none' : '8px'}`,
      backgroundSize: 'contain',
      textAlign: 'center',
      width: `${children === 'to begin' ? '200px' : ''}`,
      '&:hover': {
         backgroundColor: bgColors.hover,
         boxShadow: `${
            className === 'registerButton'
               ? ' 0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)'
               : 'none'
         }`,
         backgroundImage: `url(${
            className === 'toBeginButton' ? toBeginHoverButton : ''
         })`,
         color: `${
            className === 'registerButton' || className === 'logOutButton'
               ? `${className === 'registerButton' ? '#4C4C4C' : '#fff'}`
               : 'white'
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
         backgroundColor: bgColors.active,
         boxShadow: `${
            className === 'registerButton'
               ? ' 0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)'
               : 'none'
         }`,
      },
      '&:disabled': {
         backgroundColor: `${bgColors.disabled}`,
         border: `3px solid #C4C4C4`,
         color: `${className === 'nextButton' ? '#fff' : '#C4C4C4'}`,
      },
   }
})
export default Button
