import React from 'react'
import ProgressBar from './components/UI/progressBar/ProgressBar'
// import { ProgressBar } from './components/UI/progressBar/ProgressBar'

function App() {
   return (
      <div>
         {/* <h1>Bilingual js-9❤️</h1> */}
         <ProgressBar timeObject={timeObject} timeProgress={chartPercent} />
      </div>
   )
}

export default App
