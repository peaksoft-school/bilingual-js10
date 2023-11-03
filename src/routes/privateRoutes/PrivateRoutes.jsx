import React from 'react'
import { Navigate } from 'react-router'
import { UserRoutes } from '../userRoutes/UserRoutes'
import { AdminRoutes } from '../adminRoutes/AdminRoutes'
import { routes } from '../../utils/constants/constants'

export const PrivateRoutes = ({ Component, isAuth, userRole }) => {
   if (isAuth) {
      if (userRole === 'ADMIN' && Component === UserRoutes) {
         return <Navigate to={routes.ADMIN.path} replace />
      }
      if (userRole === 'USER' && Component === AdminRoutes) {
         return <Navigate to={routes.USER.path} replace />
      }
      return <Component />
   }
   return <Navigate to={routes.LOGIN} replace />
}
