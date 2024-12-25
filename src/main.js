import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "primeicons/primeicons.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Імпортуй стилі з встановленого пакета
new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
