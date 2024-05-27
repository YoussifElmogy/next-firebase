import apiConfig from "@/configs/api.config";
import axios from "axios";

const axiosInstance = axios.create({ ...apiConfig });
axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use((originalConfig) => {
  const config = originalConfig;
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  async (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;

export const ApiMethods = Object.freeze({
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
  PATCH: "PATCH",
});

export const ApiErrors = Object.freeze({
  UNAUTHORIZED: 401,
});
