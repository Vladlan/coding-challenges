/**
 * @param {string} s
 * @return {number}
 */
// const myAtoi = function (s) {
//   const chars = s.trim().split("");
//   const out = [];
//   let isPrevWasSpace = false;
//   let isPreWasNotNumChar = false;
//   for (const ch of chars) {
//     if (isPrevWasSpace) {
//       break;
//     }
//     if (ch === " ") {
//       if (isPreWasNotNumChar) {
//         break;
//       }
//       isPrevWasSpace = true;
//       continue;
//     }
//     if (ch === "-" || ch === "+") {
//       out.push(ch);
//       isPrevWasSpace = false;
//       isPreWasNotNumChar = true;
//       continue;
//     }
//     if (isLatinAlphabetChar(ch)) {
//       isPreWasNotNumChar = true;
//       break;
//     }
//     if (!isNaN(parseInt(ch))) {
//       out.push(ch);
//       isPrevWasSpace = false;
//       isPreWasNotNumChar = false;
//     }
//   }
//   const num = parseInt(out.join("")) || 0;
//   if (num > 2 ** 31 - 1) return 2 ** 31 - 1;
//   if (num < -(2 ** 31)) return -(2 ** 31);
//   return num;
// };

//  const s = "    -42"; // -42
// // const s = "3.14159"; // 3
// // const s = "+-12"; // 0
// // const s = "   +0 123"; // 0
// // const s = "4193 with words"; // 4193
// const r1 = myAtoi(s);
// console.log("r1: ", r1);

// function isLatinAlphabetChar(ch) {
//   return /^[a-zA-Z\.]$/.test(ch);
// }

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
};
