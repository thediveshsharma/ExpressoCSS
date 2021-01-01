import React, { useState } from "react";
import "../Register.css";
import Axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleRegister = async () => {
    const dataToSend = {
      name: name,
      email: email,
      password: password,
      conPassword: conPassword,
    };
    const res = await Axios.post(
      "http://localhost:3012/users/register",
      dataToSend
    );
    console.log(res);
    console.log(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked submit");
    if (password !== conPassword) {
      setErrors({ ...errors, pass: "Passwords dont match" });
      setTimeout(function () {
        window.location.reload();
      }, 3000);
      return;
    }
    console.log(errors);
    handleRegister();
  };
  return (
    <div>
      <div id="register">
        <div id="register-info">
          <h1 id="heading">Welcome to ExpressIt!</h1>
          <div>
            Fasten up your seatbelts and get ready to enjoy the ride of fun
            Expresso Write-Ups!
          </div>
        </div>
        <div id="form">
          <h1>
            <div className="logo">ExpressIt</div>
          </h1>
          <h2> Registration </h2>
          <form onSubmit={handleSubmit}>
            <div>Enter your Name:</div>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <br />

            <div>Enter your Email:</div>
            <input
              type="email"
              name="mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <br />

            <div>Set your password:</div>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <br />

            <div>Confirm your password:</div>
            <input
              type="password"
              name="conPassword"
              onChange={(e) => {
                setConPassword(e.target.value);
              }}
              value={conPassword}
            />
            <div className="text-danger">{errors.pass}</div>
            <br />

            <input
              type="submit"
              value="Register"
              className="submit-btn"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
