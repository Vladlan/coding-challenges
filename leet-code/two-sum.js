/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let baseIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + nums[baseIndex] === target) {
      return [baseIndex, i];
    }
    if (i === nums.length - 1) {
        i = baseIndex + 1;
        baseIndex++;
    }
  }
  return [];
};

// const nums = [2,7,11,15];
// const target = 9;
// const r1 = twoSum(nums, target); // [0,1]
// console.log('r1: ', r1);

const nums = [3, 2, 4];
const target = 6;
const r1 = twoSum(nums, target); // [1,2]
console.log("r1: ", r1);
