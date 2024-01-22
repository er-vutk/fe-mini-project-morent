import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.API_URL,
});

export default httpRequest;
