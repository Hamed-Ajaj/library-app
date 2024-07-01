"use client"

import React, { useState } from 'react'

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the form submission logic here (e.g., send the email to your backend)
      setMessage('If an account with that email exists, you will receive a password reset email shortly.');
    };
  
    return (
      <div className="App">
        <div className="forgot-password-container">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    );
}

export default ForgotPasswordPage
