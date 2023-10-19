import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import { theme } from './assets/theme/globalTheme'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <ToastContainer />
            <App />
         </BrowserRouter>
      </ThemeProvider>
   </React.StrictMode>
)

reportWebVitals()
