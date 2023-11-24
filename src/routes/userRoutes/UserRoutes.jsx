import { Route, Routes } from 'react-router-dom'
import TestList from '../../components/clientTest/testList/TestList'
import { TestListTwo } from '../../components/clientTest/testList/TestListTwo'
import { TestterComponent } from '../../utils/helpers/TestterComponent'

export const UserRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<TestList />} />
         <Route path="/test-two" element={<TestListTwo />} />
         <Route path="/testing" element={<TestterComponent />} />
      </Routes>
   )
}
