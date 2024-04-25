import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://newsapi.org",
    responseType: "json",
});
axiosInstance.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        apiKey: "646b510c93f74d4f8d1bd9a242f42a4c"
    };
    return config;
})