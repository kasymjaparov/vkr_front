import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StatusResponse } from "@/shared/enums"
import { editProfile } from "./actions"

interface IEditProfile {
    status: StatusResponse,
}

const initialState: IEditProfile = {
    status: StatusResponse.INITIAL
}

export const editProfileSlice = createSlice({
    name: "editProfileSlice",
    initialState,
    reducers: {
    },
    extraReducers: {
        [editProfile.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.status = StatusResponse.SUCCESS
        },
        [editProfile.pending.type]: state => {
            state.status = StatusResponse.LOADING
        },
        [editProfile.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = StatusResponse.ERROR
        },

    },
})
export default editProfileSlice.reducer;
