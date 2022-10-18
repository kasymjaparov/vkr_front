import AdminDashboard from "@/features/Dashboard/components/AdminDashboard/AdminDashboard"
import protectedRoutes from "./protectedRoutes"

const DashboardRoute = {
  path: "",
  element: <AdminDashboard />,
  children: protectedRoutes,
}

export default DashboardRoute
