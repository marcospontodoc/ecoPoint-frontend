import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import NovaSolicitacao from "../pages/NovaSolicitacao";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<DashboardLayout />}>

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="nova-solicitacao" element={<NovaSolicitacao />} />

      </Route>

    </Routes>
  );
}

export default AppRoutes;