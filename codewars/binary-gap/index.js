function solution(N) {
  const binary = (N >>> 0).toString(2);
  const binaryArr = binary.split('');
  let max = 0;
  let count = 0;
  for (let i = 0; i < binaryArr.length; i++) {
    if (binaryArr[i] === '0') {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  return max;
}



const TestCases = [
    [20, 1],
    [15, 0],
    [32, 0],
];

for (const test of TestCases) {
    const result = solution(test[0]);
    const expected = test[1];

    if (result === expected) {
        console.log("OK!");
    } else {
        console.log("ERROR! (expected: " + expected + ")" + " (result: " + result + ")");
    }
}