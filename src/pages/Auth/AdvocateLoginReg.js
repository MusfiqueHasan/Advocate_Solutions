import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./LoginRegistration.css";
import useAuth from "./useAuth";

const AdvocateLoginReg = () => {
  const { currentUser } = useSelector((state) => state.authentication);
  const [addclass, setaddclass] = useState("");
  const { loginUser, registerUser } = useAuth();

  const [logindata, setLogindata] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  console.log(logindata);

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logindata };
    newLoginData[field] = value;
    setLogindata(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(logindata.email, logindata.password, location);
    e.preventDefault();
  };

  const handleRegisterSubmit = (e) => {
    if (
      logindata?.displayName === "" ||
      logindata.email === "" ||
      logindata.phoneNumber === "" ||
      logindata.password === ""
    ) {
      toast.error("Fields cannot be empty");
    } else {
      registerUser(logindata, "advocate");
    }
    e.preventDefault();
  };
  useEffect(() => {
    if (currentUser?.email && currentUser?.accessToken) {
      navigate("/home");
    }
  }, [currentUser?.accessToken, currentUser?.email, navigate]);
  return (
    <div className="bodylog">
      <div className={`containerlog ${addclass}`} id="container">
        <div className="form-container sign-up-container">
          <form className="formlog">
            <h3>Create A Lawayer Account</h3>

            <div class="">
              <button className="social">
                <i class="fab fa-google-plus-g"></i>
              </button>
            </div>

            <input
              type="text"
              className="inputlog"
              placeholder="Full Name"
              name="displayName"
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
            <select
              name="specialization"
              className="inputlog pr-2"
              placeholder="Specialization"
              onChange={handleOnChange}
            >
              <option> Select Specialization</option>
              <option>Criminal lawer</option>
              <option>Divorce lawer</option>
              <option>family Lawyer</option>
              <option>Corporate Lawyer</option>
              <option>Immigration Lawyer</option>
              <option>Civil Rights lawyer</option>
              <option>Healthcare Lawyer</option>
              <option>Education Lawyer</option>
              <option>Animal Rights Lawyer</option>
            </select>
            <select
              name="courts"
              className="inputlog pr-2"
              placeholder="Practicing Courts"
              onChange={handleOnChange}
            >
              <option className="text-gray-600 font-bold">
                {" "}
                Select Practicing Courts
              </option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Rajshahi</option>
              <option>Khulna</option>
              <option>Barishal</option>
              <option>Syhlet</option>
            </select>

            <input
              type="password"
              className="inputlog"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
            />
            <button className="btnlog my-4" onClick={handleRegisterSubmit}>
              REGISTER
            </button>
            <Link to="/">
              <p className=" text-sm text-blue-600 hover:text-sky-600 hover:text-base duration-1000">
                Are You not a Lawyer? please click here{" "}
              </p>
            </Link>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="formlog">
            <h1 className="h1log">Lawayer Login</h1>

            <div class="social-container"></div>

            <input
              required
              type="email"
              className="inputlog"
              placeholder="Your  Email"
              name="email"
              onChange={handleOnChange}
            />
            <br />
            <input
              className="inputlog"
              required
              placeholder="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
            />
            <br />

            <Link to="/home">
              <button className="btnlog my-4" onClick={handleLoginSubmit}>
                Login
              </button>
            </Link>

            <br />
            <Link to="/">
              <p className=" text-sm text-blue-600 hover:text-sky-600 hover:text-base duration-1000">
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
              <h1 className="text-4xl font-bold ">
                Welcome To Advocate Solutions
              </h1>
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
