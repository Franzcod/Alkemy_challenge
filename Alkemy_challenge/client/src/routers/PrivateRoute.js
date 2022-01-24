import { Navigate } from "react-router-dom";
import  HomePage  from "../pages/HomePage";
 
export const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <HomePage /> : <Navigate to="/auth/login" />;
};