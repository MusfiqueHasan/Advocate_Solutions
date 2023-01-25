import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

 function PrivateRoute({ children }) {
  const { user, token } = useAuth();

  return user?.email && token ? children : <Navigate to="/" />;
}
export default PrivateRoute;
