/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const newRow = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      newRow.push(matrix[j][i]);
    }
    newMatrix.push(newRow);
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = newMatrix[i];
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix); // Output: [[7,4,1],[8,5,2],[9,6,3]]
console.log("matrix: ", matrix);