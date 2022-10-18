import "./Wrapper.css"
import { Box, Stack } from "@mui/material"
import { NavLink, Outlet } from "react-router-dom"
import { useEffect } from "react"
import { Loading } from "@/shared/components/ui"
import { useAppSelector } from "@/app/store"
import { selectLogin, selectUserProfile } from "../../store/selectors"
import { StatusResponse } from "@/shared/enums"

function LoginWrapper() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  const loginState = useAppSelector(selectLogin)
  const { status: selectProfileState } = useAppSelector(selectUserProfile)
  const isLoading: boolean =
    loginState.status === StatusResponse.LOADING ||
    selectProfileState === StatusResponse.LOADING

  if (isLoading)
    return (
      <Box sx={{ height: "100vh" }}>
        <Loading />
      </Box>
    )

  return (
    <div className="login">
      <Stack
        sx={{
          paddingTop: "32px",
          display: "flex",
          justifyContent: "center",
          "@media(max-width:600px)": {
            padding: "15px 10px 30px 10px",
          },
        }}
        spacing={2}
        direction="row"
      >
        <NavLink
          className={({ isActive }) =>
            isActive ? "login-btn-link-active" : "login-btn-link"
          }
          to="/auth/registration/"
        >
          Регистрация
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "login-btn-link-active" : "login-btn-link"
          }
          to="/auth/login/"
        >
          Вход
        </NavLink>
      </Stack>
      <Outlet />
    </div>
  )
}
export default LoginWrapper
