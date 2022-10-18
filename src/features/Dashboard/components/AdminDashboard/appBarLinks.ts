import FeedIcon from '@mui/icons-material/Feed'
import { sortArrObj } from "@/shared/utils"
import { Roles } from "@/shared/enums"

const client = [
    { text: "Сделать заказ", href: `createOrder`, roles: [Roles.CLIENT], icon: FeedIcon },
]

const appBarLinks = [
    ...client.sort(sortArrObj("text")),
]
export default appBarLinks