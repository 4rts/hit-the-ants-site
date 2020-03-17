import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
<<<<<<< HEAD
import styles from './assets/styles/main.scss'
=======
import style from './assets/styles/variables.scss'
>>>>>>> 842c57140d8aa7fbdc3f686c783f215ee912391f

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  styles,
  render: h => h(App)
}).$mount('#app')
