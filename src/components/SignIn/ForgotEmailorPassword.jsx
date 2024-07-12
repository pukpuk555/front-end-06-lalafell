import React, { useState } from 'react';

const ForgotEmailorPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle forgot email or password here
    console.log('Email submitted for password reset:', email);
  };

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="bg-white md:rounded-lg md:shadow-lg w-full max-w-md p-6 md:border md:border-gray-300">
        <form id="forgotEmailorPassword" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center pt-4">Forgot Email or Password</h2>
          <h3 className="text-xl text-center pt-2">Enter your email to reset your password</h3>

          <label htmlFor="email" className="block text-l font-medium text-gray-700 mt-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
          />

          <button
            type="submit"
            className="px-4 py-2 mt-6 mb-4 bg-black hover:bg-gray-500 text-white rounded w-full"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotEmailorPassword;
