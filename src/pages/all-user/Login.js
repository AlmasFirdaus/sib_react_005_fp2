import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/product/productSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setEmpty] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setEmpty(true);
    } else {
      setEmpty(false);
      dispatch(loginUser({ username, password, redirect }));
    }
  };

  const redirect = (status) => {
    if (status) {
      navigate("/");
    }
  };
  return (
    <section id="login">
      <div
        className="w-full h-screen bg-cover bg-center  flex justify-center items-center"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1557944697-7c532ac293a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80")` }}
      >
        <div className="w-full h-screen bg-black/30 backdrop-blur-sm flex justify-center items-center">
          <div
            className="w-2/3 bg-white bg-cover rounded-xl overflow-hidden flex"
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1557944697-7c532ac293a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80")` }}
          >
            <div className="w-1/2 hidden lg:flex"></div>
            <form onSubmit={handleLogin} className="w-full lg:w-1/2 flex flex-col justify-between px-7 py-10 text-primary bg-primaryLight">
              <h1 className="font-bold text-primary text-center text-2xl">Login</h1>
              <div className="py-14">
                <label htmlFor="username" className="font-semibold text-lg">
                  Username
                </label>
                <input type="text" onChange={handleUsername} value={username} className="w-full bg-primaryLight border-b-2 outline-none mb-3" />
                <label htmlFor="password" className="font-semibold text-lg">
                  Password
                </label>
                <input type="password" onChange={handlePassword} value={password} className="w-full bg-primaryLight border-b-2 outline-none" />
                <div className="w-full py-4 text-red-500 italic capitalize tracking-wide">{empty && <p>Please fill in the login form first</p>}</div>
              </div>
              <div className="flex justify-end items-center">
                <Link to="/" className="px-7 py-1 mr-5 rounded-full text-primary transition duration-200 hover:bg-blueButton hover:text-primaryLight capitalize">
                  Back
                </Link>
                <button className="px-7 py-1 bg-blueButton brightness-110 rounded-full text-primaryLight transition duration-100 hover:brightness-100 capitalize">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
