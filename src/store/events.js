import axios from "axios";
import configure from "./Configure.js"

export default {
    state: {
        events: []
    },
    mutations: {

    },
    actions: {
        async addEvent({ commit, actions }) {
            try {
                const response = await axios.post(configure.serverPath, {
                    method: 'addEvent',
                    arguments: {
                        title: "",
                        description: "",
                        date: "",
                        whereEvents: "",
                        imageSrc: "",
                    }
                });
                if (response.data.error) throw response.data.error
                actions.getEvents()
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
        },
        async getEvents({ state, commit }) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await axios.post(configure.serverPath, {
                    method: 'getEvents',
                    arguments: {
                        limit: null
                    }
                });
                if (response.data.error) throw response.data.error
                state.events = response.data
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        }
    },
    getters: {
        events(state) {
            return state.events
        }
    }
}