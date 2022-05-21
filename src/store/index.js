import { createStore } from "vuex";
import maker from "./modules/maker";
import wallet from "./modules/wallet";
import contract from "./modules/contract";

export default createStore({
  modules: {
    maker,
    wallet,
    contract,
  },
});
