import React from 'react'
import '../Footer/Footer.css'
import logo from "../../images/logo.png"
import {Link} from "react-router-dom";

export function Footer() {
  return (
      <footer className="site-footer">
          <div className="row">


            <div className="col-md-3">

              <Link href="index.html"><img className="img-fluid" src={logo} width="65%" height="65%" /></Link>

            </div>

            <div className="col-md-3">

              <a href="mapa.html">
                <h6>Mapa del sitio</h6>
              </a>

              <ul className="footer-links">
                <li><Link href="index.html">Inicio</Link></li>
                <li><Link href="nosotros.html">Nosotros</Link></li>
                <li><Link href="servicios.html">Servicios</Link></li>
                <li><Link href="menu.html">Menú</Link></li>
                <li><Link href="contactanos.html">Contáctanos</Link></li>
              </ul>

            </div>

            <div className="col-md-3">

              <h6>Redes sociales</h6>

              <ul className="footer-links">
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Youtube</a></li>
              </ul>

            </div>

            <div className="col-3">
              <div id="map_lima"/>

            </div>


        </div>


      </footer>


)
}

