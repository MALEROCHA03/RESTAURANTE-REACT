import React from "react";
import Icon from "./icon-1.png"
import Icon1 from "./icon-2.png"
import Comida from "./menu.png"
import "./Home.css";
export const Inicio = () => {
 
  return (
    <main>


    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={Icon} alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Icon1} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="resources/img/icon-3.png" alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Siguiente</span>
      </a>
    </div>
  
    <section class="background-img-2">

      <div class="container">

        <div class="row d-flex justify-content-center">

          <div class="col-md-12">

            <h2 class="titulo-organizar d-flex justify-content-center separar-arriba-abajo">Nuestra propuesta</h2>
            <p class="p-organizar bajar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum, elit
              sagittis pellentesque
              posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies lectus felis, nec
              bibendum ipsum mollis a. In mattis sem quis elementum commodo.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce interdum, elit
              sagittis pellentesque
              posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies lectus felis, nec
              bibendum ipsum mollis a. In mattis sem quis elementum commodo.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce interdum, elit
              sagittis pellentesque
              posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies lectus felis, nec
              bibendum ipsum mollis a. In mattis sem quis elementum commodo.</p>

          </div>
        </div>

      </div>

    </section>
    
    <div class="my-5">
      <div class="row row-cols-1 row-cols-md-2 my-5 mx-auto p-4">
        <div class="col row row-cols-1 row-cols-sm-2 mx-auto mt-1">
          <div class="col-12 col-sm-12 fw-bold fs-1">
            <h2 class="titulo3-organizar">Recomendados por el Chef</h2>
          </div>
          <div class="col mt-2">
            <div class="">
              <a target="_blank" href="menu.html"> <img src={Comida} alt="" class="img-fluid mx-auto"/>
              </a>
            </div>
          </div>
          <div class="col mt-2">
            <div class="">
              <a target="_blank" href="menu.html"> <img src={Comida} alt="" class="img-fluid mx-auto"/>
              </a>
            </div>
          </div>
          <div class="col mt-2">
            <div class="">
              <a target="_blank" href="menu.html"> <img src={Comida} alt="" class="img-fluid mx-auto"/>
              </a>
            </div>
          </div>
          <div class="col mt-2">
            <div class="">
              <a target="_blank" href="menu.html"> <img src={Comida} alt="" class="img-fluid mx-auto"/>
              </a>
            </div>
          </div>
        </div>
        <div class="col row align-items-center mx-auto mt-2">
          <div class="col-12 row text-center mx-auto">
            <a target="_blank" href="menu.html"> <img src="resources/img/menu@2x.png" alt="" class="w-75 mx-auto mt-5"/>
            </a>
            <a href="">
              <a target="_blank" href="menu.html">
                <botton type="botton" class="btn btn-orange mt-2">Consultar Menú</botton>
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
   
    <section id="nosotros" class="background-img">
      <div class="container">

        <h2 class="titulo-organizar">Organizamos tu evento</h2>

        <div class="row">


          <div class="col-md-3 separar-arriba-abajo">

            <a target="_blank" href="servicios.html">
              <img src="resources/img/icono1@2x.png" class="img-fluid"
                alt="restaurant" width="35%" height="35%"/></a>

            <h2 class="titulo2-organizar">Fiestas temáticas</h2>
            <p class="p-organizar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum, elit
              sagittis pellentesque
              posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies lectus felis, nec
              bibendum ipsum mollis a. In mattis sem quis elementum commodo.</p>

            <div class="col text-center">
              <a target="_blank" href="servicios.html"> <button type="button" class="btn-lg btn-redondear">+</button>
              </a>
            </div>

          </div>
          <div class="col-md-3 separar-arriba-abajo">

            <a target="_blank" href="servicios.html"> <img src="resources/img/icono2@2x.png" class="img-fluid"
                alt="restaurant" width="40%" height="40%"/> </a>

            <h2 class="titulo2-organizar">Matrimonios</h2>
            <p class="p-organizar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum, elit
              sagittis pellentesque
              posuere, ante dolor laoreet ipsum, vel dignissim tellus diam eu nibh. Ut ultricies lectus felis, nec
              bibendum ipsum mollis a. In mattis sem quis elementum commodo.</p>

            <div class="col text-center">
              <a target="_blank" href="servicios.html"> <button type="button" class="btn-lg btn-redondear">+</button>
              </a>
            </div>

          </div>

          <div class="col-md-3 separar-arriba-abajo">

            <a target="_blank" href="servicios.html"> <img src="resources/img/icono3@2x.png" class="img-fluid"
                alt="restaurant" width="55%" height="55%"/> </a>

            <h2 class="titulo2-organizar">Cenas empresariales</h2>

            <p class="p-organizar">Duis ac eros vel dolor condimentum tristique
              vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris. Vivamus
              eleifend
              accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo, elementum
              vitae
              sapien et, semper ultricies ligula. </p>

            <div class="col text-center">
              <a target="_blank" href="servicios.html"> <button type="button" class="btn-lg btn-redondear">+</button>
              </a>
            </div>

          </div>

          <div class="col-md-3 separar-arriba-abajo">

            <a target="_blank" href="servicios.html"> <img src="resources/img/icono4@2x.png" class="img-fluid"
                alt="restaurant" width="45%" height="45%"/> </a>

            <h2 class="titulo2-organizar">Cumpleaños</h2>

            <p class="p-organizar">Duis ac eros vel dolor condimentum tristique
              vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris. Vivamus
              eleifend
              accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo, elementum
              vitae
              sapien et, semper ultricies ligula. </p>

            <div class="col text-center">
              <a target="_blank" href="servicios.html"> <button type="button" class="btn-lg btn-redondear">+</button>
              </a>
            </div>

          </div>


        </div>

      </div>
    </section>
  

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">

              <div class="col-md-3">

                <img src="resources/img/personal1@2x.png" class="rounded-circle img-fluid img-comentario" width="190"
                  height="132" alt="..." />

              </div>

              <div class="col-md-7">

                <p class="parrafo-comentario">Duis ac eros vel dolor condimentum tristique
                  vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris. Vivamus
                  eleifend
                  accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo, elementum
                  vitae
                  sapien et, semper ultricies ligula. </p>
                <h2 class="titulo-comentario">Juan Manuel Gómez B.</h2>

              </div>

            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">

              <div class="col-md-3">

                <img src="resources/img/personal2@2x.png" class="rounded-circle img-fluid img-comentario" width="190"
                  height="132" alt="..." />

              </div>

              <div class="col-md-7">

                <p class="parrafo-comentario">Duis ac eros vel dolor condimentum tristique
                  vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris. Vivamus
                  eleifend
                  accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo, elementum
                  vitae
                  sapien et, semper ultricies ligula. </p>
                <h2 class="titulo-comentario">Ana Isabel Casallas B.</h2>

              </div>

            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">

              <div class="col-md-3">

                <img src="resources/img/personal3@2x.png" class="rounded-circle img-fluid img-comentario" width="190"
                  height="132" alt="..." />

              </div>

              <div class="col-md-7">

                <p class="parrafo-comentario">Duis ac eros vel dolor condimentum tristique
                  vitae sit amet velit. Mauris felis justo, rhoncus a diam at, tempor suscipit mauris. Vivamus
                  eleifend
                  accumsan cursus. Vivamus vehicula est quis vulputate pretium. Pellentesque metus justo, elementum
                  vitae
                  sapien et, semper ultricies ligula. </p>
                <h2 class="titulo-comentario">Maria Paulina Veloza G.</h2>

              </div>

            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  

  </main>
  );
};