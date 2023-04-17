import { Link } from "react-router-dom";
import "../../styles/index.css";

export function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/cadastro-metereologico"> Cadastrar </Link>
        </li>
        <li>
          <Link to="/lista-de-cidades"> Listar </Link>
        </li>
      </ul>
    </header>
  );
}
