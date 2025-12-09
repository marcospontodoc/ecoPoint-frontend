import React, { useState } from "react";
import SolicitacaoCard from "../../components/SolicitacaoCard";
import "../../styles/pages/geradora/NovaSolicitacao.css";

function NovaSolicitacao() {
  const [solicitacao, setSolicitacao] = useState({
    id: 1,
    itens: ["Plástico", "Papel", "Vidro"],
    empresaNome: "Empresa X",
    data: "00/00/0000 - 00:00",
    status: "pendente",
  });

  return (
    <div className="nova-content">
      <div className="nova-header">
        <p>Empresa Geradora / Nova Solicitação</p>
        <h1>Nova Solicitação</h1>
      </div>
      <SolicitacaoCard solicitacao={solicitacao} role="GERADORA" />
    </div>
  );
}

export default NovaSolicitacao;
