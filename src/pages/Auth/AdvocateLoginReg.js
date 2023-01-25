import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./LoginRegistration.css";
import useAuth from "./useAuth";

const AdvocateLoginReg = () => {
  const { currentUser } = useSelector((state) => state.authentication);
  const [addclass, setaddclass] = useState("");
  const { loginUser, registerUser, authError, authSucces } = useAuth();

  const [logindata, setLogindata] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logindata };
    newLoginData[field] = value;
    setLogindata(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(logindata.email, logindata.password,  location);
    e.preventDefault();
  };

  const handleRegisterSubmit = (e) => {
    registerUser(
      logindata.email,
      logindata.password,
      logindata.name,
      "advocate"
    );
    e.preventDefault();
  };
  useEffect(() => {
    if (currentUser?.email && currentUser?.accessToken) {
      navigate("/profile");
    }
  }, [currentUser?.accessToken, currentUser?.email, navigate]);
  return (
    <div className="bodylog">
      <div className={`containerlog ${addclass}`} id="container">
        <div className="form-container sign-up-container">
          <form
            className="formlog"

            // onClick={createUser}
          >
            <h3>Create A Lawayer Account</h3>

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
              onChange={handleOnChange}
            />
            <input
              type="email"
              className="inputlog"
              placeholder="Email"
              name="email"
              onChange={handleOnChange}
            />
            <input
              type="number"
              name="phoneNumber"
              className="inputlog"
              placeholder="Phone Number"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="Specialization"
              className="inputlog"
              placeholder="Specialization"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="PracticingCourts"
              className="inputlog"
              placeholder="Practicing Courts"
              onChange={handleOnChange}
            />

            <input
              type="password"
              className="inputlog"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
            />
            {!(authError === "") && (
              <p className="mb-5 text-sm text-center text-red-500 font-bold">
                The email address is already in use by another account.
              </p>
            )}
            {authSucces !== "" && (
              <p className="mb-5 text-sm text-center text-green-500 font-bold">
                {authSucces}
              </p>
            )}
            <button className="btnlog" onClick={handleRegisterSubmit}>
              REGISTER
            </button>
            <Link to="/">
              <p className=" text-sm text-red-600 hover:text-sky-600 hover:text-base duration-1000">
                Are You not a Lawyer? please click here{" "}
              </p>
            </Link>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="formlog">
            {/* onSubmit={handleLoginSubmit} */}
            <h1 className="h1log">Lawayer Login</h1>

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
              onChange={handleOnChange}
            />
            <br />
            <input
              className="inputlog"
              required
              placeholder="Your Password"
              // className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              type="password"
              name="password"
              onChange={handleOnChange}
            />
            <br />
            {!(authError === "") && (
              <p className="mb-5 text-sm text-center text-red-500 font-bold">
                The password is invalid or the user does not have a password.
              </p>
            )}

        
            <Link to="/home">
              <button className="btnlog" onClick={handleLoginSubmit}>
                Login
              </button>
            </Link>

            <br />
            <Link to="/">
              <p className=" text-sm text-red-600 hover:text-sky-600 hover:text-base duration-1000">
                Are You not a Lawyer? please click here{" "}
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
              <p className="  plog heading">
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

export default AdvocateLoginReg;
