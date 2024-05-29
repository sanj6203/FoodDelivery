import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Singup");

  return (
    <div className="login-popup">
      <form className="login-popup-container" action="">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" name="" id="" required />
          )}
          <input type="email" placeholder="Your email" name="" id="" required />
          <input type="password" placeholder="Password" name="" id="" />
        </div>
        <button>
          {" "}
          {currState === "Sign Up" ? "Create Account" : "Login"}{" "}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
