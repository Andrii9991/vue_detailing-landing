export default {
  namespaced: true,
  state: {
    isOpened: false,
  },
  getters: {},
  mutations: {
    setOpenModal(state) {
      state.isOpened = !state.isOpened;
    },
  },
  actions: {},
  modules: {},
};
