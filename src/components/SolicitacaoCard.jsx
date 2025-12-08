import "../styles/components/SolicitacaoCard.css";

function SolicitacaoCard() {
  return (
    <div className="nova-card">
      <h3>Coleta</h3>

      <div className="infos-card">
        <p>Escolha o(s) tipo(os) de resíduo(os):</p>

        <div className="checkbox-grid">
          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Vidro" />
            <span>Vidro</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Plástico" />
            <span>Plástico</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Pilha" />
            <span>Pilha</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Bateria" />
            <span>Bateria</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Eletrônico" />
            <span>Eletrônico</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Lâmpada" />
            <span>Lâmpada</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Madeira" />
            <span>Madeira</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Papel" />
            <span>Papel</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Papelão" />
            <span>Papelão</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Metal" />
            <span>Metal</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Óleo/Lubrificante" />
            <span>Óleo/Lubrificante</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Pneu" />
            <span>Pneu</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Hospitalar" />
            <span>Hospitalar</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Tinta" />
            <span>Tinta</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Concreto" />
            <span>Concreto</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Tijolo" />
            <span>Tijolo</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Filtro de óleo" />
            <span>Filtro de óleo</span>
          </label>

          <label className="checkbox-item">
            <input type="checkbox" name="itens" value="Telha" />
            <span>Telha</span>
          </label>
        </div>
      </div>

      <div className="infos-grid">
        <div className="info-empresa">
          <label>Escolha a empresa para coleta:</label>
          <select>
            <option>Empresa X</option>
          </select>
        </div>

        <div className="info-data">
          <label>Agende a data para coleta:</label>
          <input type="date" placeholder="00/00/0000" />
        </div>
      </div>

      <div className="botao-area">
        <button className="botao-criar">Criar solicitação</button>
      </div>
    </div>
  );
}

export default SolicitacaoCard;
