import { collection, getDocs } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { db } from "../../Firebase/Firebase-config";
// import { useAuth } from "../../services/useAuth";

async function PrivateRoute({ children}) {
    const usersCollectionRef = collection(db, "loginUser");
    const data = await getDocs(usersCollectionRef);
    const allData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    return allData?.email ? children : <Navigate to="/" />;
  }
  export default PrivateRoute;