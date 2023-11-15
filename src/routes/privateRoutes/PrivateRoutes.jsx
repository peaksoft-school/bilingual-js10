import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ component, fallbackPath, isAuthorized }) => {
   if (isAuthorized) {
      return component
   }

   return <Navigate to={fallbackPath} replace />
}

export default PrivateRoutes
