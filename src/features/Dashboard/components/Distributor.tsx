import { useNavigate } from "react-router"
import React from "react"
import { useAppSelector } from "@/app/store"
import { selectUserProfile } from "../../Auth/store/selectors"
import { Roles } from "@/shared/enums"

const Distributor = () => {
  const navigate = useNavigate()
  const { user } = useAppSelector(selectUserProfile)
  const { role: userType } = user
  React.useEffect(() => {
    if (userType === Roles.CLIENT || userType === Roles.PM) {
      navigate("/myOrders")
    }
    // else if (userType === Roles.SuperAdmin || userType === Roles.Admin) {
    //   navigate("/front/all_Loans/1")
    // } else if (userType === Roles.Marketing) {
    //   navigate("/front/market_banners/1")
    // }
  }, [])
  return <></>
}

export default Distributor
