import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getProfileInfo, login, registration } from "./actions"
import { StatusResponse } from "@/shared/enums"
import { IProfile } from "../type"

interface ILogin {
    status: StatusResponse
    token: string
    message?: string
}
interface IRegistration {
    status: StatusResponse
    message?: string
}

interface IGetProfile {
    status: StatusResponse
    user: IProfile
    message?: string
}
interface IAuthState {
    login: ILogin
    getProfile: IGetProfile
    registration: IRegistration
}

const initialState: IAuthState = {
    login: {
        status: StatusResponse.INITIAL,
        token: "",
        message: "",
    },
    registration: {
        status: StatusResponse.INITIAL,
        message: "",
    },
    getProfile: {
        status: StatusResponse.INITIAL,
        user: {} as IProfile,
        message: "",
    },
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token")
        }
    },
    extraReducers: {
        // login
        [login.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.login.status = StatusResponse.SUCCESS
            state.login.token = action.payload
        },
        [login.pending.type]: state => {
            state.login.status = StatusResponse.LOADING
        },
        [login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.login.status = StatusResponse.ERROR
            state.login.message = action.payload
        },
        // registration
        [registration.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.registration.status = StatusResponse.SUCCESS
        },
        [registration.pending.type]: state => {
            state.registration.status = StatusResponse.LOADING
        },
        [registration.rejected.type]: (state, action: PayloadAction<string>) => {
            state.registration.status = StatusResponse.ERROR
            state.registration.message = action.payload
        },

        // get profile info
        [getProfileInfo.fulfilled.type]: (state, action: PayloadAction<IProfile>) => {
            state.getProfile.status = StatusResponse.SUCCESS
            state.getProfile.user = action.payload
        },
        [getProfileInfo.pending.type]: state => {
            state.getProfile.status = StatusResponse.LOADING
        },
        [getProfileInfo.rejected.type]: (state, action: PayloadAction<string>) => {
            state.getProfile.status = StatusResponse.ERROR
            state.getProfile.message = action.payload
        },
    },
})
export const { logout } = authSlice.actions
export default authSlice.reducer;
