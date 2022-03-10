import { SCREEN, LAYERS } from "../../utils/Maker/variables";

const state = {
  avatarOptions: [],
  showSideBar: window.innerWidth > SCREEN.lg,
};

const mutations = {
  setAvatarOptions(state, avatarOptions) {
    state.avatarOptions = avatarOptions;
  },
  replaceAvatarOption(state, { layer, avatarOption }) {
    state.avatarOptions[layer] = avatarOption;
  },
};

const actions = {
  async replaceAvatarOption({ commit }, { layer, itemName }) {
    if (!LAYERS[layer]) {
      return;
    }

    const list = LAYERS[layer].list;
    if (!list.includes(itemName)) {
      return;
    }

    commit("replaceAvatarOption", {
      layer,
      avatarOption: {
        class: LAYERS[layer].class,
        name: LAYERS[layer].name,
        item: itemName,
      },
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
