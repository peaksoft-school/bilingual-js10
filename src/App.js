import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { USER_KEY } from './utils/constants/constants'
import { authActions } from './store/auth/authSlice'
import { AppRoutes } from './routes/AppRoutes'
<<<<<<< HEAD
=======

// import LandingPage from './pages/LandingPage'
>>>>>>> 6df335a994da427a37d485845a756c9436bdde5b

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
         <AppRoutes />
<<<<<<< HEAD
=======
         {/* <DescrbImgUsr /> */}
>>>>>>> 6df335a994da427a37d485845a756c9436bdde5b
      </div>
   )
}
export default App
