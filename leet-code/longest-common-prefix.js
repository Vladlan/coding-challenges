/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  strs.sort((a, b) => a.length - b.length);
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length === 0) return "";

    for (let j = 0; j < strs[0].length; j++) {
      for (let k = 1; k < strs.length; k++) {
        if (strs[i][j] !== strs[k][j]) {
          return strs[i].slice(0, j);
        }
      }
      if (j === strs[0].length - 1) return strs[0];
    }
  }
};

// const strs = ["flower", "flow", "floight"];
const strs = ["ab", "a"];
const r1 = longestCommonPrefix(strs);
console.log("r1: ", r1);
