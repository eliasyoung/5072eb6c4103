import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import song from "./song";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    song,
  },
});
