import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { toastError, toastSuccess } from "@/shared/utils"

export const getMyOrders = createAsyncThunk(
    "getMyOrders/get",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await api.getList()
            return data
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)

