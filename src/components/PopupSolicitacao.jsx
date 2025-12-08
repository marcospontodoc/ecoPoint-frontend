import "../styles/components/PopupSolicitacao.css";

function PopupSolicitacao() {
<div class="overlay">
  <div class="popup-card">

    <h3>Nova Solicitação</h3>

    <div class="infos-card">
      <p>Escolha o(s) tipo(os) de resíduo(os):</p>

      <div class="checkbox-grid">
        <label className="checkbox-item"><input type="checkbox" /> Vidro</label>
        <label className="checkbox-item"><input type="checkbox" /> Plástico</label>
        <label className="checkbox-item"><input type="checkbox" /> Pilha</label>
        <label className="checkbox-item"><input type="checkbox" /> Bateria</label>
        <label className="checkbox-item"><input type="checkbox" /> Eletrônico</label>
        <label className="checkbox-item"><input type="checkbox" /> Lâmpada</label>
        <label className="checkbox-item"><input type="checkbox" /> Madeira</label>
        <label className="checkbox-item"><input type="checkbox" /> Papel</label>
        <label className="checkbox-item"><input type="checkbox" /> Papelão</label>
        <label className="checkbox-item"><input type="checkbox" /> Metal</label>
      </div>
    </div>

    <div class="infos-grid">
      <div class="info-empresa">
        <label>Escolha a empresa coletora:</label>
        <select>
          <option>Selecione...</option>
        </select>
      </div>

      <div class="info-data">
        <label>Agende a data:</label>
        <input type="date" />
      </div>

      <div class="info-data">
        <label>Horario:</label>
        <input type="time" />
      </div>
    </div>

    <div class="popup-actions">
      <button class="btn cancel">Cancelar</button>
      <button class="btn confirm">Criar Solicitação</button>
    </div>

  </div>
</div>
}

export default PopupSolicitacao;
