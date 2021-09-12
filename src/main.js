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

// 必ずVueインスタンス作成前に登録する
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
    visible: false // 表示・非表示判定を格納
  },
  methods: {
    handleScroll() {
      // スクロール値が151以上の場合にvisibleをtrue、そうでない場合にfalseにする
      this.visible = window.pageYOffset > 150;
    }
  }
}).$mount('#app')


