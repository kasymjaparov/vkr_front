import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import { toastError, toastSuccess } from "@/shared/utils"
import { IHandleOrderReq } from "../type"

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
export const getAllOrders = createAsyncThunk(
    "getMyOrders/getAll",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await api.getAll()
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
export const handleOrder = createAsyncThunk(
    "getMyOrders/handleOrder",
    async (handleOrderReq: IHandleOrderReq, { rejectWithValue }) => {
        try {
            const { data } = await api.handle(handleOrderReq)
            toastSuccess(data.message)
            return data
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)
export const getUsers = createAsyncThunk(
    "getMyOrders/getUsers",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.getUsers()
            return data
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)
export const appoint = createAsyncThunk(
    "getMyOrders/appoint",
    async ({ users, order, type }: { users: string[], order: string, type: string }, { rejectWithValue }) => {
        try {
            const { data } = await api.appoint(users, order, type)
            toastSuccess(data.message)
        } catch (e: any) {
            toastError(e.response.data.message)
            return rejectWithValue(e.response.data.message)
        }
    },
)