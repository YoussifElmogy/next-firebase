import apiConfig from "@/configs/api.config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function axiosFetch(endpoint, method = "GET", data = null) {
  try {
    const config = { method };

    if (method === "POST" || method === "PUT" || method === "DELETE") {
      config.data = data;
    }

    const response = await axiosInstance(endpoint, config);

    return response.data;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
}
