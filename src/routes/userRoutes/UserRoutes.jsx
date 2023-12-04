import { Route, Routes } from 'react-router-dom'
import TestList from '../../components/clientTest/testList/TestList'
// import { TestterComponent } from '../../utils/helpers/TestterComponent'
import { EstimatePracticeScore } from '../../components/clientTest/testList/EstimatePracticeScore'
import UserResult from '../../components/clientTest/user-result/UserResult'
import { PassTest } from '../../pages/passTest/PassTest'

export const UserRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<TestList />} />
         <Route path="/test/:id" element={<EstimatePracticeScore />} />
         <Route path="/testing" element={<PassTest />} />
         <Route path="/my-results" element={<UserResult />} />
      </Routes>
   )
}
