import axios from "axios";
export const baseURL = "https://chat-hive-4o7f.onrender.com";
export const httpClient = axios.create({
  baseURL: baseURL,
});
