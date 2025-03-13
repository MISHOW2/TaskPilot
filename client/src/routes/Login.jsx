import React from 'react';
import '../styles/login.css';
import LoginWrapper from '../components/LoginWrapper';
import Features from '../components/Features';

function Login() {
  return (

  <div>
    <h1 className="app-title">TaskPilot</h1>
        <div className="login-container">
    
      <div className="login-wrapper">
        <LoginWrapper />
        <Features />
      </div>
    </div>
  </div>

  );
}

export default Login;
