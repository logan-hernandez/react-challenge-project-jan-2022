import React, { Component } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from './login-form/loginForm';
import './login.css';

function Login() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/view-orders');
  }
  return (
    <div className="main-body">
      <h1 className="text-center">Login Screen</h1>
      <div className="d-flex justify-content-center mt-5">
        <LoginForm onLogin={handleClick}/>
      </div>
    </div>
  );
}

export default Login;