import { Roles } from "@/shared/enums"

export interface EditProfileReq {
    name: string
    surname: string
    patronymic: string
    phone: string
    sign: boolean
}