import React from "react";
import Icon from "./icon-1.png"
import Icon1 from "./icon-2.png"
import Icon2 from "./icon-3.png"
import Sal from "./sal.png"
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

import icon1 from "../../images/icono1@2x.png"
import icon2 from "../../images/icono2@2x.png"
import icon3 from "../../images/icono3@2x.png"
import icon4 from "../../images/icono4@2x.png"

import menu1 from "../../images/menu1@2x.png"
import menu2 from "../../images/menu2@2x.png"
import menu3 from "../../images/menu3@2x.png"
import menu4 from "../../images/menu4@2x.png"

import Img1 from "../../images/personal1@2x.png"
import Img2 from "../../images/personal2@2x.png"
import Img3 from "../../images/personal3@2x.png"
import {Footer} from "../Footer/Footer";

export const Inicio = () => {

    return (
        <main>


            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Icon} alt="First slide"/>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Icon1} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Icon2} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Siguiente</span>
                </a>
            </div>

            <section className={`${styles.backgroundTwo}`}>

                <div className="container">

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-12">

                            <h2 className="titulo-organizar d-flex justify-content-center separar-arriba-abajo">Nuestra
                                propuesta</h2>
                            <p className="p-organizar bajar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                interdum, elit
                                sagittis pellentesque
                                posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies
                                lectus felis, nec
                                bibendum ipsum mollis a. In mattis sem quis elementum commodo.Lorem ipsum dolor sit
                                amet, consectetur
                                adipiscing elit. Fusce interdum, elit
                                sagittis pellentesque
                                posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies
                                lectus felis, nec
                                bibendum ipsum mollis a. In mattis sem quis elementum commodo.Lorem ipsum dolor sit
                                amet, consectetur
                                adipiscing elit. Fusce interdum, elit
                                sagittis pellentesque
                                posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies
                                lectus felis, nec
                                bibendum ipsum mollis a. In mattis sem quis elementum commodo.</p>

                        </div>
                    </div>

                </div>

            </section>

            <div className="my-5">
                <div className="row row-cols-1 row-cols-md-2 my-5 mx-auto p-4">
                    <div className="col row row-cols-1 row-cols-sm-2 mx-auto mt-1">
                        <div className="col-12 col-sm-12 fw-bold fs-1">
                            <h2 className="titulo3-organizar">Recomendados por el Chef</h2>
                        </div>
                        <div className="col mt-2">
                            <div className="">
                                <a target="_blank" href="menu.html"> <img src={menu1} alt=""
                                                                          className={`${styles.borderRadius} img-fluid mx-auto`}/>
                                </a>
                            </div>
                        </div>
                        <div className="col mt-2">
                            <div className="">
                                <a target="_blank" href="menu.html"> <img src={menu2} alt=""
                                                                          className={`${styles.borderRadius} img-fluid mx-auto`}/>
                                </a>
                            </div>
                        </div>
                        <div className="col mt-2">
                            <div className="">
                                <a target="_blank" href="menu.html"> <img src={menu3} alt=""
                                                                          className={`${styles.borderRadius} img-fluid mx-auto`}/>
                                </a>
                            </div>
                        </div>
                        <div className="col mt-2">
                            <div className="">
                                <a target="_blank" href="menu.html"> <img src={menu4} alt=""
                                                                          className={`${styles.borderRadius} img-fluid mx-auto`}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col row align-items-center mx-auto mt-2">
                        <div className="col-12 row text-center mx-auto">
                            <a target="_blank" href="menu.html"> <img src={Sal} alt="" className={`${styles.borderRadius} w-75 mx-auto mt-5`}/>
                            </a>
                            <a href="_black">
                                <a target="_blank" href="menu.html">
                                    <botton type="botton" class="btn btn-orange mt-2">Consultar Menú</botton>
                                </a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section id="nosotros" className="background-img">
                <div className="container">

                    <h2 className={`${styles.tituloOrganizar}`}>Organizamos tu evento</h2>

                    <div className="row">


                        <div className={`col-md-3 ${styles.separarArribaAbajo}`}>

                            <a target="_blank" href="servicios.html">
                                <img src={icon1} className="img-fluid"
                                     alt="restaurant" width="35%" height="35%"/></a>

                            <h2 className="titulo2-organizar">Fiestas temáticas</h2>
                            <p className="p-organizar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                interdum, elit
                                sagittis pellentesque
                                posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies
                                lectus felis, nec
                                bibendum ipsum mollis a. In mattis sem quis elementum commodo.</p>

                            <div className="col text-center">
                                <a target="_blank" href="servicios.html">
                                    <button type="button" className="btn-lg btn-redondear">+</button>
                                </a>
                            </div>

                        </div>
                        <div className="col-md-3 separar-arriba-abajo">

                            <a target="_blank" href="servicios.html"> <img src={icon2}
                                                                           className="img-fluid"
                                                                           alt="restaurant" width="40%" height="40%"/>
                            </a>

                            <h2 className="titulo2-organizar">Matrimonios</h2>
                            <p className="p-organizar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                interdum, elit
                                sagittis pellentesque
                                posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies
                                lectus felis, nec
                                bibendum ipsum mollis a. In mattis sem quis elementum commodo nec
                                bibendum.</p>

                            <div className="col text-center">
                                <a target="_blank" href="servicios.html">
                                    <button type="button" className="btn-lg btn-redondear">+</button>
                                </a>
                            </div>

                        </div>

                        <div className="col-md-3 separar-arriba-abajo">

                            <a target="_blank" href="servicios.html"> <img src={icon3}
                                                                           className="img-fluid"
                                                                           alt="restaurant" width="55%" height="55%"/>
                            </a>

                            <h2 className="titulo2-organizar">Cenas empresariales</h2>

                            <p className="p-organizar">Duis ac eros vel dolor condimentum tristique
                                vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris.
                                Vivamus
                                eleifend
                                accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo,
                                elementum
                                vitae. </p>

                            <div className="col text-center">
                                <a target="_blank" href="servicios.html">
                                    <button type="button" className="btn-lg btn-redondear">+</button>
                                </a>
                            </div>

                        </div>

                        <div className="col-md-3 separar-arriba-abajo">

                            <a target="_blank" href="servicios.html"> <img src={icon4}
                                                                           className="img-fluid"
                                                                           alt="restaurant" width="45%" height="45%"/>
                            </a>

                            <h2 className="titulo2-organizar">Cumpleaños</h2>

                            <p className="p-organizar">Duis ac eros vel dolor condimentum tristique
                                vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris.
                                Vivamus
                                eleifend
                                accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo,
                                elementum
                                vitae
                                sapien et, semper ultricies ligula, Pellentesque metus justo. </p>

                            <div className="col text-center">
                                <a target="_blank" href="servicios.html">
                                    <button type="button" className="btn-lg btn-redondear">+</button>
                                </a>
                            </div>

                        </div>


                    </div>

                </div>
            </section>


            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                            <div className="row">

                                <div className="col-md-3">

                                    <img src={Img1}
                                         className="rounded-circle img-fluid img-comentario" width="190"
                                         height="132" alt="..."/>

                                </div>

                                <div className="col-md-7">

                                    <p className="parrafo-comentario">Duis ac eros vel dolor condimentum tristique
                                        vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit
                                        mauris. Vivamus
                                        eleifend
                                        accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus
                                        justo, elementum
                                        vitae
                                        sapien et, semper ultricies ligula. </p>
                                    <h2 className="titulo-comentario">Juan Manuel Gómez B.</h2>

                                </div>

                            </div>
                    </div>
                    <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-3">

                                    <img src={Img2}
                                         className="rounded-circle img-fluid img-comentario" width="190"
                                         height="132" alt="..."/>

                                </div>

                                <div className="col-md-7">

                                    <p className="parrafo-comentario">Duis ac eros vel dolor condimentum tristique
                                        vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit
                                        mauris. Vivamus
                                        eleifend
                                        accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus
                                        justo, elementum
                                        vitae
                                        sapien et, semper ultricies ligula. </p>
                                    <h2 className="titulo-comentario">Ana Isabel Casallas B.</h2>

                                </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-3">

                                    <img src={Img3} className="rounded-circle img-fluid img-comentario" width="190"
                                         height="132" alt="..."/>

                                </div>

                                <div className="col-md-7">

                                    <p className="parrafo-comentario">Duis ac eros vel dolor condimentum tristique
                                        vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit
                                        mauris. Vivamus
                                        eleifend
                                        accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus
                                        justo, elementum
                                        vitae
                                        sapien et, semper ultricies ligula. </p>
                                    <h2 className="titulo-comentario">Maria Paulina Veloza G.</h2>

                                </div>

                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </main>
    );
};