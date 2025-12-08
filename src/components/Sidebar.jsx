import "../styles/Sidebar.css";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { RiDashboardFill, RiFileAddFill, RiLogoutBoxFill } from "react-icons/ri";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <img src={logo} alt="EcoPoint" />
      </div>

   <nav className="sidebar-menu">

        <NavLink to="/dashboard"
            className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <RiDashboardFill /> <span>Solicitações</span>
        </NavLink>

        <NavLink to="/nova-solicitacao"
            className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <RiFileAddFill /> <span>Nova Solicitação</span>
        </NavLink>

        <NavLink to="/login"
            className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
            <RiLogoutBoxFill /> <span>Sair</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;
