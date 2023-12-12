import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import MuiSelect from '@mui/material/Select'
import { MenuItem, styled } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
}
const options = [
   'Select real English words',
   'Listen and select English word',
   'Type what you hear',
   'Describe image',
   'Record saying statement',
   'Respond in at least N words',
   'Highlight the answer',
   'Select the main idea',
   'Select the best title',
]
function getStyles(option, selectedOption, theme) {
   return {
      fontWeight:
         selectedOption.indexOf(option) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
   }
}
const Select = ({ selectedOption, handleChange }) => {
   const theme = useTheme()
   return (
      <StyledFormControl fullWidth>
         <StyledSelect
            displayEmpty
            value={selectedOption}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
               if (selected.length === 0) {
                  // return <p>Describe image</p>
               }
               return selected
            }}
            MenuProps={MenuProps}
         >
            {options.map((option) => (
               <StyledMenuItem
                  key={option}
                  value={option}
                  style={getStyles(option, selectedOption, theme)}
               >
                  {option}
               </StyledMenuItem>
            ))}
         </StyledSelect>
      </StyledFormControl>
   )
}
export default Select
const StyledFormControl = styled(FormControl)({
   '&.MuiFormControl-root': {
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      height: '5.9vh',
      backgroundColor: '#FFF',
      '& .MuiOutlinedInput-root': {
         padding: '0.3rem',
         fontFamily: 'DIN Next Rounded LT W01 Regular',
         fontSize: '1rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: '1.2rem',
         '& fieldset': {
            borderRadius: ' 8px 8px 8px 8px',
            border: '2px solid #D4D0D0',
         },
         backgroundColor: '#FFF',
         '&.Mui-focused fieldset': {
            border: '2px solid #3A10E5',
            borderRadius: ' 8px 8px 0px 0px',
         },
         '&:hover fieldset': {
            border: '2px solid #3A10E5',
         },
      },
      '& p': {
         margin: '0',
         padding: '0rem',
         fontFamily: 'DIN Next Rounded LT W01 Regular',
         fontSize: '1rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: '1.2rem',
      },
   },
})
const StyledSelect = styled(MuiSelect)({
   '& .MuiSelect-select': {
      padding: '0.4rem',
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '1.2rem',
      display: 'flex',
      justifyContent: 'center',
   },
})
const StyledMenuItem = styled(MenuItem)({
   '&.MuiMenuItem-root': {
      color: '#4C4859',
      padding: '0.7rem, 1.6rem',
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      '&.Mui-selected': {
         backgroundColor: '#3A10E529',
      },
      '&:hover': {
         backgroundColor: '#3A10E529',
      },
   },
})
