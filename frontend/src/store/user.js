import axios from "axios";
import configure from "./Configure.js"

class User {
    constructor(user) {
        this.id = user.uid
        this.userName = user.userName
    }
}

export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        exit(state) {
            state.user = null
        }
    },
    actions: {
        async LoginUser({ commit }, { login, password }) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await axios.post(configure.serverPath, {
                    method: 'loginUser',
                    arguments: {
                        login: login,
                        password: password
                    }
                });
                const user = response.data[0]
                if (response.data == "Error")
                    throw response.data
                commit('setUser', new User(user))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        IsUserLoggedIn(state) {
            return state.logged
        }
    }
}