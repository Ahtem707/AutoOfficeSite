import axios from "axios";
import configure from "./Configure.js"
// import Vue from 'vue'

class User {
    constructor(user) {
        this.id = user.uid
        this.userName = user.userName
    }
}

export default {
    state: {
        user: null,
        roles: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        exit(state) {
            state.user = null
        },
        serUserRoles(state, payload) {
            state.roles = payload
        }
    },
    actions: {
        async UserLogin({ commit }, { login, password }) {
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
                if (response.data.error)
                    throw response.data.error
                commit('setUser', new User(user))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async UserRegistration({ commit }, userData) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await axios.post(configure.serverPath, {
                    method: 'createUser',
                    arguments: {
                        name: userData.name,
                        phone: userData.phone,
                        email: userData.email,
                        password: userData.password,
                        userRolesId: userData.userRolesId,
                        birthday: userData.birthday
                    }
                });
                if (response.data.error)
                    throw response.data.error
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async getUserRoles({ commit }) {
            try {
                const response = await axios.post(configure.serverPath, {
                    method: 'getUserRoles'
                })
                const roles = response.data
                if (response.data.error)
                    throw response.data.error
                commit('serUserRoles', roles)
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
        },
        userRoles(state) {
            return state.roles
        }
    }
}