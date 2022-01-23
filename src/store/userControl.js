import axios from "axios";
import configure from "./Configure.js"

export default {
    state: {
        allUsers: [],
    },
    mutations: {

    },
    actions: {
        async GetAllUsers({ state, commit, getters }, { token }) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await axios.post(configure.serverPath + "authUser/" + "getAllUsers", {
                    token: token
                });
                if (response.data.error) throw response.data.error
                state.allUsers = response.data.map((item) => {
                    item.avatarSrc = getters.imageServe + item.avatarSrc
                    return item
                })
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async RemoveUser({ commit }, { token, id }) {
            try {
                const response = await axios.post(configure.serverPath + "authUser/" + "removeUser", {
                    token,
                    id
                });
                if (response.data.error) throw response.data.error
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async SetConfirmUser({ commit }, { token, id, status }) {
            try {
                const response = await axios.post(configure.serverPath + "authUser/" + "setConfirmUser", {
                    token,
                    id,
                    status
                });
                if (response.data.error) throw response.data.error
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        }
    },
    getters: {
        allUsers(state) {
            return state.allUsers
        }
    }
}