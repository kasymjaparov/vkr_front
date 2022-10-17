import MyRoutes from "./app/route"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  )
}

export default App
