import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import Button from '../../components/UI/Buttons/Button'
import { authActions } from '../../store/auth/authSlice'

export const AdminRoutes = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const handleLogout = () => {
      dispatch(authActions.logout(navigate))
   }
   return (
      <div>
         AdminRoutes
         <Button type="button" onClick={handleLogout}>
            logout
         </Button>
         <Outlet />
      </div>
   )
}
