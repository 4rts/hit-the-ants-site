import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import sytles from './assets/css/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  sytles,
  render: h => h(App)
}).$mount('#app')
