import { Roles } from "@/shared/enums"
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { SetStateAction } from "react"
import { NavLink } from "react-router-dom"

interface IAppBarLink {
  link: {
    text: string
    href: string
    roles: Roles[]
    icon: any
  }
  activeLink: string
  handleClick: () => void
  open: boolean
  setOpen: (value: SetStateAction<boolean>) => void
}
const AppBarLink = ({
  link,
  handleClick,
  activeLink,
  open,
  setOpen,
}: IAppBarLink) => {
  return (
    <NavLink
      onClick={handleClick}
      className={({ isActive }) =>
        isActive || activeLink === link.href
          ? "adminDashboard__links__item-active"
          : "adminDashboard__links__item"
      }
      to={link.href}
    >
      <ListItem
        disablePadding
        sx={{
          display: "block",
        }}
      >
        <ListItemButton
          onClick={() => setOpen(true)}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            "&:hover": {
              background: link.icon
                ? "linear-gradient(to right, #4a32d4 0%, #2575fc 100%)"
                : "inherit",
              cursor: link.icon ? "pointer" : "auto",
            },
          }}
          disableRipple
          className="adminDashboard__links__item-btn"
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? "10px" : "auto",
              justifyContent: "center",
            }}
          >
            <link.icon
              sx={{ fontSize: "22px" }}
              className="adminDashboard__links__item-btn__icon"
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              opacity: open ? 1 : 0,
              "& span": {
                fontSize: "15px",
              },
            }}
            primaryTypographyProps={{
              style: open
                ? {
                    whiteSpace: "normal",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }
                : {},
            }}
            className={"adminDashboard__links__item-btn__text"}
          >
            {link.text}
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider />
    </NavLink>
  )
}

export default AppBarLink
