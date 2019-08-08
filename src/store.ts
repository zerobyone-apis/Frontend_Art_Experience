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
      left: false
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
    setLang(state, lang) {
      state.lang = lang;
      main.i18n.locale = state.lang;
    },

    setSettings(state, settings) {
      state.settings = settings;
    },

    setUserInfo(state, info) {
      state.userInfo = info;
    },

    // setTheme(state, dark) {
    //   state.theme.dark = dark;
    // },

    // setColors(state, colors) {
    //   state.theme.colors.nav = colors.nav;
    //   state.theme.colors.menu = colors.menu;
    //   state.theme.colors.menuIcons = colors.menuIcons;
    //   state.theme.colors.navIcons = colors.navIcons;
    // },

    setLeftDrawer(state, drawer) {
      state.drawer.left = drawer;
    }
  },

  actions: {},

  plugins: [vuexLocal.plugin]
});
