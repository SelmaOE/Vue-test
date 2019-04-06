import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Proyecto from './views/Proyecto.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/project/:id',
      component: Proyecto
    }
  ]
})
