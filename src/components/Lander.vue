<template>
  <div>
    <!-- intro -->
    <section id="sobre" class="section intro-header diagonal">
      <div class="container-fluid intro">
        <h1 style="font-family: 'theboldfont', sans-serif; color: #5cdb95;">
          Olá, meu nome é Josué!
        </h1>
        <img
          src="@/assets/eu2.png"
          alt="Minha foto."
          height="200"
          width="200"
        />
        <h3>Eu gosto de fazer coisas para internet.<br /></h3>
        <div id="apresentacao" class="container">
          <h4>
            Atualmente em Brasília, eu aceito participar de projetos remotos ou
            como freelancer. Meus conhecimentos vão desde HTML + CSS + JS até
            PHP, Vue e Java com um pouco de MySQL, dentre outros.
          </h4>
        </div>
        <hr class="intro-divider" />
        <ul class="list-inline intro-social-buttons row">
          <a href="https://github.com/josuepviana" target="_blank" class="col"
            ><b-icon-github font-scale="2"
          /></a>
          <a
            href="https://www.linkedin.com/in/josue-viana/"
            target="_blank"
            class="col"
            ><b-icon-linkedin font-scale="2"
          /></a>
        </ul>
      </div>
    </section>

    <!-- portfolio -->
    <section id="projetos" class="portfolio">
      <h1><mark>Projetos</mark></h1>
      <p id="sub">Um pouco do que já desenvolvi</p>

      <tabs>
        <div class="tab_container">
          <tab title="PHP">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Gif com fotos do projeto"
                  class="img-custom"
                  src="@/assets/klass.gif"
                />
                <h2>Klass - Rede Social</h2>
              </div>
              <div class="card-body">
                <p>
                  Rede social que tem como ideias base uma junção de Facebook e
                  Twitter.
                  <br />
                  Tecnologias: Laravel, PHP e Bootstrap
                  <br />
                  Banco de dados: MySQL
                </p>
              </div>
              <div class="card-footer">
                <a href="http://klass.josueviana.com" target="_blank">
                  <button type="button" class="btn btn-dark btn-lg">
                    <b-icon-laptop /> Visitar Site
                  </button>
                </a>
              </div>
            </div>
            <br />
          </tab>

          <tab title="Java">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Gif com fotos do codigo"
                  class="img-custom"
                  src="@/assets/apirest.gif"
                  width="fit-content"
                />
                <h2>API Rest</h2>
              </div>
              <div class="card-body" id="covid">
                <p>
                  API Rest - CRUD.
                  <br />
                  Tecnologias: Java com Spring Boot
                </p>
              </div>
              <div class="card-footer">
                <a href="https://github.com/josuepviana/RestApi-com-Spring-Boot" target="_blank">
                  <button type="button" class="btn btn-lg">
                    <b-icon-laptop /> Ver Projeto
                  </button>
                </a>
              </div>
            </div>
            
          </tab>

          <tab title="HTML5/JavaScript">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Gif com fotos do projeto"
                  class="img-custom"
                  src="@/assets/glossario.gif"
                />
                <h2>Glossário Terminológico da COVID-19</h2>
              </div>
              <div class="card-body" id="covid">
                <p>
                  Sistema criado durante meu periodo de trabalho voluntário na
                  CodaMais+.
                  <br />
                  Tecnologias: Node e Materialize
                  <br />
                  Banco de dados: MySQL
                </p>
              </div>
              <div class="card-footer">
                <a href="https://covid19.lexic.com.br/" target="_blank">
                  <button type="button" class="btn btn-lg">
                    <b-icon-laptop /> Visitar Site
                  </button>
                </a>
              </div>
            </div>
          </tab>

          <tab title="Mobile">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Imagem do codigo do App."
                  class="img-custom"
                  src="@/assets/app.jpg"
                  width="500px"
                  height="350px"
                />
                <h2>To Do List</h2>
              </div>
              <div class="card-body" id="covid">
                <p>
                  App desenvolvido durante o Bootcamp Android Developer da Digital Innovation One.
                  <br />
                  Tecnologias: Kotlin
                </p>
              </div>
              <div class="card-footer">
                <a href="https://github.com/josuepviana/ToDoList" target="_blank">
                  <button type="button" class="btn btn-lg">
                    <b-icon-laptop /> Ver Projeto
                  </button>
                </a>
              </div>
            </div>
          </tab>


        </div>
      </tabs>
    </section>

    <!-- modal curriculo -->

    <section class="curriculo">
      <div
        class="modal fade bd-cv-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <cv />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import cv from "./Curriculo.vue";
import Tab from "./Tab.vue";
import Tabs from "./Tabs.vue";

export default {
  name: "Lander",
  components: {
    cv,
    Tab,
    Tabs,
  },
};
</script>

<style lang="css" scoped>
/* DIVISOR */
section {
  position: relative;
  text-align: center;
}

section:before {
  position: absolute;
  content: "";
}

.diagonal {
  z-index: 1;
  padding: 3em;
}

.diagonal:before {
  -webkit-transform: rotate(-3deg);
  transform: rotate(-3deg);
  -webkit-transform-origin: 3% 0;
  transform-origin: 3% 0;
  top: 0;
  left: -25%;
  z-index: -1;
  width: 150%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../assets/background.jpg") no-repeat center center;
  background-repeat: no-repeat;
  background-size: cover;
}

section.diagonal {
  background: #379683;
}

/* geral */
.section {
  padding-top: 10%;
  padding-bottom: 10%;
}

.intro-header {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  color: #f8f8f8;
  background-size: cover;
}

.intro {
  display: block;
  word-wrap: break-word;
  width: 60%;
}

.intro-header > h1 {
  margin: 0;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
  font-size: 4.5em;
}

.intro-header > h3 {
  font-size: 2em;
}

#apresentacao > h4 {
  font-size: 1.5em;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
}

.intro-social-buttons {
  margin: 40px;
}

.intro-social-buttons > a {
  display: inline;
  margin: 20px;
  color: white;
  padding: 20px;
}

.intro-social-buttons > a:hover {
  color: #5cdb95;
}

mark {
  color: #edf5e1;
  background-color: #05386b;
}

.intro-divider {
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

/* portfolio section  */

.portfolio {
  background-color: #379683;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}

.portfolio > h1 {
  color: whitesmoke;
  font-family: "theboldfont", sans-serif;
}

.card {
  width: min-content;
  padding: 10px;
  overflow: hidden;
}

.img-custom {
  margin-top: 15px;
}

.card-head > h2 {
  margin-top: 15px;
  margin-bottom: 0px;
  font-family: "theboldfont", sans-serif;
}

#sub {
  font-size: 1.5em;
}

.card-body > a {
  margin: 10px;
}

.card-body > p {
  text-align: justify;
  text-justify: inter-word;
}

#covid {
  margin-bottom: 24px;
}

#vendas {
  width: 50%;
}

.btn {
  background-color: #05386b;
  color: #edf5e1;
}

.tab_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
}

/* css para mobile */
@media (max-width: 767px) {
  /* intro section  */
  .intro {
    width: auto;
  }

  .intro-social-buttons > a {
    display: inline !important;
    color: white;
  }
  #vendas {
    width: 100%;
  }

  .card{
    width: 95vw;
  }

  .card img{
    width: 90vw;
    height: auto;
  }
}
</style>
