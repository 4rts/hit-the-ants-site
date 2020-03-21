import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Home
  },
  {
    path: '/about',
    name: 'ABOUT',
    component: () => import('../views/About.vue')
  },
  {
    path: '/projects',
    name: 'PROJECTS',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'CONTACT',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
//   base: process.env.BASE_URL,
  routes
})

export default router
