import { RootState } from "@/app/store";

export const selectMyOrders = (state: RootState) => state.myOrders;
export const selectOrder = (state: RootState) => state.myOrders.detail;
export const selectUsers = (state: RootState) => state.myOrders.users;


