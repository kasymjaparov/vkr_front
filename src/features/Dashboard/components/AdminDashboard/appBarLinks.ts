import { sortArrObj } from "@/shared/utils"
import { Roles } from "@/shared/enums"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CreateIcon from '@mui/icons-material/Create';

const client = [
    { text: "Сделать заказ", href: `createOrder`, roles: [Roles.CLIENT], icon: CreateIcon },
    { text: "Мои заказы", href: `myOrders`, roles: [Roles.CLIENT], icon: FormatListBulletedIcon },
]

const appBarLinks = [
    ...client.sort(sortArrObj("text")),
]
export default appBarLinks