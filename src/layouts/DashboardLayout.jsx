import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/layouts/DashboardLayout.css"

function DashboardLayout() {
  return (
    <div className="layout-container">
      <Sidebar />

      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;