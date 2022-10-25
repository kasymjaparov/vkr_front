import { sortArrObj } from "@/shared/utils"
import { Roles } from "@/shared/enums"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreateIcon from '@mui/icons-material/Create';

const client = [
    { text: "Сделать заказ", href: `createOrder`, roles: [Roles.CLIENT], icon: CreateIcon },
    { text: "Мои заказы", href: `myOrders`, roles: [Roles.CLIENT, Roles.PM, Roles.BUILDER, Roles.MEASURE, Roles.BUILDER, Roles.DDV], icon: FormatListBulletedIcon },
]
const pm = [
    { text: "Создать сотрудника", href: `createEmployeer`, roles: [Roles.PM], icon: CreateIcon },
]

const appBarLinks = [
    ...client.sort(sortArrObj("text")),
    ...pm.sort(sortArrObj("text")),

]
export default appBarLinks