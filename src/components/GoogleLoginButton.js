import React from 'react';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Login with Google');
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {/* Google logo */}
      <svg
        className="w-5 h-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          fill="#4285F4"
          d="M23.49 12.3c0-.7-.06-1.37-.18-2h-4.26v3.2h2.44c-1.07.89-2.44 1.4-3.92 1.4-3.02 0-5.59-2.5-5.59-5.58 0-3.09 2.57-5.58 5.59-5.58 1.64 0 3.14.68 4.2 1.8l3.12-3.12C21.94 2.23 18.57.93 15 1.28 9.03 1.85 5 5.92 5 10.5c0 2.61 1.33 4.91 3.34 6.28-1.24-3.65 1.46-7.84 5.68-7.84 3.16 0 5.69 2.55 5.69 5.69 0 3.16-2.53 5.69-5.69 5.69-3.48 0-6.31-2.64-6.31-5.9v-1.62h4.5c.59 0 1.08-.48 1.08-1.07z"
        />
      </svg>
      <span className="font-medium">Login with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
