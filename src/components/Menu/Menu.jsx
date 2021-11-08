import React from "react";
import "./Menu.css";
import plato1 from "../../images/menu1@2x.png";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />
export const Menus = () => {
 
  return (
      <main className="container">

          <div className=" my-4">
              <div className="row row-cols-1 mx-auto">
                  <div className="col my-2 alto row row-cols-1 maximo">
                      <div className="col col-sm-12 col-lg-3 d-flex align-items-center">
                          <img src={plato1} className="imagenw mx-auto img-fluid" alt=""/>
                      </div>
                      <div className="col col-sm-8 col-lg-6 py-3 row row-cols-1 mx-auto d-flex align-items-center">
                          <div className="col borde border-bottom-2">
                              <h4 className="fw-bold titulo">Titulo de Prueba</h4>
                          </div>
                          <div className="my-1 col overflow-auto">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis consequuntur
                                  cum dolores eligendi harum id, iste, labore laborum magni obcaecati officia officiis,
                                  porro praesentium quia saepe ut. Asperiores, eius?</p>
                          </div>
                          <div className="col">
                              <p className="card-text">$50.000</p>
                          </div>
                      </div>
                      <div className="col col-sm-4 col-lg-3 mx-auto row">
                          <div className="col d-flex align-items-center w-100">
                              <div className="col row row-cols-1 text-center">
                                  <div className="col my-1 d-inline">

                                  </div>
                                  <div className="col my-2">

                                      <button href="#" data-name="Salad" data-price="50000" className=" add-to-cart añadir2">{element}</button>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="mx-auto my-4">
              <div className="row row-cols-1 mx-auto">
                  <div className="col my-2 alto row row-cols-1 maximo">
                      <div className="col col-sm-12 col-lg-3 d-flex align-items-center">
                          <img src={plato1} className="imagenw mx-auto img-fluid" alt=""/>
                      </div>
                      <div className="col col-sm-8 col-lg-6 py-3 row row-cols-1 mx-auto d-flex align-items-center">
                          <div className="col borde border-bottom-2">
                              <h4 className="fw-bold titulo">FRISBEE</h4>
                          </div>
                          <div className="my-1 col overflow-auto">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis consequuntur
                                  cum dolores eligendi harum id, iste, labore laborum magni obcaecati officia officiis,
                                  porro praesentium quia saepe ut. Asperiores, eius?</p>
                          </div>
                          <div className="col">
                              <p className="card-text">$50.000</p>
                          </div>
                      </div>
                      <div className="col col-sm-4 col-lg-3 mx-auto row">
                          <div className="col d-flex align-items-center w-100">
                              <div className="col row row-cols-1 text-center">
                                  <div className="col my-1 d-inline">

                                  </div>
                                  <div className="col my-2">

                                      <button href="#" data-name="Frisbee" data-price="500000"
                                              className="add-to-cart añadir2" onClick="fire">{element}</button>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  );
};
