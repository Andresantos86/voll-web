import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import PaginaInicial from "./pages/PaginaInicial";
import PaginaBase from "./pages/PaginaBase";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PaginaInicial />} />
        <Route path="/" element={<PaginaBase/>} >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<PaginaBaseFormulario/>}>
        <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes