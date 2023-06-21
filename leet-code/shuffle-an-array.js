/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.inp = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.inp;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const nums = [...this.inp];
    for (let i = 0; i < nums.length; i++) {
        const randIdx = Math.floor(Math.random() * nums.length);
        const temp = nums[i];
        nums[i] = nums[randIdx];
        nums[randIdx] = temp;
    }
    return nums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const obj = new Solution([1, 2, 3])
const param_2 = obj.shuffle()
const param_1 = obj.reset()
console.log('param_1: ', param_1);
console.log('param_2: ', param_2);