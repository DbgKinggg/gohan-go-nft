const defaultState = {
  supply: "-",
  wlAllowedAmount: null,
  isWlActive: false,
  isPublicActive: false,
  isHolder: null,
};

const supplyLoaded = (payload) => {
  return {
    ...payload,
    type: "supplyLoaded",
  };
};

const updateWlAllowedAmount = (payload) => {
  return {
    ...payload,
    type: "updateWlAllowedAmount",
  };
};

const updateWlActiveStatus = (payload) => {
  return {
    ...payload,
    type: "updateWlActiveStatus",
  };
};

const updatePublicStatus = (payload) => {
  return {
    ...payload,
    type: "updatePublicActiveStatus",
  };
};

const updateIsHolder = (payload) => {
  return {
    ...payload,
    type: "updateIsHolder",
  };
};

const mutations = {
  supplyLoaded(state, payload) {
    state.supply = payload.supply;
  },
  updateWlAllowedAmount(state, payload) {
    state.wlAllowedAmount = payload.amount;
  },
  updateWlActiveStatus(state, payload) {
    state.isWlActive = payload.active;
  },
  updatePublicActiveStatus(state, payload) {
    state.isPublicActive = payload.active;
  },
  updateIsHolder(state, payload) {
    state.isHolder = payload.isHolder;
  },
};

const actions = {
  async getSupply({ commit, rootState }) {
    if (!rootState.wallet.contract) {
      return;
    }

    const contract = rootState.wallet.contract;
    const supply = await contract.totalSupply();
    const supplyNumber = supply.toString();

    commit(
      supplyLoaded({
        supply: supplyNumber,
      })
    );
  },
  async checkIfWlActive({ commit, rootState }) {
    if (!rootState.wallet.contract) {
      return;
    }

    const contract = rootState.wallet.contract;
    const isWlActive = await contract.whitelistActive();

    commit(
      updateWlActiveStatus({
        active: isWlActive,
      })
    );
  },
  async checkIfPublicActive({ commit, rootState }) {
    if (!rootState.wallet.contract) {
      return;
    }

    const contract = rootState.wallet.contract;
    const isPublicActive = await contract.publicSaleActive();

    commit(
      updatePublicStatus({
        active: isPublicActive,
      })
    );
  },
  async getWhitelistAmount({ commit, rootState }) {
    if (!rootState.wallet.contract || !rootState.wallet.address) {
      return;
    }

    const contract = rootState.wallet.contract;
    const wlAmount = await contract.whitelist(rootState.wallet.address);
    const wlAmountString = wlAmount.toString();

    commit(
      updateWlAllowedAmount({
        amount: wlAmountString,
      })
    );
  },
  async checkIsGohanHolder({ commit, rootState }) {
    if (!rootState.wallet.contract || !rootState.wallet.address) {
      return;
    }

    const contract = rootState.wallet.contract;
    const balance = await contract.balanceOf(rootState.wallet.address);
    const balanceString = balance.toString();

    commit(
      updateIsHolder({
        isHolder: parseInt(balanceString) > 0,
      })
    );
  },
};

export default {
  namespaced: true,
  state: defaultState,
  actions,
  mutations,
};
