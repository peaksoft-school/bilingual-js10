import { useState } from 'react'
import SignIn from './components/authForm/SignIn'
import SignUp from './components/authForm/SignUp'

function App() {
   const [isSignIn, setIsSignIn] = useState(true)

   const toggleSignInSignUp = () => {
      setIsSignIn(!isSignIn)
   }
   return (
      <div>
         {isSignIn ? (
            <SignIn toggleSignUp={toggleSignInSignUp} />
         ) : (
            <SignUp toggleSignIn={toggleSignInSignUp} />
         )}
      </div>
   )
}

export default App
