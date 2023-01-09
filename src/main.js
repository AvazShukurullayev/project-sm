import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./global.scss";

/* import uiComponents from "@/components/ui-components/";
const uiApp = new Vue();
uiComponents.map((component) => uiApp.component(component.name, component)), */
  (Vue.config.productionTip = false);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
