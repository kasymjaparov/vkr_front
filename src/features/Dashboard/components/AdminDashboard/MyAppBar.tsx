import { ClickAwayListener, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { MyCustomTooltip } from "./MyCustomTooltip"
import { useAdminDashboard } from "./useAdminDashboard"

export const MyAppBar = ({ drawerHandler }: { drawerHandler: () => void }) => {
  const { openTooltip, getProfileInfo, setOpenTooltip } = useAdminDashboard()
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
                fontSize: "30px",
                color: "#074d80",
                "@media(max-width:960px)": {
                  fontSize: "28px",
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
      </div>
    </div>
  )
}
