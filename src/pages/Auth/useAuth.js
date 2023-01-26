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
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase-config";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/actions/authAction";
import { toast } from "react-toastify";

const useAuth = () => {
  const dispatch = useDispatch();
  let usersCollectionRef = collection(db, "loginUser");
  let chatCollectionRef = collection(db, "userChats");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();

  const registerUser = async (registerData, role) => {
    const { email, password, displayName } = registerData;

    if (registerData === null) {
      toast.error("Fields cannot be empty");
    } else {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const newUser = { email, displayName: displayName };
          setUser(newUser);
          // save user to database
          savedUser(registerData, userCredential.user.uid, role, "register");
          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: displayName,
          })
            .then(() => {})
            .catch((error) => {});

          const userDoc = doc(chatCollectionRef, userCredential.user.uid);
          setDoc(userDoc, {});
        })
        .catch((error) => {
          toast.error(
            "The email address is already in use by another account."
          );
        })
        .finally(() => setIsLoading(false));
    }
  };

  const loginUser = (email, password, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        toast.error("Credential does not match");
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        dispatch(setUserInfo({}));
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const uid = user.uid;
        savedUser(user, uid, "user", "google");

        const userDoc = doc(chatCollectionRef, result.user.uid);
        setDoc(userDoc, {});

        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        toast.error(
          "The password is invalid or the user does not have a password."
        );
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

  useEffect(() => {
    if (token && user) {
      dispatch(setUserInfo(user));
    }
  }, [dispatch, token, user]);

  const savedUser = async (registerData, uId, role, isGoogle) => {
    const { email, displayName } = registerData;
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
      credentialData.uid = uId;

      if (!!credential) {
        const userDoc = doc(db, "loginUser", uId);
        await updateDoc(userDoc, credentialData);
        toast.success("User loged in successfully");
      } else {
        const user = {
          email: email,
          displayName: displayName,
          uid: uId,
          role: role,
        };
        const userDoc = doc(usersCollectionRef, uId);
        await setDoc(userDoc, user);
        toast.success("User loged in successfully");
      }
    }
    if (isGoogle === "register") {
      const copyUser = { ...registerData };
      copyUser.role = role;
      copyUser.uid = uId;
      const userDoc = doc(usersCollectionRef, uId);
      await setDoc(userDoc, copyUser);
      toast.success("User created successfully please go to login");
    }
  };

  return {
    user,
    token,
    registerUser,
    logOut,
    loginUser,
    isLoading,
    signInWithGoogle,
  };
};

export default useAuth;
