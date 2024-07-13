import Menu from "./Menu";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/logoHor.jpg" />
      </div>
      <Menu />
      <div className="menu-secundario">
        <ul>
            <li><a href="#">Política de Privacidade</a></li>|
            <li><a href="#">Termos de Uso</a></li>
        </ul>
      </div>
    </footer>
  );
}
