import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { toastError, toastSuccess } from "@/shared/utils"

export const createOrder = createAsyncThunk(
    "createOrder/create",
    async (userData: FormData, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await api.create(userData)
            toastSuccess(data.message)
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)

