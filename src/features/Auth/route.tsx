import React from "react"
import { Outlet } from "react-router"

const Route = {
  path: "auth",
  element: <Outlet />,
  children: [
    {
      path: "login",
      element: <>login</>,
    },
  ],
}

export default Route
