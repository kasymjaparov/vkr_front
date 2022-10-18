import { MessageResponse } from "@/shared/types"
import { apiRoot } from "../../app/api"
import { IProfile, LoginReq, LoginRes, RegistratrationReq } from "./type"

export const api = {
    login: (data: LoginReq) => apiRoot.post<LoginRes>(`/auth/login`, data),
    getProfile: () => apiRoot.get<IProfile>(`/auth/getProfileInfo`),
    registration: (data: RegistratrationReq) => apiRoot.post<MessageResponse>(`/auth/registration`, data),
}