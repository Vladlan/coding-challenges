function solution(A, B, C) {
    let count = 0;
    const max = 2 ** 30;

    for (let i = 0; i < max; i++) {
        if ((i & A) === A || (i & B) === B || (i & C) === C) {
            count++;
        }
    }

    return count;
}

const TestCases = [
  [1_073_741_727, 1_073_741_631, 1_073_741_679, 8],
];

for (const test of TestCases) {
  const result = solution(test[0], test[1], test[2]);
  const expected = test[3];

  if (result === expected) {
    console.log("OK!");
  } else {
    console.log(
      "ERROR! (expected: " + expected + ")" + " (result: " + result + ")"
    );
  }
}
