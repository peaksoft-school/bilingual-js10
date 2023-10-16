import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'

import FormControl from '@mui/material/FormControl'
import MuiSelect from '@mui/material/Select'
import { MenuItem, Typography, styled } from '@mui/material'

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
   'Listen and select word',
   'Type what you hear',
   'Record saying statement',
   'Respond in at least N words',
]

function getStyles(option, selectedOption, theme) {
   return {
      fontWeight:
         selectedOption.indexOf(option) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
   }
}
const Select = () => {
   const theme = useTheme()
   const [selectedOption, setSelectedOption] = React.useState([])

   const handleChange = (event) => {
      setSelectedOption(event.target.value)
   }
   return (
      <div>
         <StyledBox>
            <MyText variant="h1">Dropdown</MyText>
         </StyledBox>

         <StyledFormControl>
            <StyledSelect
               displayEmpty
               value={selectedOption}
               onChange={handleChange}
               input={<OutlinedInput />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return <p>Describe Image</p>
                  }
                  return selected
               }}
               MenuProps={MenuProps}
            >
               {/* <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem> */}
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
      </div>
   )
}
export default Select

const StyledBox = styled('div')({
   marginLeft: '1rem',
   width: '43vw',
   height: '4.9vh',
   backgroundColor: '#4D9E3F',
   marginBottom: '2rem',
})

const MyText = styled(Typography)({
   '&': {
      fontFamily: 'DIN Next Rounded LT W04 Medium',
      fontSize: '1.2rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '1.3',
      textTransform: 'uppercase',
      padding: '29px, 0px, 16px, 0px',
   },
})
const StyledFormControl = styled(FormControl)(() => ({
   '&.MuiFormControl-root': {
      marginLeft: '1rem',
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      width: '43vw',
      height: '5.9vh',
      backgroundColor: '#FFF',

      '& .MuiOutlinedInput-root': {
         padding: '0.4rem',
         fontFamily: 'DIN Next Rounded LT W01 Regular',
         fontSize: '1rem',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: '1.2rem',
         '& fieldset': {
            borderRadius: ' 8px 8px 0px 0px',
            border: '1.3px solid #3A10E5',
         },
         backgroundColor: '#FFF',
         '&.Mui-focused fieldset': {
            border: '1.3px solid #3A10E5',
         },
         '&:hover fieldset': {
            border: '1.3px solid #3A10E5',
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
}))
const StyledSelect = styled(MuiSelect)({
   '& .MuiSelect-select': {
      padding: '0.4rem',
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '1.2rem',
   },
})

const StyledMenuItem = styled(MenuItem)({
   '&.MuiMenuItem-root': {
      color: 'black',
      padding: '0.7rem, 1.6rem',
      fontFamily: 'DIN Next Rounded LT W01 Regular',
      '&.Mui-selected': {
         backgroundColor: '#c1bfc7',
      },
      '&:hover': {
         backgroundColor: '#c1bfc7',
      },
   },
})
