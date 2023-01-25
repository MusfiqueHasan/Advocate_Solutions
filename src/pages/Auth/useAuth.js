import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase-config";
import {  useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/actions/authAction";

const useAuth = () => {
  const dispatch = useDispatch()
  let usersCollectionRef = collection(db, "loginUser");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  // const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const registerUser = (email, password, name, role) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to database
        savedUser(email, name, role, "register");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
        setTimeout(() => {
          setAuthError("");
        }, 2000);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        setTimeout(() => {
          setAuthError("");
        }, 2000);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        dispatch(setUserInfo({}))
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        savedUser(user.email, user.displayName, "user", "google");
        setAuthError("");
        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, []);

  useEffect(()=>{
    if(token && user){
      dispatch(setUserInfo(user))
    }
  },[dispatch, token, user])
  

  const savedUser = async (email, displayName, role, isGoogle) => {
    if (isGoogle === "google") {
      const data = await getDocs(usersCollectionRef);
      const allData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const credential = allData.find(
        (item) =>
          item.email === email &&
          item.displayName === displayName &&
          item.role === role
      );
      const credentialData = { ...credential };
      delete credentialData.id;

      if (!!credential) {
        const userDoc = doc(db, "loginUser", credential?.id);
        await updateDoc(userDoc, credentialData);
        console.log("updated successfully");
      } else {
        const user = { email: email, displayName: displayName, role: role };
        await addDoc(usersCollectionRef, user);
        console.log("created successfully");
      }
    }
    if (isGoogle === "register") {
      const user = { email: email, displayName: displayName, role: role };
      await addDoc(usersCollectionRef, user);
      console.log("created successfully");
    }
  };

  return {
    user,
    token,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    authError,
    signInWithGoogle,
  };
};

export default useAuth;
