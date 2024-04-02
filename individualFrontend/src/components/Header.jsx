import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function Header() {
  const logo = "</>";
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <header className="header-task">
      <Link to="/" className={currentPath === '/' ? 'active' : ''}>{logo}</Link>
      <Link to="/directory" className={currentPath === '/directory' ? 'active' : ''}>Справочник</Link>
      <Link to="/tasks" className={currentPath === '/tasks' ? 'active' : ''}>Задачи</Link>
      <Link to="/teacher" className={currentPath === '/teacher' ? 'active' : ''}>Учителю</Link>
    </header>
  );
}

export default Header;