import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://newsapi.org",
    responseType: "json",
});
axiosInstance.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        apiKey: "7b490556848a46ad98a627d5b81c1bb1"
    };
    return config;
})