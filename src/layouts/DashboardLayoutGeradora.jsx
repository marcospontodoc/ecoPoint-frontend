import { Outlet } from "react-router-dom";
import SidebarGeradora from "../components/SidebarGeradora";
import "../styles/layouts/DashboardLayout.css"

function DashboardLayout() {
  return (
    <div className="layout-container">
      <SidebarGeradora />

      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;