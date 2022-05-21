import Home from "../views/Home.vue";
import Maker from "../views/Maker.vue";
import NotFound from "../views/NotFound.vue";
import Minter from "../views/Minter.vue";
import { createWebHistory } from "vue-router";
import { createLangRouter } from "vue-lang-router";
import translations from "../lang/translations";

const routes = [
  {
    path: "/",
    name: "root",
    component: Home,
  },
  {
    path: "/maker",
    name: "maker",
    component: Maker,
  },
  {
    path: "/mint",
    name: "mint",
    component: Minter,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
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
