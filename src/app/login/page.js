'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Shield } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '', // New field for username
  });

  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Sending the request with only email, password, and userName
      const response = await axios.post('https://vigil-ai.azurewebsites.net/login', {
        email: formData.email,
        password: formData.password,
        userName: formData.userName,
      });

      console.log('Login successful:', response.data);

      // Save token in session storage
      const token = response.data?.token?.result;
      if (token) {
        sessionStorage.setItem('authToken', token);
        console.log('Token saved to session storage');
      }

      // Redirect user to dashboard on successful login
      router.push('/dashboard');
    } catch (err) {
      console.error('Login error:', err);

      if (err.response) {
        const status = err.response.status;
        if (status === 401) {
          setError('Unauthorized: Invalid email or password.');
        } else if (status === 400) {
          setError('Bad Request: Please check your inputs.');
        } else if (status === 500) {
          setError('Server Error: Please try again later.');
        } else {
          setError('An unexpected error occurred. Please try again.');
        }
      } else {
        setError('Network error: Please check your connection.');
      }
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google SSO triggered');
    // Add Google login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <Shield className="h-10 w-10 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800 ml-2">PropGuard</h1>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Login to access your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-2 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-2 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* User Name */}
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your username"
              className="mt-2 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Google Login */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login with Google
          </button>
        </div>

        {/* Register Redirect */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">
            Don’t have an account?{' '}
            <button
              type="button"
              onClick={() => router.push('/register')}
              className="text-blue-600 hover:text-blue-800"
            >
              Register here
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
