import { useNavigate } from "react-router-dom";
import "../../styles/pages/geradora/PopupSolicitacaoGeradora.css";
import { IoCloseCircle } from "react-icons/io5";

function PopupSolicitacaoGeradora({ visible, onClose, solicitacao, atualizar }) {
  const navigate = useNavigate(); 

  if (!visible) return null;

  const irParaDashboard = () => {
    navigate("/dashboardGeradora");
  };

  const Deletar = () => {
    fetch(`http://localhost:8080/solicitacao/${solicitacao.id}`, { method: "DELETE" })
      .then(() => atualizar())
      .finally(() => {
        onClose();
        irParaDashboard();
      });
  };

     const statusLabel = {
    PENDENTE: "PENDENTE",
    ACEITA: "ACEITA",
    COLETADA: "COLETADA",
    FINALIZADA: "FINALIZADA",
  };

  const statusColor = {
    PENDENTE: "#F9A825",
    ACEITA: "#43A047",
    COLETADA: "#2962FF",
    FINALIZADA: "#BDBDBD",
  };


  return (
    <div className="popup-container">
        <div className="popup-content">
        <IoCloseCircle className="botao-fechar" onClick={onClose} />
        <div className="header">
        <h2>Coleta #{solicitacao.id}</h2>
          <span
          className="status"
          style={{ backgroundColor: statusColor[solicitacao.status] }}
        >
          {statusLabel[solicitacao.status]}
        </span>
        </div>

        <h3>Itens</h3>
        <p>{solicitacao.itens.map(i => i.nome).join(", ")}</p>

        <h3>Empresa Coletora</h3>
        <p>{solicitacao.empresaColetora?.nome || "Sem empresa"}</p>

        <h3>Data da Coleta</h3>
        <p>{solicitacao.dataAgendada}</p>

        <div className="popup-botoes">
          {solicitacao.status === "PENDENTE" && (
            <>
              <button className="botao-deletar" onClick={Deletar}>Deletar solicitação</button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default PopupSolicitacaoGeradora;