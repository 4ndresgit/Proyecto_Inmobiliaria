import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">Inmobiliaria</Link>
        </div>
        <nav>
          <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre-nosotros">Nosotros</Link></li>
            <li><Link to="/propiedades">Propiedades</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
