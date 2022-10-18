import React from "react"
import "./AdminDashboard.css"
import { Navigate, Outlet } from "react-router"
import { styled, Theme, CSSObject } from "@mui/material/styles"
import { Box, Toolbar, List, CssBaseline, Divider } from "@mui/material"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { useAdminDashboard } from "./useAdminDashboard"
import { MyAppBar } from "./MyAppBar"
import Loading from "../../../../shared/components/ui/Loading"
import appBarLinks from "./appBarLinks"
import AppBarLink from "./AppBarLink"

const drawerWidth = 220
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}))

const AdminDashboard: React.FC = () => {
  const {
    open,
    token,
    activeLink,
    isValidRole,
    handleChangeActiveLink,
    isLoading,
    setOpen,
  } = useAdminDashboard()
  if (!token) return <Navigate to="/auth/login/" />
  else if (isLoading)
    return (
      <Box sx={{ height: "100vh" }}>
        <Loading />
      </Box>
    )
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <MyAppBar drawerHandler={() => setOpen(!open)} />
        </Toolbar>
      </AppBar>
      <Drawer
        ModalProps={{
          keepMounted: true,
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader />
        <Divider />
        <List
          sx={{
            p: 0,
            overflowY: "overlay",
            overflowX: "hidden",
            height: "100%",
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              height: "100px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,.1)",
              borderRadius: "5px",
              height: "100px",
            },
          }}
        >
          {appBarLinks.map(link =>
            isValidRole(link.roles) ? (
              <AppBarLink
                open={open}
                link={link}
                key={link.text}
                activeLink={activeLink}
                handleClick={() => handleChangeActiveLink(link.href)}
                setOpen={setOpen}
              />
            ) : null
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1.5,
          color: "black",
          backgroundColor: "#f3f6fd",
          minHeight: "100vh",
          overflowX: "auto",
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  )
}
export default AdminDashboard
