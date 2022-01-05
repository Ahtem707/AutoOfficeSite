import Vue from 'vue'
import App from './App.vue'
import "@/assets/global.css"
import store from './store'
import Axios from 'axios'
import vuetify from './plugins/vuetify.js'
import i18n from './plugins/i18n.js'
import router from './router/index.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSession from 'vue-session'
import DateTextField from '@/components/DateTextField'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.component('dateTextField', DateTextField)
Vue.use(VueSession)
Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')