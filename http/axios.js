import axios from "axios";

const API = axios.create({
  baseURL: "https://backend.fourraysrcm.com/send-email", // backend URL
});

export default API;
