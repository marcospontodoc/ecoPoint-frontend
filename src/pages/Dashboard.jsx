import { useEffect, useState } from "react";
import "../styles/pages/Dashboard.css";
import Card from "../components/Card";
import { FaFileExport } from "react-icons/fa6";

function Dashboard() {

  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/solicitacao")
      .then(res => res.json())
      .then(data => {

        // Ordenar pela data (dataAgendada se existir, senão dataSolicitacao)
        const ordenadas = data.sort((a, b) => {
          const dataA = new Date(a.dataAgendada || a.dataSolicitacao);
          const dataB = new Date(b.dataAgendada || b.dataSolicitacao);
          return dataB - dataA; // mais recentes primeiro
        });

        setSolicitacoes(ordenadas);
      })
      .catch(err => console.error("Erro ao buscar solicitações:", err));
  }, []);

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-header">
        <p>Empresa Geradora / Solicitações</p>
        <h1>Solicitações</h1>
      </div>

      <div className="dashboard-colunas">

        {/* Pendentes */}
        <div className="coluna">
          <h2>Pendentes</h2>
          <div className="cards">
            {solicitacoes
              .filter(s => s.status === "PENDENTE")
              .map(s => (
                <Card
                  key={s.id}
                  dados={s}
                />
              ))}
          </div>
        </div>

        {/* Aceitas */}
        <div className="coluna">
          <h2>Aceitas</h2>
          <div className="cards">
            {solicitacoes
              .filter(s => s.status === "ACEITA")
              .map(s => (
                <Card
                  key={s.id}
                  dados={s}
                />
              ))}
          </div>
        </div>

        {/* Coletadas */}
        <div className="coluna">
          <h2>Coletadas</h2>
          <div className="cards">
            {solicitacoes
              .filter(s => s.status === "COLETADA")
              .map(s => (
                <Card
                  key={s.id}
                  dados={s}
                />
              ))}
          </div>
        </div>

        {/* Finalizadas */}
        <div className="coluna">
          <h2>Finalizadas</h2>
          <div className="cards">
            {solicitacoes
              .filter(s => s.status === "FINALIZADA")
              .map(s => (
                <Card
                  key={s.id}
                  dados={s}
                />
              ))}
          </div>
        </div>

      </div>

      <div className="rodape">
        <button className="botao-relatorio">
          <FaFileExport /> Gerar Relatório
        </button>
      </div>

    </div>
  );
}

export default Dashboard;
