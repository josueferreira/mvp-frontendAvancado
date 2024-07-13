import Menu from "./Menu";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
      <div className="footer-logo">
        <img src="/logoHor.jpg" />
      </div>
      <Menu />
      <div className="menu-secundario">
        <nav>
            <a href="#">Política de Privacidade</a>|
            <a href="#">Termos de Uso</a>
        </nav>
      </div>
      </div>
    </footer>
  );
}
