import { apiRoot } from "../../shared/apiRoot"
import { ILoginRequest, ILoginResponse } from "./type"

export const api = {
    login: (data: ILoginRequest) => apiRoot.get<ILoginResponse>(`fake-api`),
}