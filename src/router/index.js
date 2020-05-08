import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')

  },
  {
    path: '/test/',
    name: 'HOME',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/test/about',
    name: 'ABOUT',
    component: () => import('../views/About.vue')
  },
  {
    path: '/test/projects',
    name: 'PROJECTS',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/test/projects/detail',
    name: 'project-detail',
    component: () => import('../views/Project-detail.vue')
  },
  {
    path: '/test/contact',
    name: 'CONTACT',
    component: () => import('../views/Contact.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
//   base: process.env.BASE_URL,
  routes
})

export default router
