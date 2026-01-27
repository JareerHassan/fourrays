import axios from "axios";

const API = axios.create({
  baseURL: "https://medjaafbackend.oxmite.com/send-email", // backend URL
});

export default API;
