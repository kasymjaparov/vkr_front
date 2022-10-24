import { IProfile } from "@/features/Auth/type"
import { Order } from "@/features/MyOrders/type"
import { TableButton } from "@/shared/components/ui"
import { Roles } from "@/shared/enums"
import { getFormatedDate } from "@/shared/utils"
import { getStatusBtn } from "@/shared/utils/getStatusBtn"
import { Chip, TableCell, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

interface IRow {
  row: Order
  role: Roles
}
const BannerRow: React.FC<IRow> = ({ row, role }) => {
  const [user, setUser] = useState({} as IProfile)
  useEffect(() => {
    row.users.forEach(item => {
      if (item.role === Roles.CLIENT) {
        setUser(item)
      }
    })
  }, [])

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      <TableCell>{row.id}</TableCell>
      {role !== Roles.CLIENT ? <TableCell>{user.email}</TableCell> : null}
      <TableCell>{row.address}</TableCell>
      <TableCell>{row.amount_room}</TableCell>
      <TableCell>
        {getStatusBtn(row.status) ? (
          <Chip
            sx={{
              backgroundColor: getStatusBtn(row.status).color,
              color: "#fff",
              borderRadius: "6px",

              fontSize: "13px",
            }}
            label={getStatusBtn(row.status).text}
          />
        ) : null}
      </TableCell>

      <TableCell>{getFormatedDate(row.created_at)}</TableCell>
      <TableCell align="left">
        <NavLink to={`${row.id}`}>
          <TableButton
            styles={{
              marginRight: "10px",
              background: "#27af06",
            }}
            iconClassName="fa fa-binoculars"
          />
        </NavLink>
      </TableCell>
    </TableRow>
  )
}

export default BannerRow
