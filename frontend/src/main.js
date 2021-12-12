import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainApp from '@/components/MainApp'
import AdminApp from '@/components/AdminApp'
import store from './store'
import Axios from 'axios'
import routerIndex from './router/index.js'
import routerAdministrator from './router/administrator.js'
import vuetify from './plugins/vuetify.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSession from 'vue-session'

Vue.prototype.serverPath = "http://localhost:5000/";
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.use(VueSession)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
      {
          path: "/",
          component: MainApp,
          children: routerIndex
      },
      {
          path: "/administrator",
          component: AdminApp,
          children: routerAdministrator
      },
  ]
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
 