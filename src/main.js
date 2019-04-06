import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(Vuetify, {
  iconfont: 'fa' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
