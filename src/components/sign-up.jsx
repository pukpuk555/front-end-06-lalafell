import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
 //รอ หน้า sign in ของน้องปอนด์
  /**
 * รับค่ามาและเก็บค่าลง form data
 * @param {event} e 
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      const formData = {
        name,
        lastName,
        email,
        password,
        confirmPassword,
      };
      console.log("Form Data Submitted:", formData);
      // Add form submission logic here
    }
  };

  return (
    <>
      <div className="flex justify-center relative my-5">
        <img
          id="imageAdd"
          src="./profile-icon-png-898.png"
          className="w-32 h-32 rounded-full border border-gray-300 bg-gray-300"
          alt="User Photo"
        />
        <div className="flex justify-end item-end">
        <label
          htmlFor="imageAdd-btn"
          className="absolute bg-gray-200 rounded-full p-2 cursor-pointer "
        >
          📷
        </label>
        <input
          id="imageAdd-btn"
          type="file"
          name="imageAdd-btn"
          className="hidden"
          accept="image/*"
        />
        </div>
      </div>
      <div className="flex flex-col text-center my-2">
        <h1 className="text-4xl font-semibold mb-3">Create an account</h1>
        <p>Enter your email to sign up for this app</p>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="py-3">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="border border-blue-500 rounded-lg py-1 w-[400px] px-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="py-3">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border border-blue-500 rounded-lg py-1 w-[400px] px-2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="py-3">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="border border-blue-500 rounded-lg py-1 w-[400px] px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="py-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-blue-500 rounded-lg py-1 w-[400px] px-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="[A-Za-z0-9]{8,}"
              required
            />
          </div>
          <div className="py-3">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="border border-blue-500 rounded-lg py-1 w-[400px] px-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="py-3">
            <button
              type="submit"
              className="border border-black-500 rounded py-2 w-[400px] bg-gray-300 hover:bg-gray-500"
            >
              Sign up with Email
            </button>
          </div>
        </form>
      </div>
       
      <div className="flex flex-col items-center my-3">
            <h2 className="2xl my-2 ">Already have an account <a href="signIN" className="active:bg-violet-700">Sign-In</a></h2>
            <p className="my-3 opacity-55">Or continue with</p>
            <div className="py-3">
            <a href="www.google.co.th" target="_blank">
            <button
            type="button"
            className="flex items-center justify-center px-4 py-2 mb-3 bg-gray-300 hover:bg-gray-500 rounded font-medium w-[400px]"
          >
            <svg className="w-[14px] h-[14px] mr-1" viewBox="0 0 48 48">
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
            </a>
          </div>
          <div>
            <p>
            By clicking continue, you agree to our <a href="" className="font-semibold">Terms of Service</a> and <a href="" className="font-semibold">Privacy Policy</a>
            </p>
          </div>
        </div>
    </>
  );
}
