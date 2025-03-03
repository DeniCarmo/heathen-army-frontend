import axios from "axios";

const $resource = axios.create({
  baseURL: import.meta.env.VITE_RESOURCE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

const $auth = axios.create({
  baseURL: import.meta.env.VITE_AUTH_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export { $resource, $auth };