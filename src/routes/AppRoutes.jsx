import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import DashboardColetora from "../pages/coletora/DashboardColetora";
import DashboardLayout from "../layouts/DashboardLayout";
import NovaSolicitacao from "../pages/geradora/NovaSolicitacao";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginColetora" element={<LoginColetora />} />
      <Route path="/loginGeradora" element={<LoginGeradora />} />

      <Route path="/" element={<DashboardLayout />}>

        <Route path="dashboard" element={<DashboardColetora />} />
        <Route path="nova-solicitacao" element={<NovaSolicitacao />} />

      </Route>

    </Routes>
  );
}

export default AppRoutes;