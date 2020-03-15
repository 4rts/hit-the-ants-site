import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import style from './assets/css/main.scss'
import sytles from './assets/css/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,

  style,
  sytles,
  render: h => h(App)
}).$mount('#app')
