import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/auth/authSlice'
import { USER_KEY } from '../../utils/constants/constants'
import Button from '../../components/UI/Buttons/Button'

export const UserRoutes = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleLogout = () => {
      dispatch(logout())
      localStorage.clear(USER_KEY)
      navigate('/signin')
   }

   return (
      <div>
         UserRoutes
         <Button type="button" onClick={handleLogout}>
            Logout
         </Button>
      </div>
   )
}
