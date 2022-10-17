import React from "react"
import useLogin from "./useLogin"

const Login = () => {
  const { isAuth } = useLogin()
  return <div>Login</div>
}

export default Login
