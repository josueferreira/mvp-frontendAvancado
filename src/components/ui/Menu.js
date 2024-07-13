import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/cadastro">Cadastrar Clínica</Link>
      <Link to="#">FAQ</Link>
    </nav>
  );
}
