import Vue from "vue";
import "./plugins/vuetify";
import App from "./app/app.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import Locale from "./locale";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: store.state.lang, // set locale
  messages: {
    en: Locale.en,
    es: Locale.es
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

export default {
  i18n
};
