import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import style from './assets/styles/variables.scss'
import VueResizeText from 'vue-resize-text';

Vue.config.productionTip = false
Vue.use(VueResizeText)
new Vue({
    router,
    vuetify,
    style,
    render: h => h(App)
}).$mount('#app')
