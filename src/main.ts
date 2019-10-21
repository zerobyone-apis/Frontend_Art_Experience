import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./app/app.vue";
import router from "./router";
import store from "./store";
// import VueI18n from "vue-i18n";
import Locale from "./locale";
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';

import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from 'vue-backtotop'
 
Vue.use(BackToTop)
Vue.use(Croppa);
// Vue.use(VueI18n);
AOS.init({ disable: "phone" });


// const i18n = new VueI18n({
//   locale: store.state.lang, // set locale
//   messages: {
//     en: Locale.en,
//     es: Locale.es
//   }
// });

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount("#app");

export default {
  // i18n
};
