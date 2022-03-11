export const LAYERS = {
  Body: {
    class: "z-30",
    name: "body",
    list: ["body"],
    required: true,
  },
  Face: {
    class: "z-50",
    name: "face",
    list: ["01", "02", "03", "04"],
    required: true,
  },
  Hairstyle: {
    class: "z-[51]",
    name: "hairStyle",
    list: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
    required: false,
  },
  Hat: {
    class: "z-[52]",
    name: "hat",
    list: ["01", "02", "03", "04", "05"],
    required: false,
  },
  Clothes: {
    class: "z-[53]",
    name: "clothes",
    list: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
    required: false,
  },
  Accessory: {
    class: "z-[54]",
    name: "accessory",
    list: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
    ],
    required: false,
  },
  OnHand: {
    class: "z-[55]",
    name: "onHand",
    list: ["01", "02", "03", "04", "05", "06", "07"],
    required: false,
  },
};

export const SCREEN = {
  lg: 1024,
};

export const BACKGROUNDS = [
  "bg-white",
  "bg-slate-400",
  "bg-gray-400",
  "bg-gray-900",
  "bg-red-400",
  "bg-orange-400",
  "bg-amber-400",
  "bg-yellow-400",
  "bg-lime-400",
  "bg-green-400",
  "bg-emerald-400",
  "bg-teal-400",
  "bg-cyan-400",
  "bg-sky-400",
  "bg-blue-400",
  "bg-indigo-400",
  "bg-purple-400",
  "bg-fuchsia-400",
  "bg-pink-400",
  "bg-rose-400",
];

export const NOT_COMPATIBLE_AGENTS = [
  "quark",
  "micromessenger",
  "weibo",
  "douban",
];
