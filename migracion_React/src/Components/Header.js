import React from "react";
import { Link } from "react-router-dom"; // Usamos react-router-dom para manejar rutas

const Header = () => {
  return (
    <header>
      <div className="navbar-container">
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
