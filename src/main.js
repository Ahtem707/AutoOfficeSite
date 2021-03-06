import Vue from 'vue'
import App from './App.vue'
import "@/assets/global.css"
import store from './store'
import Axios from 'axios'
import vuetify from './plugins/vuetify.js'
import './plugins/vueSession'
import i18n from './plugins/i18n.js'
import './plugins/extension.js'
import router from './router/index.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.prototype.pushStartScreen = function() {
    const startScreen = '/news'
    if (!(this.$route.path === startScreen)) {
        this.$router.push(startScreen)
    }
}

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App),
    created() {
        this.$session.start()
        if (this.$session.get('userAuth')) {
            this.$i18n.locale = this.$session.get('localize') || "ru"
            const user = this.$session.get('userAuth')
            this.$store.dispatch('SessionLogin', user)
            if (this.$route.path === "/") {
                this.pushStartScreen()
            }
        } else {
            this.$router.push('/login')
        }
    },
}).$mount('#app')