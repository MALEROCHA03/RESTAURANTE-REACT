import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"


import { Row, Col, Container } from 'react-bootstrap';
import "./Contactanos.css"


export const Contact = () => {

  return (

    <Container id="contactenos" className="featurette-divider">

    <Row className="img-padding">


      <Col md="7">

        <h2 className="mb-5">Contáctanos</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum, elit sagittis pellentesque
          posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies lectus felis, nec
          bibendum ipsum mollis a. In mattis sem quis elementum commodo.</p>
        <p> Duis ac eros vel dolor condimentum tristique
          vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris. Vivamus eleifend
          accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo, elementum vitae
          sapien et, semper ultricies ligula. </p>
      </Col>

      <Col md="5">

        <form className="img-padding">

          <div className="mb-3">
            <select className="form-control" id="inputService">
              <option disabled selected>Seleccione el servicio</option>
              <option value="1">Celebración de cumpleaños</option>
              <option>Aniversarios</option>
              <option>Fiestas infantiles</option>
              <option>Declaraciones o propuestas</option>
              <option>Despedidas</option>
              <option>Cena con amigos</option>
            </select>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" id="inputSubject" placeholder="Asunto" required></input>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" id="inputName" placeholder="Nombre completo" required></input>
          </div>

          <div className="mb-3">
            <input type="email" className="form-control" id="inputEmail" placeholder="Correo electrónico" required></input>
          </div>

          <div className="mb-3">
            <textarea className="form-control" id="textAreaMessage" rows="4" placeholder="Su mensaje" required></textarea>
          </div>

          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="checkTerms" required></input>
              <label className="form-check-label" for="checkTerms">
                <i>Acepto Términos y condiciones</i>
              </label>
            </div>
          </div>
          <div className="col text-center">
            <button type="submit" className="btn-lg btn-orange">Enviar</button>
          </div>
        </form>


      </Col>
    </Row>

  </Container>


  );
};