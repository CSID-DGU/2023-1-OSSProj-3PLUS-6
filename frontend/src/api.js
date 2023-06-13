import axios from "axios";

const api = axios.create({
  baseURL: "https://3plus.world",
  // baseURL: "http://localhost:3000",
});

export default api;
