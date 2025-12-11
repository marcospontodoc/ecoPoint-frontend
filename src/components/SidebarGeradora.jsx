import "../styles/components/Sidebar.css";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { RiDashboardFill, RiFileAddFill, RiLogoutBoxFill } from "react-icons/ri";

function Sidebar() {

  function handleLogout() {
    localStorage.removeItem("geradoraId");
    localStorage.removeItem("coletoraId");

    window.location.href = "/home";
  }

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <img src={logo} alt="EcoPoint" />
      </div>

      <nav className="sidebar-menu">

        <NavLink
          to="/dashboardGeradora"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <RiDashboardFill /> <span>Solicitações</span>
        </NavLink>

        <NavLink
          to="/nova-solicitacao"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <RiFileAddFill /> <span>Nova Solicitação</span>
        </NavLink>


        <button className="menu-item logout-btn" onClick={handleLogout}>
          <RiLogoutBoxFill /> <span>Sair</span>
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;
