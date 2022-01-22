import axios from "axios";
import configure from "./Configure.js"

export default {
    state: {
        news: []
    },
    mutations: {

    },
    actions: {
        async addNew({ commit, actions }) {
            try {
                const response = await axios.post(configure.serverPath, {
                    method: 'addNew',
                    arguments: {
                        title: "",
                        description: "",
                        imageSrc: "",
                        date: ""
                    }
                });
                if (response.data.error) throw response.data.error
                actions.getNews()
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
        },
        async getNews({ state, commit }) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const response = await axios.post(configure.serverPath, {
                    method: 'getNews',
                    arguments: {
                        limit: null
                    }
                });
                if (response.data.error) throw response.data.error
                state.news = response.data
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        }
    },
    getters: {
        news(state) {
            return state.news
        }
    }
}