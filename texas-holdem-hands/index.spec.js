const { hand } = require("./index");

describe("hand", () => {
  const input = [
    [
      ["K♠", "A♦"],
      ["J♣", "Q♥", "9♥", "2♥", "3♦"],
    ],
    [
      ["K♠", "Q♦"],
      ["J♣", "Q♥", "9♥", "2♥", "3♦"],
    ],
    [
      ["K♠", "J♦"],
      ["J♣", "K♥", "9♥", "2♥", "3♦"],
    ],
    [
      ["4♠", "9♦"],
      ["J♣", "Q♥", "Q♠", "2♥", "Q♦"],
    ],
    [
      ["Q♠", "2♦"],
      ["J♣", "10♥", "9♥", "K♥", "3♦"],
    ],
    [
      ["A♠", "K♦"],
      ["J♥", "5♥", "10♥", "Q♥", "3♥"],
    ],
    [
      ["A♠", "A♦"],
      ["K♣", "K♥", "A♥", "Q♥", "3♦"],
    ],
    [
      ["2♠", "3♦"],
      ["2♣", "2♥", "3♠", "3♥", "2♦"],
    ],
    [
      ["8♠", "6♠"],
      ["7♠", "5♠", "9♠", "J♠", "10♠"],
    ],
    [
      ["Q♠", "K♦"],
      ["J♣", "10♥", "9♥", "K♥", "K♦"],
    ],
    [
      ["6♣", "5♦"],
      ["K♥", "6♠", "8♠", "9♠", "7♦"],
    ],
    [
      ["5♠", "5♦"],
      ["7♠", "2♠", "10♥", "5♥", "5♣"],
    ],
    [
      ["4♠", "10♣"],
      ["A♦", "10♥", "10♠", "5♥", "K♥"],
    ],
  ];
  const output = [
    { type: "nothing", ranks: ["A", "K", "Q", "J", "9"] },
    { type: "pair", ranks: ["Q", "K", "J", "9"] },
    { type: "two pair", ranks: ["K", "J", "9"] },
    { type: "three-of-a-kind", ranks: ["Q", "J", "9"] },
    { type: "straight", ranks: ["K", "Q", "J", "10", "9"] },
    { type: "flush", ranks: ["Q", "J", "10", "5", "3"] },
    { type: "full house", ranks: ["A", "K"] },
    { type: "four-of-a-kind", ranks: ["2", "3"] },
    { type: "straight-flush", ranks: ["J", "10", "9", "8", "7"] },
    { type: "straight", ranks: ["K", "Q", "J", "10", "9"] },
    { type: "straight", ranks: ["9", "8", "7", "6", "5"] },
    { type: "four-of-a-kind", ranks: ["5", "10"] },
    { type: "three-of-a-kind", ranks: ["10", "A", "K"] },
  ];

  if (output.length !== input.length) {
    throw new Error("input and output must be the same length");
  }
  for (let n = 0; n < input.length; n++) {
    // if (n === output.length - 1) {
    // if (n === 4) {
      it(`#${n} hand(${(input[0], input[1])}) should return "${
        output[n].type
      }"`, () => {
        const res = hand(...input[n]);
        expect(res).toEqual(output[n]);
      });
    // }
  }
});
