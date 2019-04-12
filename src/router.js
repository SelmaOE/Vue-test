import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Proyecto from './views/Proyecto.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/project/:Pid',
      name:'Proyecto',
      component: Proyecto
    }
  ]
})
