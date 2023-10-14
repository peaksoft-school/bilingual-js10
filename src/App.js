import Notifay from './components/UI/Notifay'

function App() {
   return (
      <>
         <button
            onClick={() =>
               Notifay('success', 'File saved', 'Successfully saved', false)
            }
         >
            Success
         </button>
         <button
            onClick={() =>
               Notifay('error', 'Error', 'Please fill in all fields', false)
            }
         >
            Error
         </button>
      </>
   )
}

export default App
