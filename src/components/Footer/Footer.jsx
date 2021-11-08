import React from 'react'
import '../Footer/Footer.css'
import logo from "../../images/logo.png"
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="l-footer">
        <img className="logo" src={logo} alt="" />
         
        </div>
        <ul className="r-footer">
          <li>
            <h2>
              Social</h2>
            <ul className="box">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Pinterest</a></li>
            </ul>
          </li>
          <li >
            <h2>
              Productos</h2>
            <ul className="box">
              <li><a href="#">Menú</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Reservas</a></li>

            </ul>
          </li>
          <li>
            <h2>Contacto</h2>
            <ul className="box">
              <li><a href="#">+57 31531696</a></li>
              <li><a href="#">salysalsa@gmail.com</a></li>

            </ul>
          </li>
        </ul>
        <div className="b-footer">
          <p>
            Todos los derechos revervados © - JUVENTIC 2021 </p>
        </div>
      </footer>

    </>
  )
}

