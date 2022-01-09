import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import news from './news'
import events from './events'
import image from './image.js'

import adminUser from './Administrator/user'
import adminShared from './Administrator/shared'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        news,
        events,
        image,

        adminUser,
        adminShared,
        shared
    }
})