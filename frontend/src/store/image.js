import configure from "./Configure.js"

export default {
    state: {

    },
    mutations: {

    },
    actions: {},
    getters: {
        imageServe() {
            return configure.serverPath + 'images/'
        }
    }
}