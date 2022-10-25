import RequiredAuth from "@/shared/components/wrappers/RequiredAuth"
import { Roles } from "@/shared/enums"
import { Outlet } from "react-router"
import Index from "./pages/Index"

const Route = {
  path: "editProfile",
  element: (
    <RequiredAuth
      roles={[Roles.CLIENT, Roles.BUILDER, Roles.DDV, Roles.PM, Roles.MEASURE]}
    >
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
