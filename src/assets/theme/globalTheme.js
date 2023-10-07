import { createTheme } from '@mui/material'

export const theme = createTheme({
   palette: {
      primary: {
         main: '#3A10E5',
         white: '#FFFFFF',
         babyBlue: '#D7E1F8',
         fontColor: '#4C4859',
      },
      secondary: {
         main: '#F61414',
         green: '#2AB930',
         lightGray: '#D4D0D0',
         pewter: '#D8D9DB',
         cream: '#F7F7F7',
         purple: '#3A10E5',
         skyBlue: '#0F85F1',
         darkGray: '#757575',
         celadon: '#C4C4C4',
         gray: '#9A9A9A',
      },
      linear: {
         linearBlue: 'linear-gradient(270deg, #3A10E5 0%, #6746EF 75.83%)',
      },
   },
   typography: {
      fontFamily: 'Poppins, Gilroy',
   },
})
