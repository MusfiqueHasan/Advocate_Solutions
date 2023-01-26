import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./LoginRegistration.css";
import useAuth from "./useAuth";

const UserLoginReg = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.authentication);
  const [addclass, setaddclass] = useState("");
  const { signInWithGoogle, loginUser, registerUser } = useAuth();
  const [logindata, setLogindata] = useState({});

  
  // console.log(logindata);

  console.log(location.pathname==='/about')

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logindata };
    newLoginData[field] = value;
    setLogindata(newLoginData);
  };

  const handleSubmit = (e) => {
    loginUser(logindata.email, logindata.password, location);
    e.preventDefault();
  };
  const handleRegisterSubmit = (e) => {
    registerUser(logindata, "user");
    e.preventDefault();
  };

  useEffect(() => {
    if (currentUser?.email && currentUser?.accessToken) {
      navigate("/home");
    
    }
  }, [currentUser?.accessToken, currentUser?.email, navigate]);

  // useEffect(() => {
  //   // check if the user is not on login page
  //   if (location.pathname !== "/" && currentUser?.email && currentUser?.accessToken) {
  //     // store the current location in session storage
  //     sessionStorage.setItem("currentLocation", location.pathname);
  //     setCurrentLocation(location.pathname)
  //   }
  // }, [currentUser?.accessToken, currentUser?.email, location]);

  // useEffect(() => {
  //   // When the page is refreshed, check for the current location in session storage
  //   if (sessionStorage.getItem("currentLocation") && currentUser?.email && currentUser?.accessToken) {
  //     // If it exists, redirect the user to that location
  //     const currentLocation = sessionStorage.getItem("currentLocation");
  //     if (location.pathname === "/") {
  //       navigate(currentLocation);
  //     }
  //   }
  // }, [currentUser?.accessToken, currentUser?.email, location.pathname, navigate]);

  return (
    <div className="bodylog">
      <div className={`containerlog ${addclass}`} id="container">
        <div className="form-container sign-up-container">
          <form className="formlog">
            <h3>Create A User Account</h3>

            <div>
              <button className="social">
                <i class="fab fa-google-plus-g"></i>
              </button>
            </div>

            <input
              type="text"
              className="inputlog"
              placeholder="Full Name"
              name="displayName"
              onChange={handleOnchange}
            />
            <input
              type="email"
              className="inputlog"
              placeholder="Email"
              name="email"
              onChange={handleOnchange}
            />

            <input
              type="number"
              name="phoneNumber"
              className="inputlog"
              placeholder="Phone Number"
              onChange={handleOnchange}
            />
            <input
              type="password"
              className="inputlog"
              placeholder="Password"
              name="password"
              onChange={handleOnchange}
            />
            <button className="btnlog my-4" onClick={handleRegisterSubmit}>
              REGISTER
            </button>

            <Link to="/lawyerAuth">
              <p className=" text-sm text-blue-600 hover:text-sky-600 hover:text-base duration-1000 py-2">
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
              onChange={handleOnchange}
            />
            <br />
            <input
              className="inputlog"
              required
              placeholder="Your Password"
              // className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              type="password"
              name="password"
              onChange={handleOnchange}
            />
            <br />

            <button onClick={handleSubmit} className="btnlog">
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
              <p className=" text-sm text-blue-600 hover:text-sky-600 hover:text-base duration-1000">
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
              <h1 className="text-4xl font-bold ">
                Welcome To Advocate Solutions
              </h1>
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
