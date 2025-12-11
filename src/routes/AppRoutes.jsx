import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginGeradora from "../pages/LoginGeradora";
import LoginColetora from "../pages/LoginColetora";
import DashboardColetora from "../pages/coletora/DashboardColetora";
import DashboardGeradora from "../pages/geradora/DashboardGeradora";
import DashboardLayoutColetora from "../layouts/DashboardLayoutColetora";
import DashboardLayoutGeradora from "../layouts/DashboardLayoutGeradora";
import NovaSolicitacao from "../pages/geradora/NovaSolicitacao";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/LoginGeradora" element={<LoginGeradora />} />
        <Route path="/LoginColetora" element={<LoginColetora />} />

        {/* Rotas protegidas*/}
        <Route
          path="/dashboardGeradora"
          element={
            <ProtectedRoute tipo="geradora">
              <DashboardLayoutGeradora />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardGeradora />} />
        </Route>

        <Route
          path="/nova-solicitacao"
          element={
            <ProtectedRoute tipo="geradora">
              <DashboardLayoutGeradora />
            </ProtectedRoute>
          }
        >
          <Route index element={<NovaSolicitacao />} />
        </Route>

        <Route
          path="/dashboardColetora"
          element={
            <ProtectedRoute tipo="coletora">
              <DashboardLayoutColetora />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardColetora />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
