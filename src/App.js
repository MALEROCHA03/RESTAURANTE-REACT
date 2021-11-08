
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
//import Cards from './components/Cards/Cards';
import { Header } from './components/Header/Header';
import { Menu } from './components/rutas/Menu';
import { Home } from './components/rutas/Home';
import { Servicios } from './components/rutas/Servicios';
import { Nosotros } from './components/rutas/Nosotros';
import { Reservar } from './components/rutas/Reservar';
import { Contactanos } from './components/rutas/Contactanos';
function App() {

return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/nosotros" component={Nosotros}/>
          <Route path="/menú" component={Menu}/>
          <Route path="/servicios" component={Servicios}/>
          <Route path="/contactanos"component={Contactanos}/>
          <Route path="/reservar"component={Reservar}/>
          <Route path="/home" component={Home}/>
            <Home />
         

        </Switch>
      </div>
    </Router>

  );
}

export default App;
