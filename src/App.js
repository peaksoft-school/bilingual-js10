import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
// import { USER_KEY } from './utils/constants/constants'
// import { AppRoutes } from './routes/AppRoutes'
import { authActions } from './store/auth/authSlice'
import LandingPage from './pages/LandingPage'

function App() {
   return (
      <div>
         <LandingPage />
         {/* <AppRoutes /> */}
         {/* <CustomFormCreateTest /> */}
      </div>
   )
}

export default App
