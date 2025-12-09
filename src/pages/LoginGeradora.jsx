import "../styles/pages/Login.css";
import logo from "../assets/logo_branco.svg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginGeradora() {
  const navigate = useNavigate(); {/*metodo do react para navegador no routes*/} 
  const [email,setEmail] = useState(""); {/* armazena ou alterar uma variavel(email) em tempo real */}
  const [senha,setSenha] = useState("");
  return (
    <div className="login-container">

    <div className="login-esquerda">
        <div className="login-box">
        <a className="botao-voltar" href="/home">
        <MdKeyboardArrowLeft /> Página Inicial
        </a>
        
        <h1>Faça login</h1>
        <p className="descricao">Coloque seu e-mail e sua senha para fazer login</p>

        <label>E-mail*</label>
        <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e)=> setEmail(e.target.value)} />  {/*onChange identifica qnd o valor do imput muda, e dentro dele td q for mudado ele vai por dentro do Email  */}
        <label>Senha*</label>
        <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e)=> setSenha(e.target.value)} />

        <button className="botao-login" onClick={() => navigate("/dashboard")}>Entrar</button>

        <p className="cadastro">Não possui cadastro? <a>Crie uma conta</a></p>
        </div>
    </div>

    <div className="login-direita">
        <img src={logo} className="login-logo" />
    </div>
    </div>

  );
}

export default LoginGeradora;
