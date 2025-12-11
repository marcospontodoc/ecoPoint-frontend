import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, tipo }) {
  const authKey =
    tipo === "geradora"
      ? "geradoraId"
      : tipo === "coletora"
      ? "coletoraId"
      : "authUser";

  const isAuthenticated = localStorage.getItem(authKey);

  if (!isAuthenticated) {
    alert("Você precisa estar logado para acessar esta página!");
    const redirect =
      tipo === "coletora" ? "/LoginColetora" : "/LoginGeradora";

    return <Navigate to={redirect} replace />;
  }

  return children;
}
