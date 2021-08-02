import axios from "axios";

const api = axios.create({
  baseURL: "https://kaique-email-api.herokuapp.com",
});

export default api;
