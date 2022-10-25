import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { appoint, deleteOrder, getAllOrders, getById, getMyOrders, getUsers, handleOrder } from "./actions"
import { StatusResponse } from "@/shared/enums"
import { Order } from "../type"
import { IEdit, IGetById } from "@/shared/types"
import { IProfile } from "@/features/Auth/type"

interface IState {
    status: StatusResponse,
    list: Order[],
    users: {
        data: IProfile[],
        status: StatusResponse
    },
    detail: IGetById<Order>,
    delete: IEdit,
    appoint: IEdit,
    handle: IEdit,

}
const initialState: IState = {
    status: StatusResponse.INITIAL,
    list: [] as Order[],
    users: {
        data: [] as IProfile[],
        status: StatusResponse.INITIAL,
    },
    detail: {
        data: {} as Order,
        status: StatusResponse.INITIAL
    },
    delete: {
        status: StatusResponse.INITIAL
    },
    appoint: {
        status: StatusResponse.INITIAL
    },
    handle: {
        status: StatusResponse.INITIAL
    }
}

export const getMyOrdersSlice = createSlice({
    name: "getMyOrders",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getMyOrders.fulfilled.type]: (state, action: PayloadAction<Order[]>) => {
            state.status = StatusResponse.SUCCESS
            state.list = action.payload as Order[]
        },
        [getMyOrders.pending.type]: state => {
            state.status = StatusResponse.LOADING
        },
        [getMyOrders.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = StatusResponse.ERROR
        },
        [getUsers.fulfilled.type]: (state, action: PayloadAction<IProfile[]>) => {
            state.users.status = StatusResponse.SUCCESS
            state.users.data = action.payload as IProfile[]
        },
        [getUsers.pending.type]: state => {
            state.users.status = StatusResponse.LOADING
        },
        [getUsers.rejected.type]: (state) => {
            state.users.status = StatusResponse.ERROR
        },
        [getAllOrders.fulfilled.type]: (state, action: PayloadAction<Order[]>) => {
            state.status = StatusResponse.SUCCESS
            state.list = action.payload as Order[]
        },
        [getAllOrders.pending.type]: state => {
            state.status = StatusResponse.LOADING
        },
        [getAllOrders.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = StatusResponse.ERROR
        },
        [getById.fulfilled.type]: (state, action: PayloadAction<Order>) => {
            state.detail.status = StatusResponse.SUCCESS
            state.detail.data = action.payload
        },
        [getById.pending.type]: state => {
            state.detail.status = StatusResponse.LOADING
        },
        [getById.rejected.type]: (state, action: PayloadAction<string>) => {
            state.detail.status = StatusResponse.ERROR
        },
        [deleteOrder.fulfilled.type]: (state, action) => {
            state.delete.status = StatusResponse.SUCCESS
        },
        [deleteOrder.pending.type]: state => {
            state.delete.status = StatusResponse.LOADING
        },
        [deleteOrder.rejected.type]: (state, action) => {
            state.delete.status = StatusResponse.ERROR
        },
        [appoint.fulfilled.type]: (state, action) => {
            state.appoint.status = StatusResponse.SUCCESS
        },
        [appoint.pending.type]: state => {
            state.appoint.status = StatusResponse.LOADING
        },
        [appoint.rejected.type]: (state, action) => {
            state.appoint.status = StatusResponse.ERROR
        },
        [handleOrder.fulfilled.type]: (state, action) => {
            state.handle.status = StatusResponse.SUCCESS
        },
        [handleOrder.pending.type]: state => {
            state.handle.status = StatusResponse.LOADING
        },
        [handleOrder.rejected.type]: (state, action) => {
            state.handle.status = StatusResponse.ERROR
        },
    },
})
export default getMyOrdersSlice.reducer;
