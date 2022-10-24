import { Roles } from "../enums";

export function decryptRole(role: Roles) {
    let result = ""
    switch (role) {
        case Roles.BUILDER:
            result = "Ремонтник"
            break;
        case Roles.DDV:
            result = "ДДВ"
            break;
        case Roles.DDV:
            result = "ДДВ"
            break;
        case Roles.MEASURE:
            result = "Замерщик"
            break;
        case Roles.SUPERADMIN:
            result = "Суперадмин"
            break;
        case Roles.PM:
            result = "Проектный менеджер"
            break;
        default:
            result = "Клиент"
            break;
    }
    return result
}