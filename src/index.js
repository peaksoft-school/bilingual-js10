/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { theme } from './assets/theme/globalTheme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <App />
         <ToastContainer />
      </ThemeProvider>
   </React.StrictMode>
)

reportWebVitals()
