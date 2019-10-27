import Vue from "vue";
import Vuex from "vuex";
import main from "./main";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    drawerLeft: false,
    dialogs: {
      access: false //login & signUp
    },
    userInfo: {
      id: undefined,
      token: undefined,
      username: undefined,
    },
  },
  mutations: {
    drawerLeft(state, value) {
      state.drawerLeft = value;
    },
    userInfo(state, value) {
      state.userInfo = value;
    },
    accessDialog(state, value) {
      state.dialogs.access = value;
    }
  },
  getters: {
    userInfo: state => state.userInfo,
    userLogged: state => state.userInfo.id ? undefined : false,
    drawerLeft: state => state.drawerLeft,
    accessDialog: state => state.dialogs.access
  },
  plugins: [vuexLocal.plugin]
});
