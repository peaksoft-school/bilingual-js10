import React from 'react'
import { Navigate } from 'react-router'

export const PrivateRoutes = ({ Component, isAuth, fallback = '/signin' }) => {
   if (isAuth) {
      return Component
   }
   return <Navigate to={fallback} replace />
}
