import React,{Fragment, useState} from 'react';
import Cart from './Cart'
import Burger from './Burger'
import Pollo from '../../images/menu3@2x.png'
import './style.css'
export const Servicios = () => {

    const [burgers] = useState([
        {id: 1, image:Pollo, nombre:'Pollo frisbey', precio: 400000},
        {id: 2, image:Pollo, nombre:'Salmon', precio: 200000},
        {id: 3, image:Pollo, nombre:'Carne', precio: 300000},
        {id: 4, image:Pollo, nombre:'Arroz', precio: 250000},
        
      ])
    //estado del carrito
    
    const [cart, setCart] = useState([]);
  



return (
        <Fragment>
        {/* SECTION CONTENEDOR GLOBAL */}
        <section className="container">
          {/* SECTION DE LA CABECERA */}
          <section className="container__header">
            {/* BOTON DE LA CABECERA */}
            <div className="container__header__menu">
              <button className="container__header__menu--button"></button>
            </div>
  
            {/* TITULO DE LA CABECERA */}
            <div className="container__header__title">
              
            </div>
  
            {/* CART DE LA CABECERA */}
            <div className="container__header__cartDiv">
              <Cart cart={cart} setCart={setCart} />
            </div>
          </section>
  
          {/* SECTION CONTENEDOR PRINCIPAL */}
          <section className="container__content">
  
            
            
        <div>  
  
     </div>
        
  
        <div className="Productos">
          <h1>Menú</h1>
          </div>
      
       
  
            <div className="container__content__listBurgers">
              {burgers.map((burger) => (
                <Burger
                  key={burger.id}
                  burger={burger}
                  cart={cart}
                  setCart={setCart}
                  burgers={burgers} />
              ))}
            </div>
  
          </section>
          <div className="container mt-5">
                
                 </div>
          {/* SECTION FOOTER */}
         
        
          
          
        </section>
      </Fragment>
      
    );
  }

        
 