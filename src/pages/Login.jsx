import "../styles/Login.css";
import logo from "../assets/logo_branco.svg";
import { MdKeyboardArrowLeft } from "react-icons/md";

function Login() {
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
        <input type="email" placeholder="Digite seu e-mail" />

        <label>Senha*</label>
        <input type="password" placeholder="Digite sua senha" />

        <button className="botao-login">Entrar</button>

        <p className="cadastro">Não possui cadastro? <a>Crie uma conta</a></p>
        </div>
    </div>

    <div className="login-direita">
        <img src={logo} className="login-logo" />
    </div>
    </div>

  );
}

export default Login;
