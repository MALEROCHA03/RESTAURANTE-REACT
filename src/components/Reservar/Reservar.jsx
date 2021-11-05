
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


export const Reservas = () => {
 


  return (
    <section id="reservar" class="container">
      <div class="row ">
        <div class="col-md-7">
        <br/>
        <br/>
          <h2 class="mb-5"> Reservas </h2>
          
          
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
        <div class="col-md-5">
          <form class="img-padding">
            <div class="mb-3">
            <br/>
            <br/>
              <select class="form-control" id="inputService">
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
                id="inputName"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="number"
                class="form-control"
                id="inputTelefono"
                placeholder="Telefono"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="number"
                class="form-control"
                id="inputPersons"
                placeholder="Nº personas"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="date"
                class="form-control"
                id="inputDate"
                placeholder="Fecha"
                onclick="enviar()"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="time"
                class="form-control"
                id="inputTime"
                placeholder="Hora"
                required
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="textAreaMessage"
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
                id="subEmail"
                onclick=""
              >
                Enviar
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
