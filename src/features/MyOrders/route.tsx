import RequiredAuth from "@/shared/components/wrappers/RequiredAuth"
import { Roles } from "@/shared/enums"
import { Outlet } from "react-router"
import Detail from "./pages/Detail/Detail"
import Index from "./pages/Index"

const Route = {
  path: "myOrders",
  element: (
    <RequiredAuth roles={[Roles.CLIENT, Roles.PM]}>
      <Outlet />
    </RequiredAuth>
  ),
  children: [
    {
      path: "",
      element: <Index />,
    },
    {
      path: ":id",
      element: <Detail />,
    },
  ],
}

export default Route
