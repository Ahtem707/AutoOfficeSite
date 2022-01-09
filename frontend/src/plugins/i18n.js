import Vue from 'vue';
import VueI18n from "vue-i18n";
import localize from "@/localize.ts"

Vue.use(VueI18n);

// Create VueI18n instance with options
export default new VueI18n({
    locale: Vue.prototype.$session.get('localize'), // set locale
    messages: localize, // set locale messages
})