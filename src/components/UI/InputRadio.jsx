import React, { useState } from 'react'
import { FormControlLabel, Switch, styled } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import CheckIcon from '@mui/icons-material/Check'

export const InputRadio = ({
   checkedSwitch,
   variant,
   valueRadio,
   onChange,
   value,
   ...other
}) => {
   const [clicked, setClicked] = useState(false)
   switch (variant) {
      case 'RADIO':
         return (
            <RadioInput
               onChange={onChange}
               type="radio"
               value={valueRadio}
               name="Gender"
               checked={checkedSwitch}
               style={{ cursor: 'pointer' }}
            />
         )
      case 'SWITCH':
         return (
            <FormControlLabel
               onChange={onChange}
               control={<IOSSwitch sx={{ m: 1 }} checked={checkedSwitch} />}
            />
         )
      case 'CHECKBOX':
         return (
            <Checkbox
               value={value}
               checked={checkedSwitch}
               {...other}
               onChange={onChange}
               color="default"
               sx={{
                  '&.Mui-checked': {
                     color: '#2AB930',
                  },
               }}
            />
         )
      case 'CHECKED':
         return (
            <ButtonContainer
               onClick={() => setClicked((clickState) => !clickState)}
            >
               <div>
                  <button type="button" onChange={onChange}>
                     {clicked && (
                        <CheckIcon
                           sx={{
                              color: '#2AB930',
                              width: '17px',
                           }}
                        />
                     )}
                  </button>
               </div>
            </ButtonContainer>
         )
      default:
         return <h1>напиши variant=</h1>
   }
}
const ButtonContainer = styled('div')`
   border-radius: 99%;
   min-width: 0;
   button {
      background-color: #ffffff;
      border: 1px solid #757575;
      border-radius: 2px;
      height: 1rem;
      width: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3px;
   }
`
const RadioInput = styled('input')`
   height: 1rem;
   width: 1rem;
   accent-color: #3a10e5;
`
const IOSSwitch = styled((props) => (
   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
   width: 36,
   height: 20,
   padding: 0,
   '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
         transform: 'translateX(16px)',
         color: '#fff',
         '& + .MuiSwitch-track': {
            backgroundColor:
               theme.palette.mode === 'dark' ? '#2AB930' : '#2AB930',
            opacity: 1,
            border: 0,
         },
         '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
         },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
         color: '#2AB930',
         border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
         color:
            theme.palette.mode === 'light'
               ? theme.palette.grey[100]
               : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
         opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
   },
   '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
   },
   '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#C4C4C4' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
         duration: 500,
      }),
   },
}))
