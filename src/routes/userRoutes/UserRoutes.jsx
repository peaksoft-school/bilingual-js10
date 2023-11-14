import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Buttons/Button'
import { authActions } from '../../store/auth/authSlice'

export const UserRoutes = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleLogout = () => {
      dispatch(authActions.logout(navigate))
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
