import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "primeicons/primeicons.css";
// import "./api";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJ_A3m7jDMMHXb7v0ioWymnDku8Hhm1lA",
  authDomain: "vue-de-stup.firebaseapp.com",
  databaseURL:
    "https://vue-de-stup-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-de-stup",
  storageBucket: "vue-de-stup.appspot.com",
  messagingSenderId: "220822504643",
  appId: "1:220822504643:web:7ef60f23699b276b170e76",
};

initializeApp(firebaseConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
