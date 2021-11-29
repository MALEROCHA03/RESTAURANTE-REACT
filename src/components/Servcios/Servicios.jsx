import React from "react";
import "./Servicos.module.css";
import servicios1 from "../../images/servicios-1.jpeg";
import servicios2 from "../../images/servicios-2.jpeg";
import servicios3 from "../../images/servicios-3.jpeg";
import servicios4 from "../../images/servicios-4.jpeg";
import servicios5 from "../../images/servicios-5.jpeg";
import servicios6 from "../../images/servicios-6.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

import {Link} from "react-router-dom";
import {Footer} from "../Footer/Footer";


export const Service = () => {


    return (

        <div className="container">
         
                <div className="col-md-12">
                    <h1 id="margen">Servicios</h1>
                    <p>
                        {" "}
                        ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellat
                        est maiores a aliquam sunt aliquid, enim dignissimos deserunt
                        blanditiis dolorem architecto? Harum laboriosam doloremque, in nisi
                        sit impedit eveniet Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quae, itaque facilis numquam error perferendis
                        ipsam laudantium laborum cupiditate quis ab esse. Distinctio
                        voluptatum officiis obcaecati. Quis id in accusantium nobis!{" "}
                    </p>
                </div>
           

            <section id="servicios" className="container">
                <div className="row">
                    <div className="col-md-6  justify-content-center">
                        <div className="card">
                            <img src={servicios1} className="card-img-top" alt="..."/>
                            <div className="card-body ">
                                <h5 className="card-title">Celebracion de cumpleaños</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Veniam excepturi enim temporibus alias dolores? Eius eaque
                                    asperiores similique dignissimos corporis impedit iste
                                    consequatur a labore inventore. Quam quasi temporibus
                                    corporis.
                                </p>

                                < Link to="/reservar" className="btn btn-dark" id="cumple">

                                    RESERVAR!!

                                </Link>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-6  justify-content-center">
                        <div className="card">
                            <img src={servicios2} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Aniversarios</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad
                                    vitae eius voluptatum! Blanditiis eligendi minima error
                                    deleniti tempora voluptates eveniet, dicta labore eos
                                    perspiciatis quae libero fugit enim autem.
                                </p>
                                < Link to="/reservar" className="btn btn-dark" id="cumple">

                                    RESERVAR!!

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6    justify-content-center">
                        <div className="card">
                            <img src={servicios3} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Fiestas infantiles</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Exercitationem, earum, corporis asperiores ipsa magni eaque
                                    facere laudantium ullam, minus repudiandae sunt numquam dicta
                                    voluptatibus. Excepturi dolores temporibus sequi sit rem?.
                                </p>
                                < Link to="/reservar" className="btn btn-dark" id="cumple">

                                    RESERVAR!!

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6   justify-content-center">
                        <div className="card">
                            <img src={servicios4} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Declaracion o propuestas</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Exercitationem, earum, corporis asperiores ipsa magni eaque
                                    facere laudantium ullam, minus repudiandae sunt numquam dicta
                                    voluptatibus. Excepturi dolores temporibus sequi sit rem?.
                                </p>
                                < Link to="/reservar" className="btn btn-dark" id="cumple">

                                    RESERVAR!!

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  d-flex justify-content-center">
                        <div className="card">
                            <img src={servicios5} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Despedidas</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Exercitationem, earum, corporis asperiores ipsa magni eaque
                                    facere laudantium ullam, minus repudiandae sunt numquam dicta
                                    voluptatibus. Excepturi dolores temporibus sequi sit rem?.
                                </p>
                                < Link to="/reservar" className="btn btn-dark" id="cumple">

                                    RESERVAR!!

                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6   d-flex justify-content-center">

                        <div className="card ">

                            <img src={servicios6} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cena con amigos</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Exercitationem, earum, corporis asperiores ipsa magni eaque
                                    facere laudantium ullam, minus repudiandae sunt numquam dicta
                                    voluptatibus. Excepturi dolores temporibus sequi sit rem?.
                                </p>
                                < Link to="/reservar" className="btn btn-dark" id="cumple">

                                    RESERVAR!!

                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};
