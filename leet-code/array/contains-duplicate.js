/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const numsSorted = nums.sort();
    for (let i = 1; i < numsSorted.length; i++) {
        if (numsSorted[i] === numsSorted[i - 1]) {
            return true;
        }
    }
    return false;
};