import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userPhoto, setUserPhoto] = useState(null); // State to store user photo

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setUserPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      const formData = {
        firstName,
        lastName,
        email,
        createPassword,
        confirmPassword,
        userPhoto, // Include user photo in form data
      };
      console.log("Form Data Submitted:", formData);
      // Add form submission logic here
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center md:pb-10 md:pt-14" >
      <div className="bg-white md:rounded-lg md:shadow-lg w-full max-w-md p-6 md:border md:border-gray-300">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center relative my-5">
            <div className="relative w-32 h-32">
              <img
                src={userPhoto ? URL.createObjectURL(userPhoto) : "./profile-icon-png-898.png"}
                className="w-full h-full rounded-full border border-gray-300 bg-gray-300"
                alt="User Photo"
              />
              <div className="absolute inset-0 flex items-end justify-end">
                <label htmlFor="imageAdd-btn" className="bg-gray-200 rounded-full p-2 cursor-pointer flex ">
                  📸
                </label>
                <input
                  id="imageAdd-btn"
                  type="file"
                  name="imageAdd-btn"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
            </div>

          </div>
          <h2 className="text-3xl font-bold text-center">Sign up</h2>
          <h3 className="text-xl text-center pt-2">Enter your email to sign up for this app</h3>
          <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 mt-4">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="createPassword" className="block text-lg font-medium text-gray-700">
            Create Password
          </label>
          <input
            type="password"
            id="createPassword"
            name="createPassword"
            placeholder="Create Password"
            className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            required
          />
          <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <button
            type="submit"
            className="px-4 py-2 mt-6 mb-4 bg-black hover:bg-gray-500 text-white rounded w-full"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-500 hover:text-blue-600">
              Sign In
            </Link>
          </p>
          <p className="my-5 text-center text-gray-400">or continue with</p>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 mb-4 bg-gray-300 hover:bg-gray-500 rounded w-full font-medium"
          >
            <svg className="w-6 h-6 mr-1" viewBox="0 0 48 48">
              <path
                fill="#4285F4"
                d="M24 9.5c3.9 0 6.8 1.7 8.4 3.1l6.2-6.2C35.4 2.6 30.1 0 24 0 14.5 0 6.5 5.8 2.9 14.2l7.3 5.7C12.1 13.2 17.6 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.1 24.6c0-1.3-.1-2.2-.2-3.2H24v7.2h12.9c-.5 3.4-2.2 5.8-4.9 7.5l7.4 5.7c4.3-3.9 6.7-9.6 6.7-17.2z"
              />
              <path
                fill="#FBBC05"
                d="M10.2 28.6c-.7-1.2-1.1-2.6-1.1-4 0-1.4.4-2.8 1-4l-7.3-5.7c-1.6 3.1-2.6 6.6-2.6 10.7s1 7.6 2.6 10.7l7.4-5.7z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.5 0 11.9-2.1 15.8-5.6l-7.4-5.7c-2.1 1.4-4.8 2.3-8.4 2.3-6.5 0-12-4.3-14-10.2l-7.3 5.7C6.5 42.3 14.5 48 24 48z"
              />
            </svg>
            Google
          </button>
          <p className="text-center text-xs text-gray-400">
            By clicking continue, you agree to our{' '}
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



