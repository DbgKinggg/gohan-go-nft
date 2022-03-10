import { createStore } from "vuex";
import maker from "./modules/maker";

export default createStore({
  modules: {
    maker,
  },
});
