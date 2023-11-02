import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router'
import { routes } from '../utils/constants/constants'
import { LoginPage } from '../pages/login/LoginPage'
import { PrivateRoutes } from './privateRoutes/PrivateRoutes'
import { AdminRoutes } from './adminRoutes/AdminRoutes'
import { UserRoutes } from './userRoutes/UserRoutes'
import SignIn from '../components/authForm/SignIn'
import SignUp from '../components/authForm/SignUp'

export const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authLogin)
   return (
      <Routes>
         <Route path="/" element={<Navigate to={<h1>g</h1>} />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path={routes.LOGIN} element={<LoginPage />} />
         <Route
            path={routes.ADMIN.path}
            element={
               <PrivateRoutes Component={<AdminRoutes />} isAuth={isAuth} />
            }
         />
         <Route
            path={routes.USER.path}
            element={
               <PrivateRoutes Component={<UserRoutes />} isAuth={isAuth} />
            }
         />
      </Routes>
   )
}
