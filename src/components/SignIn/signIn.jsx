import { validateEmail } from "@/utils/helper";
import axiosInstance from "@/utils/axiosInstance"; // นำเข้า axiosInstance
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    setLoading(true); // ตั้งค่า loading เพื่อแสดงการรอ

    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });

      if (
        response.status === 200 &&
        response.data &&
        response.data.accessToken
      ) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
      } else {
        setError("Login failed. Please check your email and password.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false); // ยกเลิกการแสดงการรอ
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="bg-white md:rounded-lg md:shadow-lg w-full max-w-md p-6 md:border md:border-gray-300">
        <form id="logIn" onSubmit={handleLogin}>
          <h2 className="text-3xl font-bold text-center pt-4">Sign in</h2>
          <h3 className="text-xl text-center pt-2">Sign in to your account</h3>
          <label
            htmlFor="email"
            className="block text-l font-medium text-gray-700 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            required
            className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="password"
            className="block text-l font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mt-1 mb-4 p-2 border border-gray-300 rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            to="/ForgotEmailorPassword"
            className="block text-blue-500 hover:text-blue-600 text-center"
          >
            Forgot email or password?
          </Link>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}{" "}
          {/* แสดงข้อผิดพลาด */}
          <button
            type="submit"
            className="px-4 py-2 mt-6 mb-4 bg-black hover:bg-gray-500 text-white rounded w-full"
            disabled={loading} // ปิดปุ่มเมื่อกำลังโหลด
          >
            {loading ? "Signing in..." : "Sign in with email"}{" "}
            {/* แสดงข้อความเมื่อกำลังโหลด */}
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600">
              Sign Up
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
            By clicking continue, you agree to our{" "}
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
