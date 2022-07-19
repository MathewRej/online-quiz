import React from 'react';
import './index.css';
const ForgotPassword = () => {
  return (
    <div className="main-div">
      <div className="login">
        <div className="forgot-password">
         <h3>Forgot Password</h3>
        </div>
        <div className="email">
          <input type="textfield" placeholder="Email" className="text-field"></input>
        </div>
        <div className="button1">
        <button className="register-button">
          send email
        </button>
        </div>
        <div className="sign-up">
          <a href="/">Back to Login</a>
        </div>
       
      </div>
    </div>
  )
}
export default ForgotPassword;