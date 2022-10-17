import { Navigate, useRoutes } from "react-router"
import AuthRoute from "@features/Auth/route"

const MyRoutes = () => {
  const myRouter = useRoutes([AuthRoute])
  return myRouter
}
export default MyRoutes
