/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let currMaxSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
    maxSum = Math.max(currMaxSum, maxSum);
  }
  return maxSum;
};

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // [4,-1,2,1] - 6
// const res = maxSubArray(nums);

const nums = [5,4,-1,7,8]
const res = maxSubArray(nums); // 23
console.log("res: ", res);
