import Home from "../views/Home.vue";
import { createWebHistory } from "vue-router";
import { createLangRouter } from "vue-lang-router";

import translations from "../lang/translations";

const routes = [
  {
    path: "/",
    name: "root",
    component: Home,
  },
];

const langRouterOptions = {
  defaultLanguage: "en",
  translations,
};
const routerOptions = {
  routes,
  history: createWebHistory(),
};

const router = createLangRouter(langRouterOptions, routerOptions);

export default router;
