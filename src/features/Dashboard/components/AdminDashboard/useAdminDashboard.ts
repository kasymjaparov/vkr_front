import React from "react"
import { useLocation, useNavigate } from "react-router"
import { Roles, StatusResponse } from "@/shared/enums"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { logout } from "@features/Auth/store/slice"
import { selectUserProfile } from "@features/Auth/store/selectors"
import appBarLinks from "./appBarLinks"
import { useCheckMobileScreen } from "@/shared/hooks"

export const useAdminDashboard = () => {
  const isMobile = useCheckMobileScreen()
  const [open, setOpen] = React.useState(isMobile ? false : true)
  const [openTooltip, setOpenTooltip] = React.useState(false) // состояние подсказки
  const [activeLink, setActiveLink] = React.useState<string>("")// состояние активной ссылки
  const { user: getProfileInfo, status: getProfileStatus } = useAppSelector(selectUserProfile)
  const userRole = getProfileInfo.role
  const token: string | null = window.localStorage.getItem("token")
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLoading = getProfileStatus === StatusResponse.LOADING
  React.useEffect(() => {
    let indexOfValidLink = appBarLinks.findIndex((linkObj) => pathname.includes(linkObj.href.slice(0, -2)))
    if (indexOfValidLink < 0) return
    setActiveLink(appBarLinks[indexOfValidLink].href)
  }, [])

  const logoutBtn = async () => {
    await dispatch(logout())
    navigate("/auth/login/")
  }
  const handleChangeActiveLink = (link: string) => {
    setActiveLink(link)
    if (isMobile) setOpen(false)
  }
  const isValidRole = (validedRoles: Roles[]): boolean => {
    return validedRoles.includes(userRole)
  }
  return { open, getProfileStatus, token, isValidRole, activeLink, handleChangeActiveLink, logoutBtn, getProfileInfo, isLoading, openTooltip, setOpen, setOpenTooltip }
}