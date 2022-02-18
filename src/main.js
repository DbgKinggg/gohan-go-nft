import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { ObserveVisibility } from "vue-observe-visibility";
import i18n from "./i18n";
import { createAppRouter, defaultLocale } from "./router/index.js";

const app = createApp(App);
app.directive("observe-visibility", {
  beforeMount: (el, binding, vnode) => {
    vnode.context = binding.instance;
    ObserveVisibility.bind(el, binding, vnode);
  },
  update: ObserveVisibility.update,
  unmounted: ObserveVisibility.unbind,
});

const $i18n = i18n(defaultLocale);

app.use($i18n);
app.use(createAppRouter($i18n));
app.mount("#app");
