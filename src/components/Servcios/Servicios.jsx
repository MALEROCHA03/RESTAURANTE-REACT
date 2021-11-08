
import React from "react";
import "./Servicos.module.css";
import servicios1 from "../../images/servicios-1.jpeg";
import servicios2 from "../../images/servicios-2.jpeg";
import servicios3 from "../../images/servicios-3.jpeg";
import servicios4 from "../../images/servicios-4.jpeg";
import servicios5 from "../../images/servicios-5.jpeg";
import servicios6 from "../../images/servicios-6.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";


export const Service = () => {
 

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
        <br/>
          <h1 id="margen">Servicios</h1>
          <br/>
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
        
        <div class="col-md-6">
        <br/>
        <br/>
          <br/>
          <br/>
         
          <p >
            ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellat
            est maiores a aliquam sunt aliquid, enim dignissimos deserunt
            blanditiis dolorem architecto? Harum laboriosam doloremque, in nisi
            sit impedit eveniet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae, itaque facilis numquam error perferendis
            ipsam laudantium laborum cupiditate quis ab esse. Distinctio
            voluptatum officiis obcaecati. Quis id in accusantium nobis!
          </p>
        </div>
        
      </div>

      <section id="servicios" class="container">
        <div class="row">
          <div class="col-md-6 separar d-flex justify-content-center">
            <div class="card">
              <img src={servicios1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Celebracion de cumpleaños</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam excepturi enim temporibus alias dolores? Eius eaque
                  asperiores similique dignissimos corporis impedit iste
                  consequatur a labore inventore. Quam quasi temporibus
                  corporis.
                </p>
                <a href="reservas.html" class="btn btn-dark" id="cumple">
                  RESERVAR!!
                </a>
              </div>
              <br/>
            </div>
            <br/>
          </div>
          <br/>
          <div class="col-md-6 separar d-flex justify-content-center">
            <div class="card">
              <img src={servicios2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Aniversarios</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad
                  vitae eius voluptatum! Blanditiis eligendi minima error
                  deleniti tempora voluptates eveniet, dicta labore eos
                  perspiciatis quae libero fugit enim autem.
                </p>
                <a href="reservas.html" class="btn btn-dark" id="aniversario">
                  RESERVAR!!
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 separar d-flex justify-content-center">
            <div class="card">
              <img src={servicios3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fiestas infantiles</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, earum, corporis asperiores ipsa magni eaque
                  facere laudantium ullam, minus repudiandae sunt numquam dicta
                  voluptatibus. Excepturi dolores temporibus sequi sit rem?.
                </p>
                <a href="reservas.html" class="btn btn-dark" id="fiestasIN">
                  RESERVAR!!
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 separar d-flex justify-content-center">
            <div class="card">
              <img src={servicios4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Declaracion o propuestas</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, earum, corporis asperiores ipsa magni eaque
                  facere laudantium ullam, minus repudiandae sunt numquam dicta
                  voluptatibus. Excepturi dolores temporibus sequi sit rem?.
                </p>
                <a href="reservas.html" class="btn btn-dark" id="matrimonio">
                  RESERVAR!!
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 separar d-flex justify-content-center">
            <div class="card">
              <img src={servicios5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Despedidas</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, earum, corporis asperiores ipsa magni eaque
                  facere laudantium ullam, minus repudiandae sunt numquam dicta
                  voluptatibus. Excepturi dolores temporibus sequi sit rem?.
                </p>
                <a href="reservas.html" class="btn btn-dark" id="despedidas">
                  RESERVAR!!
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-6 separar d-flex justify-content-center">
            <div class="card">
              <img src={servicios6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Cena con amigos</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, earum, corporis asperiores ipsa magni eaque
                  facere laudantium ullam, minus repudiandae sunt numquam dicta
                  voluptatibus. Excepturi dolores temporibus sequi sit rem?.
                </p>
                <a href="reservas.html" class="btn btn-dark" id="amigos">
                  RESERVAR!!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
