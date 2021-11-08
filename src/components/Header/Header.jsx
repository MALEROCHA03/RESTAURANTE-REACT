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
              <Link to="/">Inicio</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            
            <li className={styles.menuItem}>
              <Link to="/menú">Menú</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/contactanos">Contactanos</Link>
            </li>

            <li className={styles.menuItem}>
              <Link to="/reservar">Reservar</Link>
            </li>
            <li>

            {isAuthenticated ?(
              <>
             
              <Perfil/>
              <button className={styles.ingresar} onClick= {() => logout({ returnTo: window.location.origin } ) }> salir { element } </button>
              
            </>
            ) : (
              <button className={styles.ingresar} onClick={() => loginWithRedirect()}>Login { element } </button>
            ) }
            
            </li>
          </ul>
        </nav>
      
      </header>
    </div>
  );
};