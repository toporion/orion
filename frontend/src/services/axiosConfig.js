import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backendp-rho.vercel.app", // Backend URL
});

export default axiosInstance;
