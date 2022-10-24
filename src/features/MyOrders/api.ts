import { MessageResponse } from "@/shared/types"
import { apiRoot } from "../../app/api"
import { IHandleOrderReq, Order } from "./type"

export const api = {
    getList: () => apiRoot.get<Order[]>(`/order/getMyOrders`),
    getAll: () => apiRoot.get<Order[]>(`/order/getAll`),

    getById: (id: string) => apiRoot.get<Order>(`/order/getById/${id}`),
    delete: (id: string) => apiRoot.delete<MessageResponse>(`/order/delete/${id}`),
    handle: (handleReq: IHandleOrderReq) => apiRoot.patch<MessageResponse>(`/order/handle`, handleReq),

}