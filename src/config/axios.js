import axios from "axios";

const baseUrl = "";

const config = {
  baseUrl,
  timeout: 3000000,
};

const api = axios.create(config);

api.defaults.baseURL = baseUrl;

const handleBefore = (config) => {

  const token = localStorage.getItem("token")?.replaceAll('"', "");

  config.headers["Authorization"] = `Bearer ${token}`;
  
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, handleError);


export default api;