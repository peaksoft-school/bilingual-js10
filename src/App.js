import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { USER_KEY } from './utils/constants/constants'
// import { AppRoutes } from './routes/AppRoutes'
import { authActions } from './store/auth/authSlice'
// import LandingPage from './pages/LandingPage'
import { OurTeam } from './components/LandingPage/OurTeam'

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
         {/* <h1>Billingual-10</h1>{' '} */}
         {/* <AppRoutes /> */}
         {/* <LandingPage /> */}
         <OurTeam />
      </div>
   )
}
export default App
