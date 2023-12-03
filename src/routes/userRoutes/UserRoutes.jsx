import { Route, Routes } from 'react-router-dom'
import TestList from '../../components/clientTest/testList/TestList'
import { TestListTwo } from '../../components/clientTest/testList/TestListTwo'
import { TestterComponent } from '../../utils/helpers/TestterComponent'
import UserResult from '../../components/clientTest/user-result/UserResult'

export const UserRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<TestList />} />
         <Route path="/test/:id" element={<TestListTwo />} />
         <Route path="/testing" element={<TestterComponent />} />
         <Route path="/my-results" element={<UserResult />} />
      </Routes>
   )
}
