<template>
  <div>
    <BaseSideDrawer
      :showConnectWallet="true"
      :showConnectWalletOnMobile="true"
    />
    <div class="min-h-screen bg-violet flex text-white overflow-hidden">
      <div class="mx-auto mt-48 mb-64">
        <div>
          <div v-if="!isCurrentPublic" class="text-center">
            <h1
              class="
                text-6xl
                lg:text-7xl
                text-indigo-100
                transition
                transform
                hover:-translate-y-1 hover:scale-105
                cursor-pointer
                neonText
              "
            >
              {{ t("minter.base.presale") }}
            </h1>
            <div class="text-gray-300 mt-12 text-lg lg:text-xl">
              <div v-if="wlAllowedAmount === null">
                {{ t("minter.message.connectWallet") }}
              </div>
              <div v-else-if="wlAllowedAmount == '0'">
                {{ t("minter.message.notWhitelisted") }}
              </div>
              <div v-else>
                {{ t("minter.message.wlLimit[0]") }}
                <span
                  class="text-2xl underline text-indigo-500 cursor-pointer"
                  >{{ wlAllowedAmount }}</span
                >
                {{ t("minter.message.wlLimit[1]") }}
              </div>
            </div>
          </div>
          <div v-else class="text-center">
            <h1
              class="
                text-6xl
                lg:text-7xl
                text-indigo-100
                transition
                transform
                hover:-translate-y-1 hover:scale-105
                cursor-pointer
                neonText
              "
            >
              {{ t("minter.base.publicSale") }}
            </h1>
            <div class="text-gray-300 mt-12 text-md lg:text-lg">
              {{ t("minter.message.publicLimit[0]") }}
              <span class="text-2xl underline text-indigo-500 cursor-pointer">{{
                MAX_PER_TRANSACTION
              }}</span>
              {{ t("minter.message.publicLimit[1]") }}
            </div>
          </div>
        </div>
        <div
          class="
            text-center text-xl
            mt-20
            bg-indigo-200/20
            rounded-2xl
            p-6
            max-w-xl
            mx-auto
            relative
          "
        >
          <div
            class="text-3xl text-center uppercase text-red-100"
            v-if="mintEnded"
          >
            <h2>{{ t("minter.base.isOver") }}</h2>
          </div>
          <img
            src="/images/monkey_horizontal.png"
            alt="GohanGo!!"
            class="absolute w-36 -top-20 left-0"
          />
          <div v-if="isCurrentPublic">
            <p>
              {{ t("minter.base.price") }}
              {{ publicMintPrice + " eth" }}
            </p>
            <p>
              {{ t("minter.base.publicTime") }}
            </p>
          </div>
          <div v-else>
            <p>
              {{ t("minter.base.price") }}
              {{ t("minter.base.free") }}
            </p>
            <p>
              {{ t("minter.base.presaleTime") }}
            </p>
            <p>
              {{ t("minter.base.presaleDuration") }}
            </p>
          </div>
        </div>
        <div class="relative mt-6 max-w-5xl hidden lg:block">
          <img
            v-lazy="{ src: '/images/rice_cooker.png' }"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              class="text-3xl mt-11 text-center"
              :class="{ 'mb-16': isCurrentPublic, 'mb-8': !isCurrentPublic }"
            >
              <template v-if="isCurrentPublic">
                <span class="text-orange-300" v-if="supply >= totalSupply">{{
                  t("minter.base.publicMintOut")
                }}</span>
                <template v-else>
                  <span v-html="supply"></span>&nbsp;/&nbsp;<span
                    v-html="totalSupply"
                  ></span>
                  {{ t("minter.base.minted") }}
                </template>
              </template>
              <template v-else>
                <span
                  class="text-orange-300"
                  v-if="supply >= totalPresaleSupply"
                  >{{ t("minter.base.presaleMintOut") }}</span
                >
                <template v-else>
                  <span v-html="supply"></span>&nbsp;/<span
                    v-html="totalPresaleSupply"
                  ></span>
                  <p>{{ t("minter.base.minted") }}</p>
                </template>
              </template>
            </div>
            <div class="flex space-x-6 justify-center text-2xl">
              <button
                type="button"
                class="
                  rounded-full
                  bg-white
                  shadow-xl
                  border-b-4 border-gray-500
                  text-2xl text-black
                  transition
                  hover:-translate-y-1
                  py-2
                  px-4
                "
                @click="minusAmount"
              >
                -
              </button>
              <span class="pl-10 pr-10" v-html="amount"></span>
              <button
                type="button"
                class="
                  rounded-full
                  bg-white
                  shadow-xl
                  border-b-4 border-gray-500
                  text-2xl text-black
                  transition
                  hover:-translate-y-1
                  py-2
                  px-4
                "
                @click="addAmount"
              >
                +
              </button>
            </div>
          </div>
          <div
            class="absolute top-1/2 left-1/2 translate-x-36 -translate-y-1/2"
          >
            <button
              class="
                rounded-full
                bg-orange-600
                hover:bg-orange-700
                shadow-xl
                border-b-4 border-orange-800
                text-2xl text-white
                transition
                hover:-translate-y-1
                py-8
                px-8
              "
              v-if="minting"
              disabled
            >
              <BaseIconSpinner extraClasses="mr-2 inline-block text-white" />
            </button>
            <button
              class="
                rounded-full
                bg-orange-600
                hover:bg-orange-700
                shadow-xl
                border-b-4 border-orange-800
                text-2xl text-white
                transition
                hover:-translate-y-1
                py-8
                px-8
              "
              @click="mintMyGohan"
              v-else
            >
              {{ t("minter.base.mint") }}
            </button>
          </div>
        </div>
        <div class="lg:hidden">
          <img
            v-lazy="{ src: '/images/rice_cooker.gif' }"
            alt="rice cooker animated"
          />
        </div>
        <div class="block lg:hidden">
          <div class="my-6 text-3xl text-center">
            <template v-if="isCurrentPublic">
              <span class="text-orange-300" v-if="supply >= totalSupply">{{
                t("minter.base.publicMintOut")
              }}</span>
              <template v-else>
                <span v-html="supply"></span>&nbsp;/<span
                  v-html="totalSupply"
                ></span>
                {{ t("minter.base.minted") }}
              </template>
            </template>
            <template v-else>
              <span
                class="text-orange-300"
                v-if="supply >= totalPresaleSupply"
                >{{ t("minter.base.presaleMintOut") }}</span
              >
              <template v-else>
                <span v-html="supply"></span>&nbsp;/<span
                  v-html="totalPresaleSupply"
                ></span>
                {{ t("minter.base.minted") }}
              </template>
            </template>
          </div>
          <div class="flex space-x-6 justify-center">
            <button
              class="text-4xl transition transform hover:scale-110"
              @click="minusAmount"
            >
              -
            </button>
            <input
              type="number"
              v-model="amount"
              class="
                bg-transparent
                pl-6
                text-3xl
                rounded-2xl
                w-48
                focus:outline-none focus:ring-2 focus:ring-orange-400
                border-2 border-orange-200
              "
            />
            <button
              class="text-4xl transition transform hover:scale-110"
              @click="addAmount"
            >
              +
            </button>
          </div>
          <div class="flex mt-6">
            <button
              class="
                rounded-full
                bg-orange-600
                hover:bg-orange-700
                shadow-xl
                border-b-4 border-orange-800
                text-2xl text-white
                transition
                hover:-translate-y-1
                py-8
                px-8
                mx-auto
              "
              v-if="minting"
              disabled
            >
              <BaseIconSpinner extraClasses="mr-2 inline-block text-white" />
            </button>
            <button
              class="
                rounded-full
                bg-orange-600
                hover:bg-orange-700
                shadow-xl
                border-b-4 border-orange-800
                text-2xl text-white
                transition
                hover:-translate-y-1
                py-8
                px-8
                mx-auto
              "
              @click="mintMyGohan"
              v-else
            >
              {{ t("minter.base.mint") }}
            </button>
          </div>
        </div>

        <div class="mt-5 text-lg text-center break-all px-6" v-if="txHash">
          {{ t("minter.message.submitted") }}
          <p>
            <a
              class="
                text-indigo-400
                underline underline-offset-2
                hover:text-indigo-500
                break-all
              "
              :href="txHash"
              target="_blank"
              >{{ txHash }}</a
            >
          </p>
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>

<script setup>
import BaseSideDrawer from "../components/Base/BaseSideDrawer.vue";
import BaseIconSpinner from "../components/Base/Icon/BaseIconSpinner.vue";
import HomeFooter from "../components/Home/HomeFooter.vue";
import { useToast } from "vue-toastification";
import { watchEffect, ref, computed } from "vue";
import { useStore } from "vuex";
import { ethers } from "ethers";
import { useI18n } from "vue-i18n";

const amount = ref(1);
const totalPresaleSupply = 1234;
const publicMintPrice = 0.02;
const totalSupply = 3333;
const publicStartDateTime = 1652068800;
const MAX_PER_TRANSACTION = 6;

// stores
const store = useStore();
const supply = computed(() =>
  store.state.contract.supply !== "-"
    ? parseInt(store.state.contract.supply)
    : "-"
);
const wlAllowedAmount = computed(() => store.state.contract.wlAllowedAmount);
const isWhitelistActive = computed(() => store.state.contract.isWlActive);
const isPublicActive = computed(() => store.state.contract.isPublicActive);

// refs
const isCurrentPublic = ref(false);
const txHash = ref("");
const minting = ref(false);

const toast = useToast();
const { t } = useI18n({ useScope: "global" });

const currentDateTime = Math.round(+new Date() / 1000);
const mintEnded = currentDateTime > 1652234400;

const displayErrorMessage = (message) => {
  toast.error(message, { bodyClassName: ["custom_font"] });
};

const displaySuccessMessage = (message) => {
  toast.success(message, { bodyClassName: ["custom_font"] });
};

const keepCheckingPublic = () => {
  checkIfCurrentIsPublic();
  setInterval(() => {
    checkIfCurrentIsPublic();
  }, 5000);
};

const checkIfCurrentIsPublic = () => {
  const currentDate = Math.round(+new Date() / 1000);
  if (publicStartDateTime < currentDate) {
    isCurrentPublic.value = true;
  }
};

const keepRefreshingData = () => {
  store.dispatch("contract/getSupply");

  setInterval(() => {
    store.dispatch("contract/getSupply");
  }, 5000);
};

const keepCheckingIfMintIsActive = () => {
  setInterval(() => {
    if (isCurrentPublic.value) {
      store.dispatch("contract/checkIfPublicActive");
    } else {
      store.dispatch("contract/checkIfWlActive");
    }
  }, 5000);
};

const keepCheckingWlAmount = () => {
  store.dispatch("contract/getWhitelistAmount");
  setInterval(() => {
    store.dispatch("contract/getWhitelistAmount");
  }, 20000);
};

watchEffect(() => {
  const contract = store.state.wallet.contract;
  if (contract === null) return;
  keepRefreshingData();
  keepCheckingIfMintIsActive();

  // check if current address is whitelisted
  if (!isCurrentPublic.value) {
    keepCheckingWlAmount();
  }
});

// If current is public => return MAX TRANSACTION AMOUNT
// If current is private => return value from contract
const getMaxMintAmount = () => {
  if (isCurrentPublic.value) {
    return MAX_PER_TRANSACTION;
  }

  if (wlAllowedAmount.value !== null && wlAllowedAmount.value != "0") {
    return wlAllowedAmount.value;
  }

  return 0;
};

const addAmount = () => {
  if (amount.value >= getMaxMintAmount()) {
    return;
  }

  amount.value++;
};

const minusAmount = () => {
  if (amount.value <= 0) {
    return;
  }

  amount.value--;
};

const mintMyGohan = () => {
  if (!isCurrentPublic.value) {
    if (wlAllowedAmount.value == null) {
      displayErrorMessage(t("minter.error.connectWalletFirst"));
      return;
    } else if (wlAllowedAmount.value == "0") {
      displayErrorMessage(t("minter.message.notWhitelisted"));
      return;
    }
  }

  txHash.value = "";
  if (isCurrentPublic.value) {
    publicMint();
  } else {
    presaleMint();
  }
};

const presaleMint = async () => {
  if (!store.state.wallet.contract || !store.state.wallet.signer) {
    displayErrorMessage(t("minter.error.connectWalletFirst"));
    return;
  }

  if (isCurrentPublic.value) {
    displayErrorMessage(t("minter.error.notPresaleTime"));
    return;
  }

  if (!isWhitelistActive.value) {
    displayErrorMessage(t("minter.error.presaleNotOpen"));
    return;
  }

  if (amount.value > wlAllowedAmount.value || amount.value <= 0) {
    displayErrorMessage(
      t("minter.error.maxAmount", { amount: wlAllowedAmount.value })
    );
    return;
  }

  if (supply.value >= totalPresaleSupply) {
    displayErrorMessage(t("minter.error.wlMintOut"));
    return;
  }

  minting.value = true;
  const contract = store.state.wallet.contract;

  try {
    const mintResult = await contract.whitelistMint(amount.value);

    console.log(mintResult.hash);
    if (mintResult.hash && import.meta.env.VITE_SCAN_URL) {
      txHash.value = import.meta.env.VITE_SCAN_URL + "/tx/" + mintResult.hash;
      console.log(txHash.value);
    }
  } catch (err) {
    displayErrorMessage(err.message);
  } finally {
    minting.value = false;
  }
};

const publicMint = async () => {
  if (!store.state.wallet.contract || !store.state.wallet.signer) {
    displayErrorMessage(t("minter.error.connectWalletFirst"));
    return;
  }

  if (!isCurrentPublic.value) {
    displayErrorMessage(t("minter.error.notPublicTime"));
    return;
  }

  if (!isPublicActive.value) {
    displayErrorMessage(t("minter.error.publicNotOpen"));
    return;
  }

  if (amount.value > MAX_PER_TRANSACTION || amount.value <= 0) {
    displayErrorMessage(
      t("minter.error.maxAmount", { amount: MAX_PER_TRANSACTION })
    );
    return;
  }

  if (supply.value >= totalSupply) {
    displayErrorMessage(t("minter.error.publicSoldOut"));
    return;
  }

  if (amount.value + supply.value > totalSupply) {
    displayErrorMessage(t("minter.error.exceedTotalSupply"));
    return;
  }

  minting.value = true;
  const contract = store.state.wallet.contract;

  try {
    const mintEthers = publicMintPrice * amount.value;
    const mintResult = await contract.mintMyGohan(amount.value, {
      value: ethers.utils.parseEther(mintEthers.toString()),
    });

    if (mintResult.hash && import.meta.env.VITE_SCAN_URL) {
      txHash.value = import.meta.env.VITE_SCAN_URL + "/tx/" + mintResult.hash;
      displaySuccessMessage(t("minter.message.txSubmitted"));
    }
  } catch (err) {
    displayErrorMessage(err.message);
  } finally {
    minting.value = false;
  }
};

keepCheckingPublic();
</script>

<style scoped>
.neonText {
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #5271ff,
    0 0 82px #5271ff, 0 0 92px #5271ff;
}
</style>