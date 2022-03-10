import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Bg-Img.css";

const Login = () => {
  const {
    setUser,
    setIsLoading,
    signInWithEmail,
    signInWithGoogle,
    signInWithFacebook,
  } = useAuth();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || `/home`;

  // to get eamil address
  const emailValue = (e) => {
    setEmail(e.target.value);
  };
  // to get password
  const passwordValue = (e) => {
    setPassword(e.target.value);
  };

  // Login function for eamil and password
  const login = () => {
    signInWithEmail(email, password)
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // login with Google account
  const google = () => {
    signInWithGoogle()
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName);
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // login with Facebook account
  const facebook = () => {
    signInWithFacebook()
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName);
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Save user to the database
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://serene-wildwood-97102.herokuapp.com/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return (
    // Login Form design
    <div className="container my-5">
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="shadow p-4 text-center rounded mt-4">
          <h2 className=" text-warning">Log In</h2>
          <input
            onBlur={emailValue}
            className="form-control my-3"
            type="email"
            name=""
            placeholder="Email"
          />
          <input
            onBlur={passwordValue}
            className="form-control my-3"
            type="password"
            name=""
            placeholder="******"
          />
          <button onClick={login} className="btn btn-warning border hover mt-3">
            Login
          </button>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="mb-4 mt-3 flex justify-center">
              <button onClick={google} className="btn border hover">
                <img
                  src="https://i.ibb.co/hfzqYts/google-color.png"
                  alt=""
                  width={25}
                  height={25}
                  className="mx-2"
                />
                Google
              </button>
            </div>
            <div className="mb-4 mt-3 flex justify-center">
              <button onClick={facebook} className="btn border hover">
                <img
                  src="https://i.ibb.co/Ldw03gp/facebook-color.png"
                  alt=""
                  width={25}
                  height={25}
                />
                Facebook
              </button>
            </div>
          </div>
          <NavLink to="./register">New User??</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
