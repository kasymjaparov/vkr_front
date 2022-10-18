import RequiredAuth from "@/shared/components/wrappers/RequiredAuth"
import { Roles } from "@/shared/enums"
import { IRoute } from "@/shared/types"
import CreateOrderRoute from "@features/CreateOrder/route"
import EditProfileRoute from "@features/EditProfile/route"

import Distributor from "./components/Distributor"

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
        <Distributor />
      </RequiredAuth>
    ),
  },
  CreateOrderRoute,
  EditProfileRoute,
]
export default protectedRoutes
