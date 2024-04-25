import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://newsapi.org",
    responseType: "json",
});
axiosInstance.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        apiKey: "dac5a318b17944dcb21aaa944fa11f09"
    };
    return config;
})