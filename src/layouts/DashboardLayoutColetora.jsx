import { Outlet } from "react-router-dom";
import SidebarColetora from "../components/SidebarColetora";
import "../styles/layouts/DashboardLayout.css"

function DashboardLayout() {
  return (
    <div className="layout-container">
      <SidebarColetora />

      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;