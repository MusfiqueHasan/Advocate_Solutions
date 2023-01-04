import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./LoginRegistration.css";
import useAuth from "./useAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import { auth, db } from "../../Firebase/Firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const UserLoginReg = () => {
  let usersCollectionRef = collection(db, "loginUser");
  const [addclass, setaddclass] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [email, setEmail] = useState("");
  const { user, loginUser } = useAuth();
  const [logindata, setLogindata] = useState({});

  const getNewsFeeds = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const allData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setEmail(allData?.email);
    } catch (error) {
      console.log(error);
    }
  };

  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logindata };
    newLoginData[field] = value;
    setLogindata(newLoginData);
  };

  const handleSubmit = (e) => {
    loginUser(logindata.email, logindata.password, location, navigate);
    e.preventDefault();
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        savedUser(user.email, user.displayName);
        setAuthError("");
        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const savedUser = async (email, displayName) => {
    const user = { email: email, displayName: displayName };
    await addDoc(usersCollectionRef, user);
    console.log("created successfully");
  };

  useEffect(() => {
    getNewsFeeds();
  }, []);

  useEffect(() => {
    if (!(email === "")) {
      navigate("/home");
      sessionStorage.setItem("url", "/home");
    }
  }, [email]);

  return (
    <div className="bodylog">
      <div className={`containerlog ${addclass}`} id="container">
        <div className="form-container sign-up-container">
          <form
            className="formlog"
            // onSubmit={handleRegisterSubmit}
            // onClick={createUser}
          >
            <h3>Create A User Account</h3>

            <div class="">
              <button
                // onClick={handleGoogleSignIn}
                // onClick={handleGoogleSignIn}
                className="social"
              >
                <i class="fab fa-google-plus-g"></i>
              </button>
            </div>
            {/* <span className="spanlog heading_two">
              or use your email for registration
            </span> */}

            <input
              type="text"
              className="inputlog"
              placeholder="Full Name"
              name="name"
              onBlur={handleOnchange}
            />
            <input
              type="email"
              className="inputlog"
              placeholder="Email"
              name="email"
              onBlur={handleOnchange}
            />

            <input
              type="number"
              name="phoneNumber"
              className="inputlog"
              placeholder="Phone Number"
              onBlur={handleOnchange}
            />
            <input
              type="password"
              className="inputlog"
              placeholder="Password"
              name="password"
              onBlur={handleOnchange}
            />
            <button className="btnlog" type="submit">
              REGISTER
            </button>

            <Link to="/lawyerAuth">
              <p className=" text-sm text-red-600 hover:text-sky-600 hover:text-base duration-1000 py-2">
                Are You a Lawyer? please click here{" "}
              </p>
            </Link>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="formlog">
            {/* onSubmit={handleLoginSubmit} */}
            <h1 className="h1log">User Login</h1>

            <div class="social-container">
              {/* <button onClick={handleGoogleSignIn} className=" social">
                <i class="fab fa-google-plus-g"></i>
              </button> */}
            </div>
            {/* <span className="heading_two spanlog">or use your account</span> */}

            <input
              required
              type="email"
              className="inputlog"
              // className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Your  Email"
              name="email"
              onBlur={handleOnchange}
            />
            <br />
            <input
              className="inputlog"
              required
              placeholder="Your Password"
              // className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              type="password"
              name="password"
              onBlur={handleOnchange}
            />
            <br />

            <button onSubmit={handleSubmit} className="btnlog" type="submit">
              Login
            </button>
            <p>--------------------------------------</p>
            <Button
              variant="contained"
              onClick={signInWithGoogle}
              style={{ backgroundColor: "#006266" }}
            >
              Google Sign In
            </Button>
            <br />

            <Link to="/lawyerAuth">
              <p className=" text-sm text-red-600 hover:text-sky-600 hover:text-base duration-1000">
                Are You a Lawyer? please click here{" "}
              </p>
            </Link>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="text-2xl font-bold ">Welcome Back!</h1>
              <p className="plog heading">
                To keep connected with us please login with your personal info.
              </p>
              <button
                className="ghost btnlog"
                id="signIn"
                onClick={() => setaddclass("")}
              >
                GO TO LOGIN
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              {/* <h1 className="text-2xl font-bold ">Hello, Friend!</h1> */}
              <p className=" plog heading">
                Enter your personal details and start journey with us.
              </p>
              <button
                className="ghost btnlog"
                id="signUp"
                onClick={() => setaddclass("right-panel-active")}
              >
                GO TO REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginReg;
