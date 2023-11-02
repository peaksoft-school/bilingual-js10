import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Provider } from 'react-redux'
import { theme } from './assets/theme/globalTheme'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <ThemeProvider theme={theme}>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <ToastContainer />

                  <App />
               </LocalizationProvider>
            </ThemeProvider>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
)
reportWebVitals()
