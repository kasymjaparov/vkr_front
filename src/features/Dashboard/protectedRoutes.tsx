import RequiredAuth from "@/shared/components/wrappers/RequiredAuth"
import { Roles } from "@/shared/enums"
import { IRoute } from "@/shared/types"
import { Outlet } from "react-router"

const protectedRoutes: IRoute[] = [
  {
    path: "",
    element: (
      <RequiredAuth
        roles={[
          Roles.CLIENT,
          Roles.BUILDER,
          Roles.DDV,
          Roles.MEASURE,
          Roles.SUPERADMIN,
        ]}
      >
        <Outlet />
      </RequiredAuth>
    ),
  },
  {
    path: "createOrder",
    element: (
      <RequiredAuth roles={[Roles.CLIENT]}>
        <Outlet />
      </RequiredAuth>
    ),
    children: [
      {
        path: "",
        element: <>create order</>,
      },
    ],
  },
]
export default protectedRoutes
