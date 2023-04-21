import "../../styles/index.css";
import logo from "../../../assets/logo.png";

export function Footer() {
  return (
    <footer className="footer">
      <p> made with love </p>
      <img src={logo} alt="Logo" />
    </footer>
  );
}
