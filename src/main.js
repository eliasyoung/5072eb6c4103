import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";

import Header from "@/components/Header";

Vue.config.productionTip = false;

Vue.component(Header.name, Header);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
