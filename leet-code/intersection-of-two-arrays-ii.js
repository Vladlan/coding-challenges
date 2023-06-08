/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const intersected = [];
    const longestArray = nums1.length > nums2.length ? nums1 : nums2;
    const shortestArray = nums1.length > nums2.length ? nums2 : nums1;
    for (const el of longestArray) {
        const index2 = shortestArray.indexOf(el);
        if (index2 > -1) {
            intersected.push(el);
            shortestArray.splice(index2, 1);
        }
    }
    return intersected;
};

const nums1 = [1,2,2,1];
const nums2 = [2,2];
const r1 = intersect(nums1, nums2); // [2,2]
console.log('r1: ', r1);

// const nums1 = [4, 9, 5];
// const nums2 = [9, 4, 9, 8, 4];
// const r1 = intersect(nums1, nums2); // [4,9]
// console.log("r1: ", r1);
