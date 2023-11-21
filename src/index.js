import { ThemeProvider } from '@emotion/react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { store } from './store'
import { theme } from './assets/theme/globalTheme'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

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
