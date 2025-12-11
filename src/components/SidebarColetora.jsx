import "../styles/components/Sidebar.css";
import logo from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RiDashboardFill, RiFileAddFill, RiLogoutBoxFill } from "react-icons/ri";

function Sidebar() {

  function handleLogout() {
    localStorage.removeItem("coletoraId");
    localStorage.removeItem("geradoraId");
      window.location.href = "/home"; 
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="EcoPoint" />
    </div>

    <nav className="sidebar-menu">

    <NavLink
      to="/dashboardColetora"
        className={({ isActive }) =>
          isActive ? "menu-item active" : "menu-item"
        }
      >
      <RiDashboardFill /> <span>Solicitações</span>
    </NavLink>

      <button className="menu-item logout-btn" onClick={handleLogout}>
        <RiLogoutBoxFill /> <span>Sair</span>
      </button>
    </nav>
    </aside>
  );
}

export default Sidebar;
