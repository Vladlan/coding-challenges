// function removeDuplicatesFromSortedArray(nums) {
//     const numsSet = new Set();
//     for (let i =0; i < nums.length; i++) {
//         const num = nums[i]
//         if (numsSet.has(num)) {
//             nums[i] = null;
//         } else {
//             numsSet.add(num);
//         }
//     }
//     return nums.filter(Boolean);
// }

// function removeDuplicatesFromSortedArray(nums) {
//     const numsSet = new Set();
//     for (let i =0; i < nums.length; i++) {
//         const num = nums[i]
//         if (numsSet.has(num)) {
//             nums.splice(1,1)
//         } else {
//             numsSet.add(num);
//         }
//     }
//     return nums.filter(Boolean);
// }

function removeDuplicatesFromSortedArray(nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    console.log('insertIndex: ', insertIndex);
    console.log("nums[i - 1]: ", nums[i - 1]);
    console.log("nums[i]: ", nums[i]);
    console.log("nums: ", nums);
    if (nums[i - 1] !== nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
}

const nums = [1, 1, 2, 2, 2, 3, 4, 5];
const res = removeDuplicatesFromSortedArray(nums);
console.log("res: ", res);
console.log("nums: ", nums);
