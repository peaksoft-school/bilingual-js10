import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { theme } from './assets/theme/globalTheme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </DndProvider>
   </React.StrictMode>
)

reportWebVitals()
