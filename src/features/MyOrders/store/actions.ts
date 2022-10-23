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

export const getById = createAsyncThunk(
    "getMyOrders/getById",
    async (id: string, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await api.getById(id)
            return data
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)
export const deleteOrder = createAsyncThunk(
    "getMyOrders/delete",
    async (id: string, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await api.delete(id)
            toastSuccess(data.message)
            return data
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)