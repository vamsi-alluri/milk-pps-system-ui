import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    rememberMe: false,
    credentials: {
      email: '',
      username: '',
      password: ''
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('https://localhost:7230/api/Login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });

      console.log('Login successful:', response.data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (['email', 'username', 'password'].includes(name)) {
      setFormData(prev => ({
        ...prev,
        credentials: {
          ...prev.credentials,
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Dairy Portal Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            className="form-control"
            name="username"
            value={formData.credentials.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.credentials.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={(e) =>
              setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))
            }
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember Me
          </label>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button 
          type="submit" 
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
