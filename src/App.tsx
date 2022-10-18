import MyRoutes from "./app/route"
import { BrowserRouter } from "react-router-dom"
import { useAppDispatch } from "./app/store"
import { useEffect } from "react"
import { getProfileInfo } from "./features/Auth/store/actions"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProfileInfo()) // получаем информацию о юзере
  }, [])
  return (
    <BrowserRouter>
      <MyRoutes />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
