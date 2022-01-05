import Vue from 'vue'
import VueRouter from 'vue-router'
import routerIndex from './main.js'
import routerAdministrator from './administrator.js'
import MainApp from '@/components/MainApp'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import AdminApp from '@/components/AdminApp'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: "/",
            component: MainApp,
            children: routerIndex
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/registration",
            component: Registration
        },
        {
            path: "/administrator",
            component: AdminApp,
            children: routerAdministrator
        },
    ]
})