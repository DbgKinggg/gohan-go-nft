export const LAYERS = {
  Background: {
    class: "z-20",
    name: "background",
    list: [],
    required: false,
  },
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
