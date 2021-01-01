import React from "react";
import "../Navbar.css";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-custom d-flex bd-highlight mb-3 ">
      <div className="logo mr-auto p-2 bd-highlight">
        <Link to="/">ExpressIt</Link>
      </div>
      <div className="link p-2 bd-highlight align-self-center">
        <Link to="/users/login">Login</Link>
      </div>
      <div className="link p-2 bd-highlight align-self-center">
        <Link to="/users/register">Register Now</Link>
      </div>
    </div>
  );
}

export default Navbar;
