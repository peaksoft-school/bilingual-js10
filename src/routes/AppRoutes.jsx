import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router'
import { routes } from '../utils/constants/constants'
import { PrivateRoutes } from './privateRoutes/PrivateRoutes'
import { AdminRoutes } from './adminRoutes/AdminRoutes'
import { UserRoutes } from './userRoutes/UserRoutes'
import SignIn from '../components/authForm/SignIn'
import SignUp from '../components/authForm/SignUp'
import Header from '../layout/Header'

export const AppRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authLogin)
   return (
      <Routes>
         <Route path="/" element={<Header />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
         <Route
            path={routes.ADMIN.path}
            element={
               <PrivateRoutes
                  Component={AdminRoutes}
                  isAuth={isAuth}
                  userRole={role}
               />
            }
         />
         <Route
            path={routes.USER.path}
            element={
               <PrivateRoutes
                  Component={UserRoutes}
                  isAuth={isAuth}
                  userRole={role}
               />
            }
         />
      </Routes>
   )
}
