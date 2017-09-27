// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './components/App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
