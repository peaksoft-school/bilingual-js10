import { Route, Routes } from 'react-router-dom'
import TestList from '../../components/clientTest/testList/TestList'
import { EstimatePracticeScore } from '../../components/clientTest/testList/EstimatePracticeScore'
import UserResult from '../../components/clientTest/user-result/UserResult'
import { PassTest } from '../../pages/passTest/PassTest'
import { SendTheResults } from '../../components/clientTest/sendTheResults/SendTheResults'

export const UserRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<TestList />} />
         <Route path="/test/:id" element={<EstimatePracticeScore />} />
         <Route path="/testing" element={<PassTest />} />
         <Route path="/my-results" element={<UserResult />} />
         <Route path="/send-the-results" element={<SendTheResults />} />
      </Routes>
   )
}
