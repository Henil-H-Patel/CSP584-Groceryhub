import React, { useState } from 'react';
import './Register.css';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [usertype, setUsertype] = useState('customer');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (password !== repassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      // Make API call to register user
      const response = await fetch('http://localhost:8000/api/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, repassword, usertype }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Registration successful, redirect to the login page
      window.location.href = '/Login';
    } catch (error) {
      console.error('Error registering user:', error.message);
      setError('Error registering user. Please try again.');
    }
  };

  return (
    <div className="registration-container">
      <h2 className="meta">Registration</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} className="form">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Re-Password:
          <input type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} required />
        </label>
        <label>
          User Type:
          <select value={usertype} onChange={(e) => setUsertype(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="manager">Store Manager</option>
            <option value="retailer">Salesman</option>
          </select>
        </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default Registration;
