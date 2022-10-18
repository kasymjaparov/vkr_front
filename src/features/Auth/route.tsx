import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Wrapper from "./pages/Wrapper/Wrapper"

const Route = {
  path: "auth",
  element: <Wrapper />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "registration",
      element: <Registration />,
    },
  ],
}

export default Route
