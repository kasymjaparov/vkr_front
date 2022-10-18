import axios from "axios"
export const apiRoot = axios.create({
    baseURL: "http://localhost:5000",
})

apiRoot.interceptors.request.use(
    async config => {
        config.headers = {
            Authorization: `${window.localStorage.getItem("token") || ""}`,
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)