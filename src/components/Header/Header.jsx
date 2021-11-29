import React, {useState} from "react";

import { GoThreeBars } from "react-icons/go";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
//import { Login } from "../login/login";
import { useAuth0 } from '@auth0/auth0-react';
import { Perfil } from "../login/Perfil";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSignInAlt} />


export const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () =>{
    setMenu(!menu)
  }

  const styleMenu = {
    left: menu ? 0 : "-100%"
  }

  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const { isAuthenticated } = useAuth0(); 

  return (
    <div className={styles.principal}>
      <header className={styles.header}>
        <div className={styles.toogle} onClick={toggleMenu}>
          <GoThreeBars size="45px" />
        </div>
        <img className={styles.logo} src={logo} alt="" />
        <nav className={styles.menu} style={styleMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/" className="text-light text-decoration-none" >Inicio</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/nosotros" className="text-light text-decoration-none">Nosotros</Link>
            </li>
            
            <li className={styles.menuItem}>
              <Link to="/menú" className="text-light text-decoration-none">Menú</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/servicios" className="text-light text-decoration-none">Servicios</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/contactanos" className="text-light text-decoration-none">Contactanos</Link>
            </li>

            <li className={styles.menuItem}>
              <Link to="/reservar" className="text-light text-decoration-none">Reservar</Link>
            </li>
            <li>

<div className="ingresar">
  

            {isAuthenticated ?(
              <>
             
              <Perfil/>
              <button className={styles.ingresar} onClick= {() => logout({ returnTo: window.location.origin } ) }> Salir { element } </button>
              
            </>
            ) : (
              <button className={styles.ingresar} onClick={() => loginWithRedirect()}>Login { element } </button>
              ) }
            
              </div>
            </li>
          </ul>
        </nav>
      
      </header>
    </div>
  );
};