import { useEffect, useState } from "react";
import "../../styles/pages/coletora/DashboardColetora.css";
import Card from "../../components/Card";
import { FaFileExport } from "react-icons/fa6";
import PopupSolicitacaoColetora from "./PopupSolicitacaoColetora";

function DashboardColetora() {

  const [solicitacoes, setSolicitacoes] = useState([]);
  const [solicitacaoSelecionada, setSolicitacaoSelecionada] = useState(null);
  const [popupAberto, setPopupAberto] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/solicitacao")
      .then(res => res.json())
      .then(data => {
        const ordenadas = data.sort((a, b) => {
        const dataA = new Date(a.dataAgendada || a.dataSolicitacao);
        const dataB = new Date(b.dataAgendada || b.dataSolicitacao);
        return dataB - dataA;
        });
        setSolicitacoes(ordenadas);
   })
      .catch(err => console.error("Erro ao buscar solicitações:", err));
      }, []);

  const buscarSolicitacoes = () => {
    const coletoraId = localStorage.getItem("coletoraId");
    fetch(`http://localhost:8080/solicitacao/minha/${coletoraId}`)
      .then(res => res.json())
      .then(data => setSolicitacoes(data));
  };


  const abrirPopup = (solicitacao) => {
    setSolicitacaoSelecionada(solicitacao);
    setPopupAberto(true);
  };

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-header">
        <p>Empresa Coletora / Solicitações</p>
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
                  onClick={() => abrirPopup(s)}
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
                  onClick={() => abrirPopup(s)}
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
                  onClick={() => abrirPopup(s)}
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
                  onClick={() => abrirPopup(s)}
                />
              ))}
          </div>
        </div>

      </div>

      <PopupSolicitacaoColetora
        visible={popupAberto}
        onClose={() => setPopupAberto(false)}
        solicitacao={solicitacaoSelecionada}
        atualizar={buscarSolicitacoes}
      />

    </div>
  );
}

export default DashboardColetora;