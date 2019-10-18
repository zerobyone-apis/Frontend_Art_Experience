import Vue from "vue";
import Vuex from "vuex";
import main from "./main";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    drawer: {
      left: false,
      reservation: false
    },
    settings: {},
    userInfo: {},
    theme: {
      dark: false,
      colors: {
        nav: "#fff",
        navIcons: "#676767",
        menu: "#fff",
        menuIcons: "#ffffff"
      }
    },
    lang: "en"
  },
  mutations: {
    setLeftDrawer(state, drawer) {
      state["drawer"].left = drawer;
    },
    setReservationDrawer(state, drawer) {
      state["drawer"].reservation = drawer;
    }
  },

  actions: {},

  plugins: [vuexLocal.plugin]
});
