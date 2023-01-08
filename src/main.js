import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { firebaseConfig } from "./config.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Notifications from "vue-notification";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import SsrCarousel from "vue-ssr-carousel";
import "vue-ssr-carousel/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Notifications);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Firabase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Global components
Vue.component("ssr-carousel", SsrCarousel);
Vue.component("c-button", () => import("@/components/custom/button.vue"));
Vue.component("c-input", () => import("@/components/custom/input.vue"));
Vue.component("c-select", () => import("@/components/custom/select.vue"));

Vue.config.productionTip = false;
Vue.config.devtools = true;

// Global variables
export let emailValidator = require("email-validator");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
