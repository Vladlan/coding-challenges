/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  const vars = {
    1: 1,
    2: 2,
  };
  if (vars[n]) return vars[n];
  for (let i = 3; i <= n; i++) {
    vars[i] = vars[i - 1] + vars[i - 2];
  }
  return vars[n];
};

// const n1 = 2;
// const res = climbStairs(n1); // 2
// console.log(res);

// const n1 = 3;
// const res = climbStairs(n1); // 3
// console.log(res);

const n1 = 4;
const res = climbStairs(n1); //5
console.log(res);
