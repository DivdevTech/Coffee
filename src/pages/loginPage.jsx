import React from "react";
import "../styles/loginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="formContainer">
      <form action="">
        <div className="menus">
          <h1>Login</h1>
          <button>X</button>
        </div>

        <div className="maroonBar"></div>

        <img className="img" src="/src/assets/img/logo.png" alt="" />

        <div className="formItems">
          <div className="label">
            <label className="input1">Username: </label>
            <input type="text" className="user" placeholder="admin" />
          </div>

          <div className="label">
            <label className="input2">Password: </label>
            <input type="text" className="pwd" />
          </div>
          <button className="loginBtn">
            <Link to="/home">Login</Link>
          </button>
          <br />

          <input className="radio" type="radio" />
          <label className="check" htmlFor="html">
            Remember me
          </label>
          <br />
          <br />

          <p>copyright @2024 All Rights Reserved </p>
        </div>
      </form>
    </div>
    
  );
};

export default LoginPage;
