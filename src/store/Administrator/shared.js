export default {
    state: {
        loading: false,
        error: null
    },
    mutations: {
        adminSetLoading (state,payload) {
            state.loading = payload
        },
        adminSetError (state,payload) {
            state.error = payload
        },
        adminClearError (state) {
            state.error = null
        }
    },
    actions: {
        adminSetLoading({commit},payload) {
            commit('adminSetLoading',payload)        // call setLoading from mutations
        },
        adminSetError({commit},payload) {
            commit('adminSetError',payload)          // call setError from mutations
        },
        adminClearError({commit}) {
            commit('adminSetError')          // call clearError from mutations
        }
    },
    getters: {
        adminLoading (state) {
            return state.loading
        },
        adminError (state) {
            return state.error
        },
    }
}