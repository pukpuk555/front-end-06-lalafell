import axios from "axios";
import { BASE_URL } from "../utils/constants";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const PROD_URL = import.meta.env.VITE_PROD_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL || PROD_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers["authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
