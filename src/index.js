import XnsStatComparePack from "./XnsStatComparePack.vue";

export default {
    install(Vue, options) {
        // register component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("xns-stat-compare-pack", XnsStatComparePack);
    }
}