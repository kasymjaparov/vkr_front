import { Badge, ClickAwayListener, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { MyCustomTooltip } from "./MyCustomTooltip"
import { useAdminDashboard } from "./useAdminDashboard"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { Notification } from "./Notifications"

export const MyAppBar = ({ drawerHandler }: { drawerHandler: () => void }) => {
  const {
    openTooltip,
    getProfileInfo,
    setOpenTooltip,
    notification,
    setNotification,
    notifications,
  } = useAdminDashboard()
  return (
    <div className="myAppBar">
      <div className="myAppBar__logo">ANT</div>
      <MenuIcon
        sx={{
          fontSize: "30px",
          "@media(max-width:600px)": {
            fontSize: "28px",
          },
        }}
        onClick={drawerHandler}
        className="myAppBar__burger"
      />
      <div className="myAppBar__links">
        <div className="myAppBar__links__profile">
          <IconButton
            onClick={() => setOpenTooltip(true)}
            className="myAppBar__links__profile__title"
          >
            <AccountCircleIcon
              sx={{
                fontSize: "25px",
                color: "#074d80",
                "@media(max-width:960px)": {
                  fontSize: "20px",
                },
              }}
            />
          </IconButton>
          {openTooltip && (
            <ClickAwayListener onClickAway={() => setOpenTooltip(false)}>
              <div>
                <MyCustomTooltip name={getProfileInfo.email} />
              </div>
            </ClickAwayListener>
          )}
        </div>
        <div className="myAppBar__links__profile">
          <IconButton
            onClick={() => setNotification(true)}
            className="myAppBar__links__profile__title"
          >
            <Badge
              badgeContent={notifications ? notifications.length : 0}
              color="primary"
            >
              <NotificationsIcon
                sx={{
                  fontSize: "25px",
                  color: "black",
                  "@media(max-width:960px)": {
                    fontSize: "20px",
                  },
                }}
              />
            </Badge>
          </IconButton>
          {notification && (
            <ClickAwayListener onClickAway={() => setNotification(false)}>
              <div>
                <Notification />
              </div>
            </ClickAwayListener>
          )}
        </div>
      </div>
    </div>
  )
}
