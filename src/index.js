import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { theme } from './assets/theme/globalTheme'
import reportWebVitals from './reportWebVitals'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <ToastContainer />
               <App />
            </LocalizationProvider>
         </BrowserRouter>
      </ThemeProvider>
   </React.StrictMode>
)
reportWebVitals()
