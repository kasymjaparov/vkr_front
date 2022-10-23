import { MessageResponse } from "@/shared/types"
import { apiRoot } from "../../app/api"
import { Order } from "./type"

export const api = {
    getList: () => apiRoot.get<Order[]>(`/order/getMyOrders`),
    getById: (id: string) => apiRoot.get<Order>(`/order/getById/${id}`),
    delete: (id: string) => apiRoot.delete<MessageResponse>(`/order/delete/${id}`),
}