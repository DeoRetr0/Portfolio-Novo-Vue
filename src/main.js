import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSmoothScroll from 'vue-smooth-scroll'

import router from './router' 

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

Vue.use(VueSmoothScroll)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    };
    window.addEventListener('scroll', f)
  }
});

new Vue({
  render: h => h(App),
  router,
  data: {
    visible: false
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > 150;
    }
  }
}).$mount('#app')


