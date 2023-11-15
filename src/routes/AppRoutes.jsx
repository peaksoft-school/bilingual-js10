import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../components/authForm/SignIn'
import SignUp from '../components/authForm/SignUp'
import Header from '../layout/Header'
import { ROUTES } from '../utils/constants/constants'
import { AdminRoutes } from './adminRoutes/AdminRoutes'
import PrivateRoutes from './privateRoutes/PrivateRoutes'
import { UserRoutes } from './userRoutes/UserRoutes'

export const AppRoutes = () => {
   const { isAuthorized } = useSelector((state) => state.auth)
   return (
      <Routes>
         {/* Guest */}
         <Route path="/" element={<Header />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />

         {/* User */}
         <Route
            path={`${ROUTES.USER.index}/*`}
            element={
               <PrivateRoutes
                  component={<UserRoutes />}
                  fallbackPath="/"
                  isAuthorized={isAuthorized}
               />
            }
         />

         {/* Admin */}
         <Route
            path={`${ROUTES.ADMIN.index}/*`}
            element={
               <PrivateRoutes
                  component={<AdminRoutes />}
                  fallbackPath="/"
                  isAuthorized={isAuthorized}
               />
            }
         />
      </Routes>
   )
}
