import "../styles/Home.css";
import logo from "../assets/logo_branco.svg";

function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="EcoPoint Logo" className="home-logo" />

      <div className="home-botoes">
        <button className="botao-branco">Quero descartar</button>
        <button className="botao-outline">Quero fazer a coleta</button>
      </div>
    </div>
  );
}

export default Home;
