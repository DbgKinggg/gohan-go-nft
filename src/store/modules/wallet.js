import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";
import { useToast } from "vue-toastification";

const defaultState = {
  loading: false,
  signer: null,
  contract: null,
  errorMsg: null,
  address: null,
};

const connectRequest = () => {
  return {
    type: "connectionRequest",
  };
};

const connectSuccess = (payload) => {
  return {
    ...payload,
    type: "connectionSuccess",
  };
};

const connectFailed = (payload) => {
  return {
    type: "connectionFailed",
    errorMsg: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    ...payload,
    type: "updateAccount",
  };
};

const updateErrorMessage = (payload) => {
  return {
    type: "updateErrorMessage",
    errorMsg: payload,
  };
};

const disconnectWallet = () => {
  return {
    type: "disconnectWallet",
  };
};

const mutations = {
  connectionRequest(state) {
    state.loading = true;
  },
  connectionSuccess(state, payload) {
    state.loading = false;
    state.contract = payload.contract;
    state.signer = payload.signer;
    state.address = payload.address;
  },
  connectionFailed(state, payload) {
    state.loading = false;
    state.errorMsg = payload.errorMsg;
  },
  updateAccount(state, payload) {
    state.signer = payload.signer;
  },
  updateErrorMessage(state, payload) {
    state.errorMsg = payload.errorMsg;
  },
  disconnectWallet(state) {
    state.loading = false;
    state.signer = null;
    state.errorMsg = "";
    state.contract = null;
    state.address = null;
  },
};

const displayErrorMessage = (message) => {
  const toast = useToast();
  toast.error(message, { bodyClassName: ["custom_font"] });
};

const switchNetwork = (targetChainId) => {
  if (window.ethereum) {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: "0x" + targetChainId.toString(16),
        },
      ],
    });
  }
};

const actions = {
  async connect({ commit, dispatch }) {
    commit(connectRequest());

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: import.meta.env.VITE_INFURA_ID,
        },
      },
    };

    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const { chainId } = await provider.getNetwork();
      const address = await signer.getAddress();

      if (window.ethereum) {
        window.ethereum.on("networkChanged", function (networkId) {
          dispatch("connect");
        });
      }

      // if NETWORK is wrong, we show error
      if (chainId != import.meta.env.VITE_CHAIN_ID) {
        displayErrorMessage("Wrong Network");
        switchNetwork(import.meta.env.VITE_CHAIN_ID);
        return;
      }

      // connect to contract
      let abi;
      await import("@/config/abi.json").then(({ default: json }) => {
        abi = json;
      });
      const contract = new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        abi,
        signer
      );

      commit(
        connectSuccess({
          signer,
          contract,
          address,
        })
      );
    } catch (err) {
      const errMsg = err.message ? err.message : "Unknown error";
      displayErrorMessage(errMsg);
    }
  },
  async disconnect({ commit }) {
    commit(disconnectWallet());
  },
};

export default {
  namespaced: true,
  state: defaultState,
  actions,
  mutations,
};
