/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let i = digits.length - 1;
  while (i > -1) {
    if (digits[i] === 9) {
      digits[i] = 0;
      i--;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

const digits = [1, 2, 3];
const r1 = plusOne(digits); // [1,2,4]
console.log("r1: ", r1);
