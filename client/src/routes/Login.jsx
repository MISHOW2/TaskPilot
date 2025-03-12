import React from 'react';
import '../styles/login.css';
import Feature from '../components/Feature';
import { lightBulb, rocket, security, google } from '../assets/icons/icons';

function Login() {
  return (
    <div 
    className="login-container">
     
     <h1 className="app-title">TaskPilot</h1>
      <div className="login-wrapper">
        <form className="login-form">
          <button className="google-login-btn"><img src={google} alt="" className='google-icon'/>Login with Google</button>
          <p className="divider-text">or</p>

          {/* Email Input */}
          <div className="input-container">
            <label htmlFor="email" className="input-label">Email</label>
            <img
              src="https://img.icons8.com/ios/50/new-post--v1.png"
              alt="email-icon"
              className="input-icon"
            />
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-container">
            <label htmlFor="password" className="input-label">Password</label>
            <img
              src="https://img.icons8.com/ios/50/private2.png"
              alt="password-icon"
              className="input-icon"
            />
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit" className="login-btn">Log in</button>
        </form>

        <div className="features-section">
          <Feature
           featureIcon = {rocket}
            title="Boost Your Productivity"
            description="Stay on top of tasks with smart reminders and organized categories. Never miss a deadline again."
          />
          <Feature
            featureIcon = {security}
            title="Secure and Seamless Access"
            description="Your data is protected with industry-standard encryption and JWT security.Effortless login with Google or email ensures a smooth start every time."
          />
          <Feature
           featureIcon = {lightBulb}
            title=" Insights that Matter"
            description="Track your progress with detailed analytics and reports.Understand how you’re performing and where to focus with clear, actionable insights."
          />
        </div>
      </div>
    </div>
  );
}



export default Login;
