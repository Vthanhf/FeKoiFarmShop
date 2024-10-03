import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
    baseURL: ''
  });

  export default api;