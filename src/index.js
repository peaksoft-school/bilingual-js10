import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { theme } from './assets/theme/globalTheme'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ToastContainer } from 'react-toastify'

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
