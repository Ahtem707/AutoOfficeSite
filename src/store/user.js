import axios from "axios";
import configure from "./Configure.js"
import Vue from 'vue'

class User {
    constructor(user) {
        this.id = user.idUsers
        this.avatarSrc = user.avatarSrc
        this.userName = user.userName
        this.email = user.email
        this.phone = user.phone
        this.birthday = user.birthday
        this.userRole = user.userRoles
        this.confirmed = user.confirmed
    }
}

export default {
    state: {
        user: null,
        roles: null,
        birthdays: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            Vue.prototype.$session.set('userAuth', state.user)
        },
        exit(state) {
            state.user = null
            Vue.prototype.$session.destroy()
        },
        setUserRoles(state, payload) {
            state.roles = payload
        },
        setBirtdays(state, payload) {
            state.birthdays = payload
        }
    },
    actions: {
        SessionLogin({ commit }, user) {
            commit('setUser', user)
        },
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
                var user = response.data[0]
                if (response.data.error) throw response.data.error

                user.avatarSrc = this.getters.imageServe + user.avatarSrc
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
                commit('setUserRoles', roles)
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async getUserBirthday({ commit }) {
            try {
                const response = await axios.post(configure.serverPath, {
                    method: 'getBirthdays',
                    arguments: {
                        earlierDays: null,
                        limit: null
                    }
                })
                var birthdays = response.data
                if (response.data.error)
                    throw response.data.error

                birthdays.forEach((item) => {
                    if (item.avatarSrc) {
                        item.avatarSrc = this.getters.imageServe + item.avatarSrc
                    }
                })

                commit('setBirtdays', birthdays)
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
        },
        birthdays(state) {
            return state.birthdays
        }
    }
}