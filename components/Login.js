import React, { useState } from "react";
import "../Login.css";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const dataToSend = {
      email: email,
      password: password,
    };
    const res = await Axios.post(
      "http://localhost:3012/users/login",
      dataToSend
    );
    console.log(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked submit");
    if (email === "" || password === "") {
      alert("Field cannot be empty");
      return;
    }
    handleLogin();
  };

  return (
    <div id="login">
      <div id="login-info">
        <h1 id="heading">Welcome Back to ExpressIt!</h1>
        <div>Expresso Write-Ups are waiting for you!</div>
      </div>
      <div id="form">
        <h1>
          <div className="logo">ExpressIt</div>
        </h1>
        <h2>Login Here.</h2>

        <form onSubmit={handleSubmit}>
          <div>Enter your Email:</div>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <br />

          <div>Enter your password:</div>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <br />

          <input
            type="submit"
            value="Login"
            className="submit-btn"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
