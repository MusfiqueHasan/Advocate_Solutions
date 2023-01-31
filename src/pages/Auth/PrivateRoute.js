
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { currentUser } = useSelector((state) => state.authentication);
  return currentUser?.email ? children : <Navigate to="/" />;
}
export default PrivateRoute;
