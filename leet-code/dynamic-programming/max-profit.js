/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let mProfit = 0;
  let min = prices[0];
  for (const price of prices) {
    min = Math.min(min, price);
    mProfit = Math.max(mProfit, price - min);
  }
  return mProfit;
};

// const res = maxProfit([1,2]); // 1
// const res = maxProfit([2, 4, 1]); // 2
const res = maxProfit([7, 1, 5, 3, 6, 4]); // 5
console.log("res: ", res);
