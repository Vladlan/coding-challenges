const { isOre } = require("./index");

const testCases = [
  [6, true],
  [28, true],
  [140, true],
];

describe("isOre", () => {
  testCases.forEach(([input, res], index) => {
    // if (index !== 2) return;
    it(`${index} should return ${res} for ${input}`, () => {
      expect(isOre(input)).toEqual(res);
    });
  });
});
