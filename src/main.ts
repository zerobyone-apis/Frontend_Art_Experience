import Vue from "vue";
import vuetify from './plugins/vuetify';
import App from "./App/App.vue";
import router from "./router";
import { store } from "./store";
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';

import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from 'vue-backtotop'

Vue.use(BackToTop)
Vue.use(Croppa);
AOS.init({ disable: "phone" });
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export default {};
