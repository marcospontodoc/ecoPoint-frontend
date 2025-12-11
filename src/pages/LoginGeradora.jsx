import "../styles/pages/Login.css";
import logo from "../assets/logo_branco.svg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginGeradora() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar(e) {
    e.preventDefault();
    fetch("http://localhost:8080/EmpresaGeradora/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json(); 
          localStorage.setItem("geradoraId", data.id); 
          navigate("/dashboardGeradora");
        } else {
          console.log("Resposta de erro:", res);
        }
      });
  }

  return (
    <div className="login-container">
      <div className="login-esquerda">
        <div className="login-box">
          <a className="botao-voltar" href="/home">
            <MdKeyboardArrowLeft /> Página Inicial
          </a>

          <h1>Faça login</h1>
          <p className="descricao">Coloque seu e-mail e sua senha para fazer login</p>
          <form onSubmit={logar}>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha*</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button className="botao-login" type="submit">
              Entrar
            </button>
          </form>

          <p className="cadastro">Não possui cadastro? <a>Crie uma conta</a></p>
        </div>
      </div>

      <div className="login-direita">
        <img src={logo} className="login-logo" alt="logo" />
      </div>
    </div>
  );
}

export default LoginGeradora;