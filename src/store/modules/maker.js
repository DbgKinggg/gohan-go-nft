import { SCREEN, LAYERS } from "../../utils/Maker/variables";

const getFreeLayers = () => {
  const layers = structuredClone(LAYERS);
  Object.keys(layers).forEach((layer) => {
    layers[layer].list = layers[layer].list.slice(0, 5);
  });

  return layers;
};

const state = {
  avatarOptions: [],
  showSideBar: window.innerWidth > SCREEN.lg,
  layers: getFreeLayers(),
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
  getAllLayers(state) {
    state.layers = LAYERS;
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
