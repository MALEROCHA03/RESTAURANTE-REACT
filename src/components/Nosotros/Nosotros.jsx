import React from "react";

import { Row, Col, Container } from 'react-bootstrap';
import './Nosotros.module.css';

import imgMain from "../../images/foto4@2x.png"
import imgPersonal1 from "../../images/personal1@2x.png"
import imgPersonal2 from "../../images/personal2@2x.png"
import imgPersonal3 from "../../images/personal3@2x.png"
import {Footer} from "../Footer/Footer";
import Img1 from "../../images/personal1@2x.png";
import Img2 from "../../images/personal2@2x.png";
import Img3 from "../../images/personal3@2x.png";

function PersonalRestaurante(props) {

  return (

    <Col md="4">

      <img src={props.img} alt={props.desc}
        className="rounded-circle img-fluid img-thumbnail img-padding" width="50%" height="50%" />

      <h2 className="title-person">{props.name}</h2>
      <p>{props.rol}</p>
    </Col>

  );
}

function Lorem() {

  return (

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum, elit sagittis pellentesque
      posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies lectus felis, nec
      bibendum ipsum mollis a. In mattis sem quis elementum commodo.</p>

  );

}

function Comentario(props) {

  return (

    <Container>

      <Row>

        <Col md="3">

          <img src={props.img} alt={props.desc} class="rounded-circle img-fluid img-comentario" width="190"
            height="132" />

        </Col>

        <div class="col-md-7">

          <p className="parrafo-comentario">Duis ac eros vel dolor condimentum tristique
            vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris. Vivamus
            eleifend
            accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo, elementum
            vitae
            sapien et, semper ultricies ligula.</p>
          <h2 className="titulo-comentario">{props.name}</h2>

        </div>

      </Row>
    </Container>
  );
}

export const About = () => {

  return (

    <main>

      <Container id="nosotros">

        <Row>

          <Col md="6">

            <img src={imgMain} className="img-fluid img-padding" alt="restaurant" width="100%"
              height="100%" />

          </Col>

          <Col md="6">

            <div className="separar">
              <p className="color-secundario img-padding">Nuestra</p>

              <h2>Historia</h2>

              <Lorem />
              <Lorem />

            </div>

          </Col>
        </Row>
      </Container>

      <div className="background-pastel">

        <Container>

          <Row>
            <PersonalRestaurante img={imgPersonal1} desc="Personal del restaurante 1" name="Juan Manuel Gómez B." rol="Chef Ejecutivo" />
            <PersonalRestaurante img={imgPersonal2} desc="Personal del restaurante 2" name="Ana Isabel Casallas B." rol="Chef Pastelera" />
            <PersonalRestaurante img={imgPersonal3} desc="Personal del restaurante 3" name="Maria Paulina Veloza G." rol="Administradora" />
          </Row>

          <Row>
            <PersonalRestaurante img={imgPersonal3} desc="Personal del restaurante 4" name="Laura Isabella Guerrero O." rol="Chef Pastelera" />
            <PersonalRestaurante img={imgPersonal2} desc="Personal del restaurante 5" name="Claudia Vanessa Pérez P." rol="Economista" />
            <PersonalRestaurante img={imgPersonal1} desc="Personal del restaurante 6" name="Luis Mario López V." rol="Diseñador" />
          </Row>

        </Container>
      </div>

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

      <Footer/>

    </main>

  );
};
