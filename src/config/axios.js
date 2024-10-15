import axios from "axios";

const baseUrl = "http://14.225.212.6:8080/api/";

const config = {
  baseUrl,
  timeout: 3000000,
};

const api = axios.create(config);

api.defaults.baseURL = baseUrl;

const handleBefore = (config) => {

  const token = localStorage.getItem("token");

  config.headers["Authorization"] = `Bearer ${token}`;
  
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, handleError);


export default api;