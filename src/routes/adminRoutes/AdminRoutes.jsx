import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/auth/authSlice'
import { USER_KEY } from '../../utils/constants/constants'
import Button from '../../components/UI/Buttons/Button'

export const AdminRoutes = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const handleLogout = () => {
      dispatch(logout())
      localStorage.clear(USER_KEY)
      navigate('/signin')
   }
   return (
      <div>
         AdminRoutes
         <Button type="button" onClick={handleLogout}>
            logout
         </Button>
      </div>
   )
}
