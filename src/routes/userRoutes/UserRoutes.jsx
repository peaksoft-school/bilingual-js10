import { Navigate, Route, Routes } from 'react-router-dom'
import TestList from '../../components/clientTest/testList/TestList'
import { EstimatePracticeScore } from '../../components/clientTest/testList/EstimatePracticeScore'
import UserResult from '../../components/clientTest/user-result/UserResult'
import { PassTest } from '../../pages/passTest/PassTest'
import { SendTheResults } from '../../components/clientTest/sendTheResults/SendTheResults'

export const UserRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/user/test-list" />} />
         <Route path="/test-list" element={<TestList />} />
         <Route
            path="/test-list/test/:id"
            element={<EstimatePracticeScore />}
         />
         <Route path="/test-list/testing" element={<PassTest />} />
         <Route
            path="/test-list/send-the-results"
            element={<SendTheResults />}
         />
         <Route path="/results/my-results" element={<UserResult />} />
      </Routes>
   )
}
