export const LAYERS = {
  Background: {
    class: "z-29",
    name: "background",
    list: [
      "Analogous Kobi.png",
      "B'dazzled Blue.png",
      "Bamboo Antique.png",
      "Bamboo Navy.png",
      "Bamboo.png",
    ],
    required: false,
  },
  Body: {
    class: "z-30",
    name: "body",
    list: ["Naked Gohan.png"],
    required: true,
  },
  Gohanmoji: {
    class: "z-50",
    name: "gohanmoji",
    list: [
      "Bubblegum.png",
      "Bunny.png",
      "Chu Chu.png",
      "Crying.png",
      "Daydreaming.png",
    ],
    required: true,
  },
  Hair: {
    class: "z-[51]",
    name: "hairStyle",
    list: [
      "Balayage Dreadlocks.png",
      "Black KunKun.png",
      "Blonde Buzz Cut.png",
      "Blonde Extra Long.png",
      "Blonde Princess.png",
    ],
    required: false,
  },
  Earring: {
    class: "z-[52]",
    name: "earring",
    list: [
      "Ancient Coinage.png",
      "Black Bead Stud.png",
      "Black Four-pointed Star.png",
      "Black Rivet Punk Stud.png",
      "Chinese Knot.png",
    ],
    required: false,
  },
  Clothing: {
    class: "z-[53]",
    name: "clothes",
    list: [
      "Beggar.png",
      "Blue Hoodie.png",
      "Boho Dress.png",
      "Camper.png",
      "Childe.png",
    ],
    required: false,
  },
  Hat: {
    class: "z-[54]",
    name: "hat",
    list: [
      "Avocado & Egg Bagel.png",
      "Bacon Pasta.png",
      "Basilico Pasta.png",
      "Beanie Beige.png",
      "Beanie Green.png",
    ],
    required: false,
  },
  Accessory: {
    class: "z-[55]",
    name: "accessory",
    list: [
      "Black Frame Round Glasses.png",
      "Chinese Spell Charm.png",
      "Eyebrow Ring.png",
      "Flying Goggles.png",
      "Golden Frame Round Glasses.png",
    ],
    required: false,
  },
  "Right Hand": {
    class: "z-[56]",
    name: "onHand",
    list: [
      "7-11 Fish Balls.png",
      "Ancient Pipe.png",
      "Banana.png",
      "Beer.png",
      "Boba Milk Tea.png",
    ],
    required: false,
  },
};

export const SCREEN = {
  lg: 1024,
};

export const NOT_COMPATIBLE_AGENTS = [
  "quark",
  "micromessenger",
  "weibo",
  "douban",
];
