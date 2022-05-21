import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { ObserveVisibility } from "vue-observe-visibility";
import VueLazyLoad from "vue3-lazyload";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from "./router";
import { i18n } from "vue-lang-router";
import store from "./store";

const app = createApp(App);
app.directive("observe-visibility", {
  beforeMount: (el, binding, vnode) => {
    vnode.context = binding.instance;
    ObserveVisibility.bind(el, binding, vnode);
  },
  update: ObserveVisibility.update,
  unmounted: ObserveVisibility.unbind,
});

app
  .use(VueLazyLoad)
  .use(router)
  .use(i18n)
  .use(store)
  .use(Toast, {})
  .mount("#app");
