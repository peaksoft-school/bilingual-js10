import React from 'react'
import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { CreateTest } from '../../components/adminTest/createTest'
import { TestItems } from '../../components/adminTest/testItems/TestItems'
import CustomFormCreateTest from '../../components/adminTest/customFormCreateTest/CustomFormCreateTest'
import QuestionsPage from '../../components/UI/TestItem/QuestionsPage'
import { UserAnswers } from '../../components/adminCheckingUserTest/UsersAnswers'
import { UserResponses } from '../../components/adminCheckingUserTest/UserResponses'
import Header from '../../layout/Header'
import { CheckingPage } from '../../pages/admin-page/CheckingPage'

export const AdminRoutes = () => {
   return (
      <div>
         <Header roles="admin" marginBottom="60px" />
         <Routes>
            <Route index path="/" element={<Navigate to="/admin/tests" />} />
            <Route path="/tests" element={<TestItems />} />
            <Route path="/tests/create-test" element={<CreateTest />} />
            <Route path="/tests/update-test" element={<CreateTest />} />
            <Route
               path="/tests/create-question"
               element={<CustomFormCreateTest />}
            />
            <Route path="/results/" element={<UserAnswers />} />
            <Route path="/results/user-responses" element={<UserResponses />} />
            <Route
               path="/tests/update-question/:select"
               element={<CustomFormCreateTest />}
            />
            <Route path="/tests/questions/:id" element={<QuestionsPage />} />
            <Route path="/results/checking-page" element={<CheckingPage />} />
         </Routes>
         <Outlet />
      </div>
   )
}
