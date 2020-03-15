import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import style from './assets/css/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  style,
  render: h => h(App)
}).$mount('#app')
