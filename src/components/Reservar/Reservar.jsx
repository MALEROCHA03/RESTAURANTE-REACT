
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import emailjs from "emailjs-com"

import "./Reservar.module.css"
import {Footer} from "../Footer/Footer";

export const Reservas = () => {
  function sendEmail (e) {
    e.preventDefault();

    emailjs.sendForm('service_5dpxtmh', 'template_x2axngi', e.target, 'user_9DqcTizEyVBhpwhS3xMUY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    
    <section id="reservar">
      <div  className="container">
      <div class="row ">
        <div class="col-md-6">
        <br/>
        <br/>
          <h2 class="mb-6" > Reservas </h2>
          
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
            interdum, elit sagittis pellentesque posuere, ante dolor laoreet
            ipsum, vel dignissim tellus diam eu nibh.Ut ultricies lectus felis,
            nec bibendum ipsum mollis a.In mattis sem quis elementum commodo.
          </p>
          <p>
            
            Duis ac eros vel dolor condimentum tristique vitae sit amet
            velit.Mauris felis justo, rhoncus a diam at, tempor suscipit
            mauris.Vivamus eleifend accumsan cursus.Vivamus vehicula est quis
            vulputate pretium.Pellentesque metus justo, elementum vitae sapien
            et, semper ultricies ligula.
          </p>
        </div>
        
        
        <div class="col-md-6">
          <form class="img-padding" onSubmit={sendEmail} >
            <div class="mb-3">
            <br/>
            <br/>
            
              <select class="form-control" name="servicio">
                <option disabled selected>
                  Seleccione el servicio
                </option>
                <br/>
                <option> Celebración de cumpleaños </option>
                <option> Aniversarios </option>
                <option> Fiestas infantiles </option>
                <option> Declaraciones o propuestas </option>
                <option> Despedidas </option> 
                <option> Cena con amigos </option>
              </select>
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                name="nombre"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                name="cliente"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                name="telefono"
                placeholder="Telefono"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                name="numero"
                placeholder="Nº personas"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="date"
                class="form-control"
                name="fecha"
                placeholder="Fecha"
                
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="time"
                class="form-control"
                name="hora"
                placeholder="Hora"
                required
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                name="mensaje"
                rows="4"
                placeholder="Indicaciones especiales"
                required
              ></textarea>{" "}
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkTerms"
                  required
                />
                <label class="form-check-label" for="checkTerms">
                  <i> Acepto Términos y condiciones </i>{" "}
                </label>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col text-center">
              <button
                type="submit"
                class="btn btn-dark"
                name="subEmail"                
              >
                Enviar
              </button>{" "}
            </div>{" "}

          </form>{" "}
        </div>{" "}


      </div>{" "}
      </div>
      <Footer/>
    </section>


  );

};
