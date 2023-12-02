import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { USER_KEY } from './utils/constants/constants'
import { authActions } from './store/auth/authSlice'
// import UserResult from './components/clientTest/user-result/UserResult'
import { AppRoutes } from './routes/AppRoutes'
// import LandingPage from './pages/LandingPage'

function App() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      const userInfo = JSON.parse(
         localStorage.getItem(USER_KEY.BILINGUAL_USER_KEY)
      )
      if (userInfo) {
         const authorizedUserCredentials = {
            token: userInfo.token,
            email: userInfo.email,
            role: userInfo.role,
         }
         dispatch(
            authActions.login({ data: authorizedUserCredentials, navigate })
         )
      }
   }, [])

   return (
      <div>
         {/* <UserResult /> */}
         <AppRoutes />
         {/* <LandingPage /> */}
      </div>
   )
}
export default App
