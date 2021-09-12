<template>
  <nav class="navbar navbar-expand-lg fixed-top py-3">
    <div class="container">
      <img src="@/assets/logo.png" alt="" height="50px" />
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler navbar-toggler-right"
      >
        <b-icon-list />
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              href="#sobre"
              class="nav-link text-uppercase font-weight-bold"
              v-smooth-scroll="{ duration: 500, offset: -50 }"
              >Sobre</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#projetos"
              class="nav-link text-uppercase font-weight-bold"
              v-smooth-scroll="{ duration: 500, offset: 0 }"
              >Projetos</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#curriculo"
              role="button"
              class="nav-link text-uppercase font-weight-bold"
              data-toggle="modal"
              data-target=".bd-cv-modal-lg"
              >Currículo</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #379683;
}
a {
  text-decoration: none;
  color: #edf5e1;
}
a:visited {
  text-decoration: none;
  color: #edf5e1;
}
a:active {
  text-decoration: none;
  color: #edf5e1;
}
a:link {
  text-decoration: none;
  color: #edf5e1;
}
a:hover {
  color: #5cdb95;
}
.container ul > li {
  background-color: #05386b;
  margin: 5px;
  letter-spacing: 0.1em;
}
</style>
