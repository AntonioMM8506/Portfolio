import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
    //baseURL: "https://antoniomm8506.github.io/Portfolio/api/", // Base URL for your API
    baseURL: "https://localhost:1234",
    headers: {
        "Content-Type": "application/json", // Set the content type for POST requests
    },
    timeout: 10000
});


axiosInstance.interceptors.request.use(
    (config) => {
        console.log("Request sent:", config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor (optional: to handle errors globally)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error response:", error.response || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;