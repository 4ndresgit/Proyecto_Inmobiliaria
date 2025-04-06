import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      {/* Sección principal del footer */}
      <section className="footer">
        <div className="footer__container">
          {/* Logo y redes */}
          <div className="footer__logo">
            <div className="logo">
              <img src={logo} alt="logo Inmobiliaria" />
            </div>
            <div>
              <ul className="footer__social">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com"
                  >
                    <i className="fa-brands fa-facebook-f fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com"
                  >
                    <i className="fa-brands fa-square-instagram fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.whatsapp.com"
                  >
                    <i className="fa-brands fa-square-whatsapp fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contacto */}
          <div className="footer__contacto">
            <p className="footer__contacto-title">Contacto</p>
            <p className="footer__contacto-info">
              Tel/Fax: (0249) 444 4444 - 15 4 444444<br />
              info@mail.com.ar<br />
              Maipu 111 - Tandil - Provincias de Bs.As.<br />
              Mayra Rigotti, Estudio inmoviliario{" "}
              <strong>(L.v. Folio Nº 111).</strong>
            </p>
          </div>

          {/* Tasar */}
          <div className="footer__tasar">
            <p className="footer__tasar-title">¿Necesitas tasar tu propiedad?</p>
            <div className="footer__tasar-info">
              <p>
                Te asesoramos con respecto al valor real de venta o alquiler de
                tu inmueble de acuerdo a comparables del mercado.
              </p>
              <Link to="/contacto">Contactanos.</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección copyright */}
      <section className="copyright">
        <div className="copyright-container">
          <div className="copyright-container__copy">
            <p>&copy; 2023 - Mayra Rigotti | Inmobiliaria en Tandil</p>
          </div>
          <div className="copyright-develop">
            <a href="https://www.andresrossi.com.ar" target="_blank" rel="noopener noreferrer">
              <p>Andrés Rossi / Desarrollo Web</p>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;