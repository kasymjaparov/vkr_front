import authSlice from "@/features/Auth/store/slice";
import createOrderSlice from "@/features/CreateOrder/store/slice";
import editProfileSlice from "@/features/EditProfile/store/slice";
import MyOrdersSlice from "@/features/MyOrders/store/slice";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

const reducers = {
    auth: authSlice,
    editProfile: editProfileSlice,
    createOrder: createOrderSlice,
    myOrders: MyOrdersSlice
}

const combinedReducer = combineReducers(reducers);

const rootReducer = (state: ReturnType<typeof combinedReducer> | undefined, action: AnyAction) => {
    if (action.type === 'auth/logout') {
        return combinedReducer(undefined, action)
    }
    return combinedReducer(state, action)
}

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch