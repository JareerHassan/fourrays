import axios from "axios";

const API = axios.create({
  baseURL: "http://backend.fourraysrcm.com/send-email", // backend URL
});

export default API;
