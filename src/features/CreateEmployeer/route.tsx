import RequiredAuth from "@/shared/components/wrappers/RequiredAuth"
import { Roles } from "@/shared/enums"
import { Outlet } from "react-router"
import Index from "./pages/Index"

const Route = {
  path: "createEmployeer",
  element: (
    <RequiredAuth roles={[Roles.PM]}>
      <Outlet />
    </RequiredAuth>
  ),
  children: [
    {
      path: "",
      element: <Index />,
    },
  ],
}

export default Route
