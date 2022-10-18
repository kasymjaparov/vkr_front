import { useRoutes } from "react-router"
import AuthRoute from "@features/Auth/route"
import DashboardRoute from "@/features/Dashboard/route"

const MyRoutes = () => {
  const myRouter = useRoutes([AuthRoute, DashboardRoute])
  return myRouter
}
export default MyRoutes
