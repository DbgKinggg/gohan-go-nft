import { SCREEN, LAYERS } from "../../utils/Maker/variables";

const state = {
  avatarOptions: [],
  background: "bg-white", // default white
  showSideBar: window.innerWidth > SCREEN.lg,
};

const mutations = {
  setAvatarOptions(state, avatarOptions) {
    state.avatarOptions = avatarOptions;
  },
  replaceAvatarOption(state, { layer, avatarOption }) {
    state.avatarOptions[layer] = avatarOption;
  },
  removeLayer(state, layer) {
    delete state.avatarOptions[layer];
  },
  changeBackground(state, color) {
    state.background = color;
  },
};

const actions = {
  replaceAvatarOption({ commit }, { layer, itemName }) {
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
  removeLayer({ commit }, layer) {
    if (!LAYERS[layer]) {
      return;
    }

    if (LAYERS[layer].required) {
      return;
    }

    commit("removeLayer", layer);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
