import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getMyOrders } from "./actions"
import { StatusResponse } from "@/shared/enums"
import { Order } from "../type"

interface IState {
    status: StatusResponse,
    list: Order[]
}
const initialState = {
    status: StatusResponse.INITIAL,
    list: [] as Order[]
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
    },
})
export default getMyOrdersSlice.reducer;
