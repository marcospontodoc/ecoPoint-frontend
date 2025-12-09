import "../styles/components/Card.css";

function Card({ dados }) {

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

  const dataFormatada = dados.dataAgendada || dados.dataSolicitacao;

  const itensLista = dados.itens?.map(i => i.nome)?.join(", ") || "Nenhum item";

  const nomeEmpresa =
    dados.empresaColetora?.nomeFantasia ||
    dados.empresaGeradora?.nomeFantasia ||
    "Sem empresa";

  return (
    <div className="card">
      <h3>Coleta #{dados.id}</h3>

      <p className="itens">{itensLista}</p>

      <p className="empresa">{nomeEmpresa}</p>

      <div className="footer">
        <span className="date">{dataFormatada}</span>

        <span
          className="status"
          style={{ backgroundColor: statusColor[dados.status] }}
        >
          {statusLabel[dados.status]}
        </span>
      </div>
    </div>
  );
}

export default Card;
