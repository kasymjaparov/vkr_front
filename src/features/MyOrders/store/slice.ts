import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { deleteOrder, getById, getMyOrders } from "./actions"
import { StatusResponse } from "@/shared/enums"
import { Order } from "../type"
import { IEdit, IGetById } from "@/shared/types"

interface IState {
    status: StatusResponse,
    list: Order[],
    detail: IGetById<Order>,
    delete: IEdit
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
        [deleteOrder.rejected.type]: (state, action: PayloadAction<string>) => {
            state.delete.status = StatusResponse.ERROR
        },
    },
})
export default getMyOrdersSlice.reducer;
