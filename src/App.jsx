import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthLayout } from "./layouts/auth/AuthLayout"
import { Login } from "./pages/auth/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
