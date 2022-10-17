import axios from "axios"
export const apiRoot = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? "deploy api" : "dev api",
})

