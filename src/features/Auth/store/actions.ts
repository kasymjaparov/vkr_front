import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { ILoginRequest } from "../type"

export const login = createAsyncThunk(
    "auth/login",
    async (data: ILoginRequest, { rejectWithValue }) => {
        try {
            const token = window.localStorage.getItem("token") || ""
            const { data: loginResponse } = await api.login(data)
            return loginResponse
        } catch (e: any) {
            return rejectWithValue(e.response.data.detail)
        }
    },
)
