import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import { CreateTest } from '../../components/adminTest/createTest'
import { TestItems } from '../../components/adminTest/testItems/TestItems'
import CustomFormCreateTest from '../../components/adminTest/customFormCreateTest/CustomFormCreateTest'
import QuestionsPage from '../../components/UI/TestItem/QuestionsPage'
import Header from '../../layout/Header'

export const AdminRoutes = () => {
   return (
      <div>
         <Header roles="admin" />
         <Routes>
            <Route path="/" element={<TestItems />} />
            <Route path="/create-test" element={<CreateTest />} />
            <Route path="/update-test" element={<CreateTest />} />
            <Route path="/create-question" element={<CustomFormCreateTest />} />
            <Route
               path="/update-question/:select"
               element={<CustomFormCreateTest />}
            />
            <Route path="/questions/:id" element={<QuestionsPage />} />
         </Routes>
         <Outlet />
      </div>
   )
}
