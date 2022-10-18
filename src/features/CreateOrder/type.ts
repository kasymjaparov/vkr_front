import { Roles } from "@/shared/enums"

export interface RegistratrationReq {
    email: string
    password: string
    role: string
}
export type LoginReq = Omit<RegistratrationReq, "role">
export type LoginRes = {
    token: string
}
export type IProfile = {
    id: number,
    email: string,
    name?: string,
    surname?: string,
    patronymic?: string,
    phone?: string,
    signature?: string,
    role: Roles,
    created_at: string,
    updated_at: string
}
