import axios from "axios";

export const Api = () => {
  return axios.create({
    baseURL: "http://localhost:4767/api/v1/weather",
  });
};
