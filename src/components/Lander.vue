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
        <h3>
          Eu gosto de fazer coisas para internet.<br />
        </h3>
        <div id="apresentacao" class="container">
          <h4>
            Atualmente em Brasília, eu aceito participar de projetos remotos
            ou como freelancer. Meus conhecimentos vão desde HTML + CSS +
            Javascript até PHP, Vue e REACT com um pouco de MySQL, dentre
            outros.
          </h4>
        </div>
        <hr class="intro-divider" />
        <ul class="list-inline intro-social-buttons row">
          <a href="https://github.com/josuepviana" target="_blank" class="col"
            ><b-icon-github font-scale="2"
          /></a>
          <a href="https://www.linkedin.com/in/josue-viana/" target="_blank" class="col"
            ><b-icon-linkedin font-scale="2"
          /></a>
        </ul>
      </div>
    </section>

    <!-- portfolio -->
    <section id="projetos" class="portfolio">
      <h1><mark>Projetos</mark></h1>
      <p id="sub">Um pouco do que já desenvolvi</p>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="img-custom"
                  src="@/assets/klass.gif"
                />
                <h2>Klass - Rede Social</h2>
              </div>
              <div class="card-body">
                <p>
                  Rede social que tem como ideias base uma junção de Facebook e Twitter.
                  <br/>
                  Desenvolvida usando Laravel e PHP em conjunto com um banco de dados MySQL,
                  a ideia é transformar a interação entre estudantes e a instituição de ensino mais social e atrativa.
                  Postagens pela instituição podem ser feitas, topicos relevantes e avisos estão sempre a vista de acordo com
                  o curso e instituição registrado no perfil do usuário.
                </p>
              </div>
              <div class="card-footer">
                <a href="http://klass.josueviana.com" target="_blank">
                    <button type="button" class="btn btn-dark btn-lg"><b-icon-laptop/> Visitar Site
                    </button>
                </a>
              </div>
            </div>
            <br />
          </div>

          <div class="col">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="img-custom"
                  src="@/assets/glossario.gif"
                />
                <h2>Glossário Terminológico da COVID-19</h2>
              </div>
              <div class="card-body" id="covid">
                <p>
                  Sistema criado durante meu periodo de trabalho voluntário na CodaMais+.
                  <br/>
                  Desenvolvido em Node, PHP e Javascript; além da visão que o usuário comum tem, também existe uma visão
                  de administrador onde as professoras podem fazer o cadastro de novos termos, edição e deleção de dados.
                </p>
              </div>
              <div class="card-footer">
                <a href="https://covid19.lexic.com.br/" target="_blank"> 
                    <button type="button" class="btn btn-lg"><b-icon-laptop/> Visitar Site
                    </button>
                </a>
              </div>
            </div>
          </div>  
          <br/>
          <div class="col">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="img-custom"
                  src="@/assets/vendas.gif"
                />

                <h2>JV Nostagico - Ecommerce</h2>
              </div>
              <div class="card-body">
                <div class="container" id="vendas">
                <p>
                    Um simples site de venda de jogos clássicos.
                    <br/>
                    Desenvolvida em Wordpress utilizando alguns plugins como WooCommerce e Elementor,
                    é um site de vendas funcional que conta com a tela de rastreamento de pedido, comentários sobre o produto
                    perfil do usuário e as demais já esperadas em sites do tipo.
                  </p>
                </div>
              </div>
              <div class="card-footer">
                <a href="http://vendas.josueviana.com" target="_blank">
                    <button type="button" class="btn btn-dark btn-lg"><b-icon-laptop/> Visitar Site
                    </button>
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
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

export default {
  name: "Lander",
  components: {
    cv
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

.intro-social-buttons{
  margin: 40px;
  
}

.intro-social-buttons > a {
  display: inline;
  margin: 20px;
  color: white;
  padding: 20px
}

.intro-social-buttons > a:hover {
  color: #5cdb95;
}

mark{
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

.portfolio > h1{
    color: whitesmoke;
    font-family: 'theboldfont', sans-serif;
}

.card{
    width: auto;
    overflow: hidden;
}

.img-custom {
  margin-top: 15px;
}

.card-head > h2{
    margin-top: 15px;
    margin-bottom: 0px;
    font-family: 'theboldfont', sans-serif;
}

#sub{
    font-size: 1.5em;
}

.card-body > a{
    margin: 10px;
}

.card-body > p{
    text-align: justify;
    text-justify: inter-word;
}

#covid{
    margin-bottom: 24px;
}

#vendas{
  width: 50%;
}

.btn{
    background-color: #05386b;
    color: #edf5e1;
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
#vendas{
  width: 100%;
}
}
</style>
