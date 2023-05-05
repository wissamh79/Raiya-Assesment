import axios from "axios";

const BASE_URL = "https://raiya-assesment-api.onrender.com/api/v1/";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,

  withCredentials: true,
});
