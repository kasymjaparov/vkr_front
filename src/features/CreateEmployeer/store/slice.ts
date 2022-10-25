import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusResponse } from "@/shared/enums"
import { createEmployeer } from "./actions"

interface createEmployeer {
    status: StatusResponse,
}

const initialState: createEmployeer = {
    status: StatusResponse.INITIAL
}

export const createEmployerSlice = createSlice({
    name: "createEmployer",
    initialState,
    reducers: {
    },
    extraReducers: {
        [createEmployeer.fulfilled.type]: (state) => {
            state.status = StatusResponse.SUCCESS
        },
        [createEmployeer.pending.type]: state => {
            state.status = StatusResponse.LOADING
        },
        [createEmployeer.rejected.type]: (state) => {
            state.status = StatusResponse.ERROR
        },

    },
})
export default createEmployerSlice.reducer;
