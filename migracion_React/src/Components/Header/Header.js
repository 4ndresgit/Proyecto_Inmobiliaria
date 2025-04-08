import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="navbar-container">
        <div className="responsive-navbar">
          <button
            className="btn btn-success acomodar"
            data-bs-toggle="offcanvas"
            data-bs-target="#id_igual"
          >
            <i className="fa-solid fa-bars fa-2x"></i>
          </button>

          <div className="offcanvas offcanvas-start" id="id_igual">
            <div className="offcanvas-header">
              <div className="offcanvas-title">
                <button className="btn btn-danger" data-bs-dismiss="offcanvas">
                  <i className="fa-solid fa-x fa-1x"></i>
                </button>
              </div>
            </div>
            <div className="offcanvas-body">
              <div className="contenedor_logo">
                <img
                  width="100"
                  height="100"
                  src={logo}
                  alt="Logo"
                />
              </div>
              <ul className="navegacion">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/sobre-nosotros">Nosotros</Link></li>
                <li><Link to="/propiedades">Propiedades</Link></li>
                <li><Link to="/pedidos">Pedidos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <Link to="/">
          <img src={logo} alt="logo Inmobiliaria" />
        </Link>

        <div className="links">
          <ul className="social">
            <li className="social__links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com"
              >
                <i className="fa-brands fa-facebook-f fa-2x"></i>
              </a>
            </li>
            <li className="social__links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com"
              >
                <i className="fa-brands fa-square-instagram fa-2x"></i>
              </a>
            </li>
            <li className="social__links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.whatsapp.com"
              >
                <i className="fa-brands fa-square-whatsapp fa-2x"></i>
              </a>
            </li>
          </ul>
          <nav>
            <ul className="navbar-links">
              <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
              <li><Link to="/propiedades">Propiedades</Link></li>
              <li><Link to="/pedidos">Dejanos tu pedido</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

