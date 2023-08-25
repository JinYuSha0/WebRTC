import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.31.81:5444",
  timeout: 5000,
});

export function setAuthorization(token: string) {
  instance.defaults.headers.common["Authorization"] = token;
}

export default instance;
