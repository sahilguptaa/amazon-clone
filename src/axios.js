import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-371ee/us-central1/api", // The cloud function URL
});

export default instance;
