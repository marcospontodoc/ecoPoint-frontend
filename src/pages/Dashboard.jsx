import "../styles/pages/Dashboard.css";
import Card from "../components/Card";
import { FaFileExport } from "react-icons/fa6";

function Dashboard() {
  
  return (
    <div className="dashboard-container">
      
      <div className="dashboard-header">
        <p>Empresa Geradora / Solicitações</p>
        <h1>Solicitações</h1>
      </div>

      <div className="dashboard-colunas">

        {/* pendentes */}
        <div className="coluna">
          <h2>Pendentes</h2>
          <div className="cards">
            <Card status="pendente" />
          </div>
        </div>

        {/* aceitas */}
        <div className="coluna">
          <h2>Aceitas</h2>
          <div className="cards">
            <Card status="aceita" />
          </div>
        </div>

        {/* coletadas */}
        <div className="coluna">
          <h2>Coletadas</h2>
          <div className="cards">
            <Card status="coletada" />
          </div>
        </div>

        {/* finalizadas */}
        <div className="coluna">
          <h2>Finalizadas</h2>
          <div className="cards">
            <Card status="finalizada" />
          </div>
        </div>

      </div>

      <div className="rodape">
      <button className="botao-relatorio"> <FaFileExport /> Gerar Relatório</button>
      </div>

    </div>
  );
}

export default Dashboard;