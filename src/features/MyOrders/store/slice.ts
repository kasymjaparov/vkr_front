import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { deleteOrder, getAllOrders, getById, getMyOrders, handleOrder } from "./actions"
import { StatusResponse } from "@/shared/enums"
import { Order } from "../type"
import { IEdit, IGetById } from "@/shared/types"

interface IState {
    status: StatusResponse,
    list: Order[],
    detail: IGetById<Order>,
    delete: IEdit,
    handle: IEdit,

}
const initialState: IState = {
    status: StatusResponse.INITIAL,
    list: [] as Order[],
    detail: {
        data: {} as Order,
        status: StatusResponse.INITIAL
    },
    delete: {
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
