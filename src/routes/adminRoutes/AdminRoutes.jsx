import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Buttons/Button'
import { CreateTest } from '../../components/adminTest/CreateTest'
import { TestItems } from '../../components/adminTest/testItems/TestItems'
import { logout } from '../../store/auth/authSlice'
import CustomFormCreateTest from '../../components/adminTest/customFormCreateTest/CustomFormCreateTest'
import QuestionsPage from '../../components/UI/TestItem/QuestionsPage'

export const AdminRoutes = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const handleLogout = () => {
      dispatch(logout())
      navigate('/signin')
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
      </div>
   )
}
