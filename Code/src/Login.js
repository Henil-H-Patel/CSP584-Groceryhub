import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, usertype }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      sessionStorage.setItem('usertype', responseData.data.user.usertype);
      sessionStorage.setItem('username', responseData.data.user.username);
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging user:', error.message);
      setError('Error logging in. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="meta">Login</h2>
      <div className="entry">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Username:
            </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          
          <label>
            Password:
            </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <label>
            User Type:
            </label>
            <select value={usertype} onChange={(e) => setUsertype(e.target.value)}>
              <option value="customer">Customer</option>
              <option value="storeManager">Store Manager</option>
              <option value="salesman">Salesman</option>
            </select>
          
          <button type="submit">Login</button>
          {error && <h4>{error}</h4>}
          <h5>
            <strong>New User? <a href="/register">Register here!</a></strong>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Login;
