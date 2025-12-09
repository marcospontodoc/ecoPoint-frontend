import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import NovaSolicitacao from "../pages/NovaSolicitacao";
import LoginColetora from "../pages/LoginColetora";
import LoginGeradora from "../pages/LoginGeradora";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginColetora" element={<LoginColetora />} />
      <Route path="/loginGeradora" element={<LoginGeradora />} />

      <Route path="/" element={<DashboardLayout />}>

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="nova-solicitacao" element={<NovaSolicitacao />} />

      </Route>

    </Routes>
  );
}

export default AppRoutes;