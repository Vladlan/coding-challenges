/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const sortedNums = nums.sort();
    for (let i = 0; i < sortedNums.length; i += 2) {
        if (typeof sortedNums[i + 1] === 'undefined') return sortedNums[i];
        if (sortedNums[i] !== sortedNums[i + 1]) {
            return sortedNums[i];
        }
    }
};