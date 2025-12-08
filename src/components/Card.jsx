import "../styles/components/Card.css";

function Card({ status }) {
  const statusLabel = {
    pendente: "PENDENTE",
    aceita: "ACEITA",
    coletada: "COLETADA",
    finalizada: "FINALIZADA",
  };

  const statusColor = {
    pendente: "#F9A825",     // amarelo
    aceita: "#43A047",       // verde
    coletada: "#2962FF",     // azul
    finalizada: "#BDBDBD",   // cinza
  };

  return (
    <div className="card">
      <h3>Coleta #1</h3>
      <p className="itens">Plástico, Papel, Vidro</p>
      <p className="empresa">Empresa X</p>

      <div className="footer">
        <span className="date">00/00/0000 - 00:00</span>
        <span
          className="status"
          style={{ backgroundColor: statusColor[status] }}
        >
          {statusLabel[status]}
        </span>
      </div>
    </div>
  );
}

export default Card;
