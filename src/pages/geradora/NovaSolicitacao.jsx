import React, { useState, useEffect } from "react";
import "../../styles/pages/geradora/NovaSolicitacao.css";

function NovaSolicitacao() {
    const [itens, setItens] = useState([]);
    const [itensSelecionados, setItensSelecionados] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [empresaColetora, setEmpresaColetora] = useState("");
    const [data, setData] = useState("");
  
    useEffect(() => {
      fetch("http://localhost:8080/itemresiduo")
        .then(response => response.json())
        .then(itens => setItens(itens));
    }, []);
  
    function handleCheckItem(e) {
      const id = Number(e.target.value);
    if (e.target.checked) {
      setItensSelecionados([...itensSelecionados, id]);
    } else {
      setItensSelecionados(itensSelecionados.filter(i => i !== id));
    }
  }
  
    function buscarEmpresas() {
      fetch("http://localhost:8080/solicitacao/coletoras-por-itens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itensSelecionados)
      })
        .then(res => res.json())
        .then(data => setEmpresas(data));
    }

    function criarSolicitacao() {
      const body = {
        itensIds: itensSelecionados,
        geradoraId: 1,
        coletoraId: Number(empresaColetora),
        dataAgendada: data,
      };
  
      fetch("http://localhost:8080/solicitacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(data => alert("Solicitação criada!"));
    }

  return (
    <div className="nova-content">
      <div className="nova-header">
        <p>Empresa Geradora / Nova Solicitação</p>
        <h1>Nova Solicitação</h1>
      </div>
        <div className="nova-card">
      <h3>Coleta</h3>

      <div className="infos-card">
        <p>Escolha o(s) tipo(os) de resíduo(os):</p>

        <div className="checkbox-grid" >
          {itens.map(item => (
            <label className="checkbox-item" key={item.id}>
              <input
                type="checkbox"
                value={item.id}
                onChange={handleCheckItem}
              />
              <span>{item.nome}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="botao-buscar" onClick={buscarEmpresas}>Buscar Empresas</button>

      <div className="infos-grid">
        <div className="info-empresa">
          <label>Escolha a empresa para coleta:</label>
          <select onChange={(e) => setEmpresaColetora(e.target.value)}>
            <option value="">Selecione</option>
            {empresas.map(emp => (
              <option key={emp.id} value={emp.id}>{emp.nome}</option>
            ))}
          </select>
        </div>

        <div className="info-data">
          <label>Agende a data para coleta:</label>
          <input
            type="date"
            onChange={(e) => setData(e.target.value)}
          />
        </div>
      </div>

      <div className="botao-area">
        <button className="botao-criar" onClick={criarSolicitacao}>
          Criar solicitação
        </button>
      </div>
    </div>
    </div>
  );
}

export default NovaSolicitacao;
