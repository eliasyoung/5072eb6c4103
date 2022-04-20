import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsideMenu from "@/components/AsideMenu";
import RouterMenu from "@/components/RouterMenu";
import LoginPanel from "@/components/LoginPanel";

Vue.config.productionTip = false;

Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(AsideMenu.name, AsideMenu);
Vue.component(RouterMenu.name, RouterMenu);
Vue.component(LoginPanel.name, LoginPanel);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
