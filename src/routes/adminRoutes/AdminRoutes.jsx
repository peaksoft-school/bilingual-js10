import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
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
            <Route path="/" element={<TestItems />} />
            <Route path="/create-test" element={<CreateTest />} />
            <Route path="/update-test" element={<CreateTest />} />
            <Route path="/create-question" element={<CustomFormCreateTest />} />
            <Route path="/users-answers" element={<UserAnswers />} />
            <Route path="/user-responses" element={<UserResponses />} />
            <Route
               path="/update-question/:select"
               element={<CustomFormCreateTest />}
            />
            <Route path="/questions/:id" element={<QuestionsPage />} />
            <Route path="/checking-page" element={<CheckingPage />} />
         </Routes>
         <Outlet />
      </div>
   )
}
