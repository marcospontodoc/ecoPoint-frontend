import React, { useState } from "react";
import "../../styles/pages/coletora/PopupSolicitacaoColetora.css";

function PopupSolicitacaoColetora({ visible, onClose, solicitacao, atualizar }) {
  const [arquivo, setArquivo] = useState(null);

  if (!visible) return null;

  const Aceitar = () => {
    fetch(`http://localhost:8080/solicitacao/${solicitacao.id}/aceitar`, { method: "PUT" })
      .then(() => atualizar())
      .finally(() => onClose());
  };

  const Recusar = () => {
    fetch(`http://localhost:8080/solicitacao/${solicitacao.id}/recusar`, { method: "PUT" })
      .then(() => atualizar())
      .finally(() => onClose());
  };

  const Coletar = () => {
    fetch(`http://localhost:8080/solicitacao/${solicitacao.id}/coletar`, { method: "PUT" })
      .then(() => atualizar())
      .finally(() => onClose());
  };

  const Finalizar = () => {
    if (!arquivo) return alert("Selecione um arquivo de certificado!");
    const formData = new FormData();
    formData.append("arquivo", arquivo);
    formData.append("tipo", "Certificado de Coleta");

    fetch(`http://localhost:8080/solicitacao/${solicitacao.id}/certificado`, {
      method: "POST",
      body: formData,
    })
      .then(() => atualizar())
      .finally(() => onClose());
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Coleta #{solicitacao.id}</h2>
        <p>Status: {solicitacao.status}</p>

        <h3>Itens</h3>
        <p>{solicitacao.itens.map(i => i.nome).join(", ")}</p>

        <h3>Empresa Geradora</h3>
        <p>{solicitacao.empresaGeradora?.nome || "Sem empresa"}</p>

        <h3>Data da Coleta</h3>
        <p>{solicitacao.dataAgendada}</p>

        <div className="popup-buttons">
          {solicitacao.status === "PENDENTE" && (
            <>
              <button className="popup-btn cancel" onClick={Recusar}>Recusar solicitação</button>
              <button className="popup-btn confirm" onClick={Aceitar}>Aceitar solicitação</button>
            </>
          )}

          {solicitacao.status === "ACEITA" && (
            <button className="popup-btn confirm" onClick={Coletar}>Marcar como coletada</button>
          )}

          {solicitacao.status === "COLETADA" && (
            <>
              <input type="file" onChange={(e) => setArquivo(e.target.files[0])} />
              <button className="popup-btn confirm" onClick={Finalizar}>Finalizar</button>
            </>
          )}

          <button className="popup-btn cancel" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
}

export default PopupSolicitacaoColetora;
