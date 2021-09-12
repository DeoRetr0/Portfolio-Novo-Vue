<template>
  <div id="app">
    <navigation/>
    <router-view></router-view>
    <Footer/>
    
  </div>
</template>

<script>
import Navigation from './components/includes/nav.vue'
import Footer from './components/includes/footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer

  }
}
</script>

<style>
@font-face {
  font-family: "theboldfont";
  src: local("theboldfont"),
   url(./fonts/theboldfont.ttf) format("truetype");
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
  display: flexbox
  }

</style>
