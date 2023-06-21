/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    if (k > nums.length) {
        k = k % nums.length;
    }
    nums.unshift(...nums.splice(nums.length - k));
    return nums;
};


const nums = [1,2,3,4,5,6,7];
const k = 3;
const r1 = rotate(nums, k); // [5,6,7,1,2,3,4]
console.log('r1: ', r1);

// const nums = [-1,-100,3,99];
// const k = 2;
// const r1 = rotate(nums, k); // [3,99,-1,-100]
// console.log('r1: ', r1);