import { Link } from 'react-router-dom';
import "../App.css";

function Header() {
  const logo = "</>";

  return (
    <header className="header-task">
      <Link to="/">{logo}</Link>
      <Link to="/directory" >Cправочник</Link>
      <Link to="/tasks" >Задачи</Link>
      <Link to="http://localhost:8000/admin/" >Учителю</Link>
    </header>
  );
}

export default Header;