import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { toastError } from "@/shared/utils"

export const getNotifications = createAsyncThunk(
    "dashboard/getNotifications",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getNotifications()
            return data
        } catch (e: any) {
            toastError(e.response.data.message)
        }
    },
)

export const watchedNotification = createAsyncThunk(
    "dashboard/watchNotifications",
    async (id: string, { dispatch }) => {
        try {
            const { data } = await api.watched(id)
            dispatch(getNotifications())
            return data
        } catch (e: any) {
            toastError(e.response.data.message)
        }
    },
)