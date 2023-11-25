import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { USER_KEY } from './utils/constants/constants'
import { authActions } from './store/auth/authSlice'
import { ListenSelectEnglish } from './components/clientTest/ListenSelect_User/ListenSelectEnglish'
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
         {/* <CustomFormCreateTest /> */}
         <ListenSelectEnglish />
      </div>
   )
}
export default App
