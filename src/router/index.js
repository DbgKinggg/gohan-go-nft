import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

let defaultLocale = "en";

const createAppRouter = ($i18n) => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "root",
        component: Home,
      },
      {
        path: "/:locale",
        component: Home,
        beforeEnter: (to, from, next) => {
          const urlLocale = to.params.locale.toString();
          const supportedLocales = ["en", "ja", "zh_Hans", "zh_Hant"];

          // redirect to default locale
          if (!supportedLocales.includes(urlLocale)) return next(defaultLocale);

          if (defaultLocale !== urlLocale) {
            $i18n.global.locale.value = urlLocale;
          }

          return next();
        },
        children: [
          {
            path: "",
            name: "home",
            component: Home,
          },
        ],
      },
    ],
  });
};

export { createAppRouter, defaultLocale };
