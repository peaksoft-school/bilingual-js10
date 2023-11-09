import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { authActions } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'

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
         {/* <h1>Bilingual js-10</h1> */}
         <AppRoutes />
      </div>
   )
}
export default App
