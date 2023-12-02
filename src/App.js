import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { USER_KEY } from './utils/constants/constants'
import { authActions } from './store/auth/authSlice'
import { UserRespondInAtleastNwords } from './components/clientTest/RespondInAtleastNwords/UserRespondInAtleastNwords'
// import { UserTypeWhatYouHear } from './components/clientTest/typeWUHear/UserTypeWhatYouHear'
// import { AppRoutes } from './routes/AppRoutes'

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
         {/* <AppRoutes /> */}
         {/* <UserTypeWhatYouHear /> */}
         <UserRespondInAtleastNwords />
      </div>
   )
}
export default App
