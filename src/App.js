import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { AppRoutes } from './routes/AppRoutes'
import { USER_KEY } from './utils/constants/constants'
import { login } from './store/auth/authSlice'

function App() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      const USER_DATA = localStorage.getItem(USER_KEY)
      const parserData = JSON.parse(USER_DATA)
      if (parserData?.token) {
         dispatch(login({ data: parserData, navigate }))
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
