function solution(A) {
    let count = 0;
    let el = 0;
    while (el !== undefined) {
      if (A[el]) {
        el = A[el];
        count++;
      } else {
        return count;
      }
    }
    return count;
}

const TestCases = [
  [[1,4,-1,3,2], 4],
];

for (const test of TestCases) {
  const result = solution(test[0]);
  const expected = test[1];

  if (result === expected) {
    console.log("OK!");
  } else {
    console.log(
      "ERROR! (expected: " + expected + ")" + " (result: " + result + ")"
    );
  }
}
