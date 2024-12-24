import Vue from "vue";
import Vuex from "vuex";
import modal from "./modal";
import services from "./services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    modal,
    services,
  },
});
