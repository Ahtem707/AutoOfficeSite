import Vue from 'vue'
import Vuex from 'vuex'
import adminUser from './Administrator/user'
import adminShared from './Administrator/shared'
import ads from './ads'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        adminUser,
        adminShared,
        ads,
        user,
        shared
    }
})