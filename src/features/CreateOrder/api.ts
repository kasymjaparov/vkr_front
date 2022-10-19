import { MessageResponse } from "@/shared/types"
import { apiRoot } from "../../app/api"

export const api = {
    create: (data: FormData) => apiRoot.post<MessageResponse>(`/order/create`, data),
}