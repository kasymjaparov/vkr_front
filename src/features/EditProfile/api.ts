import { MessageResponse } from "@/shared/types"
import { apiRoot } from "../../app/api"
import { EditProfileReq } from "./type"


export const api = {
    editProfile: (data: EditProfileReq) => apiRoot.patch<MessageResponse>(`/auth/changeUserInfo`, data),
    createSignature: () => apiRoot.get<MessageResponse>(`/auth/createSignature`),
}