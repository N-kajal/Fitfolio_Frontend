import axios from "axios";

const api = axios.create({
  baseURL: "fitfoliobackend-production.up.railway.app", // your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
