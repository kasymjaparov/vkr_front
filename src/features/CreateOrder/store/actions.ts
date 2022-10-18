import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { toastError, toastInfo } from "@/shared/utils"
import { LoginReq, RegistratrationReq } from "../type"

/**Получить информацию о профиле*/
export const getProfileInfo = createAsyncThunk(
    "auth/profileInfo",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getProfile()
            return data
        } catch (e: any) {
            window.localStorage.removeItem("token")
            return rejectWithValue(e.response.data.detail)
        }
    },
)


/**Логинка*/
export const login = createAsyncThunk(
    "auth/login",
    async (userData: LoginReq, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await api.login(userData)
            window.localStorage.setItem("token", data.token)
            dispatch(getProfileInfo())
            return data.token
        } catch (e: any) {
            console.log(e.response.data.message)
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)

/**Логинка*/
export const registration = createAsyncThunk(
    "auth/registration",
    async (userData: RegistratrationReq, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await api.registration(userData)
            toastInfo(data.message)
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)