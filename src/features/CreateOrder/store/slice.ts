import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createOrder } from "./actions"
import { StatusResponse } from "@/shared/enums"

const initialState = {
    status: StatusResponse.INITIAL
}

export const createOrderSlice = createSlice({
    name: "createOrder",
    initialState,
    reducers: {
    },
    extraReducers: {
        [createOrder.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.status = StatusResponse.SUCCESS
        },
        [createOrder.pending.type]: state => {
            state.status = StatusResponse.LOADING
        },
        [createOrder.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = StatusResponse.ERROR
        },
    },
})
export default createOrderSlice.reducer;
