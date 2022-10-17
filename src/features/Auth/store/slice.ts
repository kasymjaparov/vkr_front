import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import StatusResponse from "@shared/enums/StatusResponse"
import { ILoginResponse } from "../type"
import { login } from "./actions"

interface InitialStateProp {
    login: {
        token: string,
        status: StatusResponse,
        message: string
    }
}
const initialState: InitialStateProp = {
    login: {
        token: "",
        status: StatusResponse.INITIAL,
        message: ""
    }
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: {
        // getList
        [login.fulfilled.type]: (state, action: PayloadAction<ILoginResponse>) => {
            state.login.token = action.payload.token
        },
        [login.pending.type]: state => {
            state.login.status = StatusResponse.LOADING
        },
        [login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.login.status = StatusResponse.ERROR
            state.login.message = action.payload
        },
    },
})

export default authSlice.reducer;
