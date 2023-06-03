const { perimeter } = require("./index");

describe("perimeter", () => {
  const input = [0, 2, 3, 5, 225];
  const output = [4n, 10n, 16n, 42n, 398774124746427085198987615554415994411067192672n];

  for (let n = 0; n < input.length; n++) {
    if (n !== 0) return;
    it(`#${n} perimeter(${input[n]}) should return ${output[n]}`, () => {
      const res = perimeter(input[n]);
      expect(res).toEqual(output[n]);
    });
  }
});
