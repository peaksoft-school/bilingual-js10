import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyBQI11JoDcbQjx7cTm5nIOfUaPZ-upRD40',
   authDomain: 'bilingual-fa45d.firebaseapp.com',
   projectId: 'bilingual-fa45d',
   storageBucket: 'bilingual-fa45d.appspot.com',
   messagingSenderId: '613409912275',
   appId: '1:613409912275:web:738bc89085216b547c6b26',
   measurementId: 'G-5JC0HM3FKV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
