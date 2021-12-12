import axios from "axios";
import config from "../config.js"

export default {
    state: {
        logged: false
    },
    mutations: {
        adminLogged(state, payload) {
            state.logged = payload
        },
        adminExit(state) {
            console.log("adminExit")
            state.logged = false
        },
    },
    actions: {
        async adminLoginUser({ commit }, { login, password }) {
            commit('adminClearError')
            commit('adminSetLoading', true)
            try {
                const response = await axios.post(config.serverPath + "administrator", {
                    method: 'login',
                    arguments: {
                        login: login,
                        password: password
                    }
                });
                commit('adminLogged', response.data)
                commit('adminSetLoading', false)
            } catch (error) {
                console.log('store/user/error'+error)
                commit('adminSetLoading', false)
                commit('adminSetError', error.message)
                throw error
            }
        }
    },
    getters: {
        adminIsUserLoggedIn(state) {
            return state.logged
        },
    }
}