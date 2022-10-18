import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { toastError, toastSuccess } from "@/shared/utils"
import { EditProfileReq } from "../type"

export const editProfile = createAsyncThunk(
    "auth/editProfile",
    async (userData : EditProfileReq, { rejectWithValue }) => {
        try {
            const { data } = await api.editProfile(userData)
            toastSuccess(data.message)
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)
