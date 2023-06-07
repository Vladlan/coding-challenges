const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

const res = maxProfit(prices);
const res2 = maxProfit(prices2);
const res3 = maxProfit(prices3);

console.log("res: ", res); // 4 + 3 = 7
console.log('res2: ', res2); // 4
console.log('res3: ', res3); // 0
