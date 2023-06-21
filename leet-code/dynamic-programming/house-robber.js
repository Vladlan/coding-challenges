/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  let side1 = 0;
  let side2 = 0;
  for (const el of nums) {
    temp = Math.max(side1 + el, side2);
    side1 = side2;
    side2 = temp;
  }
  return side2
};

const nums = [1, 2, 3, 1]; // 4
const res = rob(nums);
console.log("res: ", res);
