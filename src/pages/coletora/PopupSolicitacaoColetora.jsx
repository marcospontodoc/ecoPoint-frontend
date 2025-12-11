import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/coletora/PopupSolicitacaoColetora.css";
import { IoCloseCircle } from "react-icons/io5";

function PopupSolicitacaoColetora({ visible, onClose, solicitacao, atualizar }) {
  
  const [arquivo, setArquivo] = useState(null);
  const navigate = useNavigate();

  if (!visible) return null;

  const irParaDashboard = () => {
    navigate("/dashboardColetora");
  };

  const Aceitar = () => {
    fetch(`http://localhost:8080/solicitacao/${solicitacao.id}/aceitar`, { method: "PUT" })
      .then(() => atualizar())
      .finally(() => {
        onClose();
        irParaDashboard();
      });
  };

  const Recusar = () => {
    fetch(`http://localhost:8080/solicitacao/${solicitacao.id}/recusar`, { method: "PUT" })
      .then(() => atualizar())
      .finally(() => {
        onClose();
        irParaDashboard();
      });
  };

  const Coletar = () => {
    fetch(`http://localhost:8080/solicitacao/${solicitacao.id}/coletar`, { method: "PUT" })
      .then(() => atualizar())
      .finally(() => {
        onClose();
        irParaDashboard();
      });
  };

  const Finalizar = async () => {
  if (!arquivo) return alert("Selecione um arquivo de certificado!");

  const formData = new FormData();
  formData.append("arquivo", arquivo);
  formData.append("tipo", "Certificado de Coleta");

    await fetch(`http://localhost:8080/solicitacao/${solicitacao.id}/certificado`, { 
      method: "POST",
      body: formData,
    });

    await atualizar();
    onClose();
    irParaDashboard();
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

        <h3>Empresa Geradora</h3>
        <p>{solicitacao.empresaGeradora?.nome || "Sem empresa"}</p>

        <h3>Data da Coleta</h3>
        <p>{solicitacao.dataAgendada}</p>

        <div className="popup-botoes">
          {solicitacao.status === "PENDENTE" && (
            <>
              <button className="botao-recusar" onClick={Recusar}>Recusar solicitação</button>
              <button className="botao-aceitar" onClick={Aceitar}>Aceitar solicitação</button>
            </>
          )}

          {solicitacao.status === "ACEITA" && (
            <button className="botao-coletar" onClick={Coletar}>Marcar como coletada</button>
          )}

          {solicitacao.status === "COLETADA" && (
            <>
              <input type="file" onChange={(e) => setArquivo(e.target.files[0])} />
              <button className="botao-finalizar" onClick={Finalizar}>Finalizar</button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default PopupSolicitacaoColetora;