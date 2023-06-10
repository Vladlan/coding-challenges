"use strict";

const inp = [
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 999, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
  1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
];
const inp1 = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  if (!candles.length) return 0;
  candles.sort((a, b) => a - b);
  let count = 1;
  for (let i = candles.length - 1; i > 0; i--) {
    if (candles[i] === candles[i - 1]) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}

const res = birthdayCakeCandles(inp);
console.log("res: ", res);
