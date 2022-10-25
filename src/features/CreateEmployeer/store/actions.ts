import { createAsyncThunk } from "@reduxjs/toolkit"
import { toastError, toastSuccess } from "@/shared/utils"
import { api } from "@/features/Auth/api"
import { RegistratrationReq } from "@/features/Auth/type"

export const createEmployeer = createAsyncThunk(
    "auth/createEmployeer",
    async (userData: RegistratrationReq, { rejectWithValue }) => {
        try {
            const { data } = await api.registration(userData)
            toastSuccess("Вы создали сотрудника")
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)
