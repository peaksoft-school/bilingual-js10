import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom'
import Button from '../../components/UI/Buttons/Button'
import { CreateTest } from '../../components/adminTest/createTest'
import { TestItems } from '../../components/adminTest/testItems/TestItems'
import CustomFormCreateTest from '../../components/adminTest/customFormCreateTest/CustomFormCreateTest'
import QuestionsPage from '../../components/UI/TestItem/QuestionsPage'
import { authActions } from '../../store/auth/authSlice'

export const AdminRoutes = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const handleLogout = () => {
      dispatch(authActions.logout(navigate))
   }
   return (
      <div>
         <Button type="button" onClick={handleLogout}>
            logout
         </Button>
         <Routes>
            <Route path="/" element={<TestItems />} />
            <Route path="/create-test" element={<CreateTest />} />
            <Route path="/update-test" element={<CreateTest />} />
            <Route path="/custom-form" element={<CustomFormCreateTest />} />
            <Route path="/QuestionsPage" element={<QuestionsPage />} />
         </Routes>
         <Outlet />
      </div>
   )
}
